
const mongoose = require("mongoose");

const fuelRequestSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vendor",
            default: null
        },

        driverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
            default: null
        },

        fuelType: {
            type: String,
            enum: ["Petrol", "Diesel"],
            required: true
        },

        quantity: {
            type: Number,
            required: true,
            min: 1
        },

        vehicleNumber: {
            type: String,
            required: true,
            trim: true,
            uppercase: true
        },

        deliveryAddress: {
            street: {
                type: String,
                required: true,
                trim: true
            },
            city: {
                type: String,
                required: true,
                trim: true
            },
            state: {
                type: String,
                required: true,
                trim: true
            },
            pincode: {
                type: String,
                required: true,
                trim: true
            },
            latitude: Number,
            longitude: Number
        },

        pricePerLiter: {
            type: Number,
            required: true,
            min: 0
        },

        totalAmount: {
            type: Number,
            required: true,
            min: 0
        },

        requestStatus: {
            type: String,
            enum: [
                "pending",
                "accepted",
                "rejected",
                "driver_assigned",
                "out_for_delivery",
                "delivered",
                "completed",
                "cancelled"
            ],
            default: "pending"
        },

        paymentStatus: {
            type: String,
            enum: [
                "pending",
                "successful",
                "failed",
                "refunded"
            ],
            default: "pending"
        }
    },
    {
        timestamps: true
    }
);

// Automatically calculate total amount
fuelRequestSchema.pre("validate", function () {
    if (
        Number.isFinite(this.quantity) &&
        Number.isFinite(this.pricePerLiter)
    ) {
        this.totalAmount = Number(
            (this.quantity * this.pricePerLiter).toFixed(2)
        );
    }
});

const FuelRequest = mongoose.model(
    "FuelRequest",
    fuelRequestSchema
);

module.exports = FuelRequest;
