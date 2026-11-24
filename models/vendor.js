
const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        businessName: {
            type: String,
            required: true,
            trim: true
        },

        ownerName: {
            type: String,
            required: true,
            trim: true
        },

        address: {
            street: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            pincode: {
                type: String,
                required: true
            }
        },

        location: {
            latitude: Number,
            longitude: Number
        },

        fuelInventory: [
            {
                fuelType: {
                    type: String,
                    enum: ["Petrol", "Diesel"],
                    required: true
                },

                pricePerLiter: {
                    type: Number,
                    required: true,
                    min: 0
                },

                availableQuantity: {
                    type: Number,
                    required: true,
                    min: 0
                }
            }
        ],

        approvalStatus: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
        },

        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
