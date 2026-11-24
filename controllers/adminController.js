const Vendor = require("../models/vendor");
const Driver = require("../models/driver");
const FuelRequest = require("../models/fuelrequest");
// Get All Pending Vendors
const getPendingVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find({
            approvalStatus: "pending"
        }).populate("userId", "name email phone");

        res.status(200).json({
            success: true,
            count: vendors.length,
            vendors
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Approve Vendor
const approveVendor = async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id);

        if (!vendor) {
            return res.status(404).json({
                success: false,
                message: "Vendor not found"
            });
        }

        if (vendor.approvalStatus === "approved") {
            return res.status(400).json({
                success: false,
                message: "Vendor is already approved"
            });
        }

        vendor.approvalStatus = "approved";
        await vendor.save();

        res.status(200).json({
            success: true,
            message: "Vendor approved successfully",
            vendor
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Reject Vendor
const rejectVendor = async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id);

        if (!vendor) {
            return res.status(404).json({
                success: false,
                message: "Vendor not found"
            });
        }

        if (vendor.approvalStatus === "rejected") {
            return res.status(400).json({
                success: false,
                message: "Vendor is already rejected"
            });
        }

        vendor.approvalStatus = "rejected";
        vendor.isAvailable = false;

        await vendor.save();

        res.status(200).json({
            success: true,
            message: "Vendor rejected successfully",
            vendor
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Get All Pending Drivers
const getPendingDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find({
            verificationStatus: "pending"
        }).populate("userId", "name email phone");

        res.status(200).json({
            success: true,
            count: drivers.length,
            drivers
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Approve Driver
const approveDriver = async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found"
            });
        }

        if (driver.verificationStatus === "approved") {
            return res.status(400).json({
                success: false,
                message: "Driver is already approved"
            });
        }

        driver.verificationStatus = "approved";
        await driver.save();

        res.status(200).json({
            success: true,
            message: "Driver approved successfully",
            driver
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Reject Driver
const rejectDriver = async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver not found"
            });
        }

        if (driver.verificationStatus === "rejected") {
            return res.status(400).json({
                success: false,
                message: "Driver is already rejected"
            });
        }

        driver.verificationStatus = "rejected";
        driver.availability = false;

        await driver.save();

        res.status(200).json({
            success: true,
            message: "Driver rejected successfully",
            driver
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Get All Fuel Requests
const getAllFuelRequests = async (req, res) => {
    try {
        const fuelRequests = await FuelRequest.find()
            .populate("customerId", "name email phone")
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
// Update Fuel Request Status
const updateFuelRequestStatus = async (req, res) => {
    try {
        const { requestStatus } = req.body;

        const allowedStatuses = [
            "accepted",
            "rejected",
            "driver_assigned",
            "out_for_delivery",
            "delivered",
            "completed",
            "cancelled"
        ];

        if (!allowedStatuses.includes(requestStatus)) {
            return res.status(400).json({
                success: false,
                message: "Invalid request status"
            });
        }

        const fuelRequest = await FuelRequest.findById(req.params.id);

        if (!fuelRequest) {
            return res.status(404).json({
                success: false,
                message: "Fuel request not found"
            });
        }

        fuelRequest.requestStatus = requestStatus;
        await fuelRequest.save();

        res.status(200).json({
            success: true,
            message: "Fuel request status updated successfully",
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
    getPendingVendors,
    approveVendor,
    rejectVendor,
    getPendingDrivers,
    approveDriver,
    rejectDriver,
    getAllFuelRequests,
    updateFuelRequestStatus
};