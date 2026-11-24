const Driver = require("../models/driver");

// Create Driver Profile
const createDriverProfile = async (req, res) => {
    try {
        const existingDriver = await Driver.findOne({
            userId: req.user.id
        });

        if (existingDriver) {
            return res.status(400).json({
                success: false,
                message: "Driver profile already exists"
            });
        }

        const {
            vehicleNumber,
            licenseNumber,
            vehicleType
        } = req.body;

        const driver = await Driver.create({
            userId: req.user.id,
            vehicleNumber,
            licenseNumber,
            vehicleType
        });

        res.status(201).json({
            success: true,
            message: "Driver profile created successfully",
            driver
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Get Driver Profile
const getDriverProfile = async (req, res) => {
    try {
        const driver = await Driver.findOne({
            userId: req.user.id
        }).populate("userId", "name email phone");

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver profile not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Driver profile fetched successfully",
            driver
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Update Driver Availability
const updateDriverAvailability = async (req, res) => {
    try {
        const { availability } = req.body;

        if (typeof availability !== "boolean") {
            return res.status(400).json({
                success: false,
                message: "Availability must be true or false"
            });
        }

        const driver = await Driver.findOneAndUpdate(
            { userId: req.user.id },
            { availability },
            { new: true, runValidators: true }
        );

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver profile not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Driver availability updated successfully",
            driver
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Update Driver Location
const updateDriverLocation = async (req, res) => {
    try {
        const { latitude, longitude } = req.body;

        if (
            typeof latitude !== "number" ||
            typeof longitude !== "number" ||
            latitude < -90 ||
            latitude > 90 ||
            longitude < -180 ||
            longitude > 180
        ) {
            return res.status(400).json({
                success: false,
                message: "Valid latitude and longitude are required"
            });
        }

        const driver = await Driver.findOneAndUpdate(
            { userId: req.user.id },
            {
                currentLocation: {
                    latitude,
                    longitude
                }
            },
            { new: true, runValidators: true }
        );

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver profile not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Driver location updated successfully",
            driver
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createDriverProfile,
    getDriverProfile,
    updateDriverAvailability,
    updateDriverLocation
};