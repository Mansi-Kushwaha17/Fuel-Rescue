
const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        vehicleNumber: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true
        },

        licenseNumber: {
            type: String,
            required: true,
            unique: true
        },

        vehicleType: {
            type: String,
            enum: ["Bike", "Scooter", "Car", "Van"],
            required: true
        },

        availability: {
            type: Boolean,
            default: false
        },

        currentLocation: {
            latitude: {
                type: Number
            },
            longitude: {
                type: Number
            }
        },

        verificationStatus: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
        }
    },
    {
        timestamps: true
    }
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
