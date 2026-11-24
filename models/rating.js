
const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
    {
        fuelRequestId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FuelRequest",
            required: true,
            unique: true
        },

        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        vendorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vendor",
            required: true
        },

        driverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
            required: true
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },

        review: {
            type: String,
            trim: true,
            maxlength: 500
        }
    },
    {
        timestamps: true
    }
);

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
