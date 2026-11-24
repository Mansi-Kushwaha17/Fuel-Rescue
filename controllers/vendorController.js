const Vendor = require("../models/vendor");

// Create Vendor Profile
const createVendorProfile = async (req, res) => {
    try {
        const existingVendor = await Vendor.findOne({
            userId: req.user.id
        });

        if (existingVendor) {
            return res.status(400).json({
                success: false,
                message: "Vendor profile already exists"
            });
        }

        const {
            businessName,
            ownerName,
            address,
            location
        } = req.body;

        const vendor = await Vendor.create({
            userId: req.user.id,
            businessName,
            ownerName,
            address,
            location
        });

        res.status(201).json({
            success: true,
            message: "Vendor profile created successfully",
            vendor
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Get Vendor Profile
const getVendorProfile = async (req, res) => {
    try {
        const vendor = await Vendor.findOne({
            userId: req.user.id
        }).populate("userId", "name email phone");

        if (!vendor) {
            return res.status(404).json({
                success: false,
                message: "Vendor profile not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Vendor profile fetched successfully",
            vendor
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Update Fuel Inventory
const updateFuelInventory = async (req, res) => {
    try {
        const { fuelInventory } = req.body;

        if (!Array.isArray(fuelInventory) || fuelInventory.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Fuel inventory is required"
            });
        }

        const vendor = await Vendor.findOneAndUpdate(
            { userId: req.user.id },
            { fuelInventory },
            { new: true, runValidators: true }
        );

        if (!vendor) {
            return res.status(404).json({
                success: false,
                message: "Vendor profile not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Fuel inventory updated successfully",
            vendor
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Update Vendor Availability
const updateVendorAvailability = async (req, res) => {
    try {
        const { isAvailable } = req.body;

        if (typeof isAvailable !== "boolean") {
            return res.status(400).json({
                success: false,
                message: "Availability must be true or false"
            });
        }

        const vendor = await Vendor.findOne({
            userId: req.user.id
        });

        if (!vendor) {
            return res.status(404).json({
                success: false,
                message: "Vendor profile not found"
            });
        }

        if (isAvailable && vendor.approvalStatus !== "approved") {
            return res.status(403).json({
                success: false,
                message: "Vendor must be approved before becoming available"
            });
        }

        vendor.isAvailable = isAvailable;
        await vendor.save();

        res.status(200).json({
            success: true,
            message: "Vendor availability updated successfully",
            vendor
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createVendorProfile,
    getVendorProfile,
    updateFuelInventory,
    updateVendorAvailability
};