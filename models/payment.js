
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
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

        amount: {
            type: Number,
            required: true,
            min: 0
        },

        paymentMethod: {
            type: String,
            enum: ["UPI", "Cash", "Card", "Online"],
            required: true
        },

        transactionId: {
            type: String,
            trim: true
        },

        paymentStatus: {
            type: String,
            enum: ["pending", "successful", "failed", "refunded"],
            default: "pending"
        },

        paidAt: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
