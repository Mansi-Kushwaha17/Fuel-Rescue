
const mongoose = require("mongoose");

const verificationSchema = new mongoose.Schema(
    {
        fuelRequestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FuelRequest",
            required: true
        },

        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        otpHash: {
            type: String,
            required: true
        },

        expiresAt: {
            type: Date,
            required: true
        },

        verifiedAt: {
            type: Date
        },

        attempts: {
            type: Number,
            default: 0,
            min: 0
        },

        isVerified: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const Verification = mongoose.model(
    "Verification",
    verificationSchema
);

module.exports = Verification;
