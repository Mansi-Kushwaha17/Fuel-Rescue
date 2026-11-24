
const Customer = require("../models/customer");

// Create Customer Profile
const createCustomerProfile = async (req, res) => {
    try {
        const existingCustomer = await Customer.findOne({
            user: req.user.id
        });

        if (existingCustomer) {
            return res.status(400).json({
                success: false,
                message: "Customer profile already exists"
            });
        }

        const { address, city, state, pincode } = req.body;

        const customer = await Customer.create({
            user: req.user.id,
            address,
            city,
            state,
            pincode
        });

        res.status(201).json({
            success: true,
            message: "Customer profile created successfully",
            customer
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get Customer Profile
const getCustomerProfile = async (req, res) => {
    try {
        const customer = await Customer.findOne({
            user: req.user.id
        }).populate("user", "name email phone");

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer profile not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Customer profile fetched successfully",
            customer
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createCustomerProfile,
    getCustomerProfile
};
