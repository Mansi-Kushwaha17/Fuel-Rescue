
const FuelRequest = require("../models/fuelrequest");
const Vendor = require("../models/vendor");

// Create Fuel Request
const createFuelRequest = async (req, res) => {
    try {
        const {
            vendorId,
            fuelType,
            quantity,
            vehicleNumber,
            deliveryAddress
        } = req.body;

        if (
            !vendorId ||
            !fuelType ||
            !quantity ||
            !vehicleNumber ||
            !deliveryAddress
        ) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be provided"
            });
        }

        if (!["Petrol", "Diesel"].includes(fuelType)) {
            return res.status(400).json({
                success: false,
                message: "Invalid fuel type"
            });
        }

        if (
            typeof quantity !== "number" ||
            !Number.isFinite(quantity) ||
            quantity < 1
        ) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be at least 1 liter"
            });
        }

        const vendor = await Vendor.findById(vendorId);

        if (!vendor) {
            return res.status(404).json({
                success: false,
                message: "Vendor not found"
            });
        }

        if (
            vendor.approvalStatus !== "approved" ||
            !vendor.isAvailable
        ) {
            return res.status(400).json({
                success: false,
                message: "Vendor is not currently available"
            });
        }

        const fuel = vendor.fuelInventory.find(
            item => item.fuelType === fuelType
        );

        if (!fuel || fuel.availableQuantity < quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient fuel stock"
            });
        }

        const fuelRequest = await FuelRequest.create({
            customerId: req.user.id,
            vendorId,
            fuelType,
            quantity,
            vehicleNumber,
            deliveryAddress,
            pricePerLiter: fuel.pricePerLiter
        });

        res.status(201).json({
            success: true,
            message: "Fuel request created successfully",
            fuelRequest
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Get My Fuel Requests
const getMyFuelRequests = async (req, res) => {
    try {
        const fuelRequests = await FuelRequest.find({
            customerId: req.user.id
        })
        .populate("vendorId", "businessName ownerName")
        .populate("driverId", "vehicleNumber vehicleType")
        .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: fuelRequests.length,
            fuelRequests
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Get Single Fuel Request
const getFuelRequestById = async (req, res) => {
    try {
        const fuelRequest = await FuelRequest.findOne({
            _id: req.params.id,
            customerId: req.user.id
        })
            .populate("vendorId", "businessName ownerName")
            .populate("driverId", "vehicleNumber vehicleType");

        if (!fuelRequest) {
            return res.status(404).json({
                success: false,
                message: "Fuel request not found"
            });
        }

        res.status(200).json({
            success: true,
            fuelRequest
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Cancel Fuel Request
const cancelFuelRequest = async (req, res) => {
    try {
        const fuelRequest = await FuelRequest.findOne({
            _id: req.params.id,
            customerId: req.user.id
        });

        if (!fuelRequest) {
            return res.status(404).json({
                success: false,
                message: "Fuel request not found"
            });
        }

        if (fuelRequest.requestStatus !== "pending") {
            return res.status(400).json({
                success: false,
                message: "Only pending requests can be cancelled"
            });
        }

        fuelRequest.requestStatus = "cancelled";
        await fuelRequest.save();

        res.status(200).json({
            success: true,
            message: "Fuel request cancelled successfully",
            fuelRequest
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createFuelRequest,
    getMyFuelRequests,
    getFuelRequestById,
    cancelFuelRequest
};