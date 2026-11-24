
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        adminId: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        permissions: {
            manageUsers: {
                type: Boolean,
                default: true
            },

            manageVendors: {
                type: Boolean,
                default: true
            },

            manageDrivers: {
                type: Boolean,
                default: true
            },

            manageRequests: {
                type: Boolean,
                default: true
            },

            viewPayments: {
                type: Boolean,
                default: true
            },

            viewReports: {
                type: Boolean,
                default: true
            }
        }
    },
    {
        timestamps: true
    }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
