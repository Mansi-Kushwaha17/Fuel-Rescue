
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const Admin = require("../models/Admin");

dotenv.config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");

        const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PHONE, ADMIN_PASSWORD } = process.env;

        if (!ADMIN_NAME || !ADMIN_EMAIL || !ADMIN_PHONE || !ADMIN_PASSWORD) {
            throw new Error("Admin details missing in .env file");
        }

        if (ADMIN_PASSWORD.length < 8) {
            throw new Error("Admin password must be at least 8 characters");
        }

        const existingUser = await User.findOne({
            $or: [
                { email: ADMIN_EMAIL.toLowerCase() },
                { phone: ADMIN_PHONE }
            ]
        });

        if (existingUser) {
            throw new Error("Email or phone already registered");
        }

        const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

        const user = await User.create({
            name: ADMIN_NAME,
            email: ADMIN_EMAIL,
            phone: ADMIN_PHONE,
            password: hashedPassword,
            role: "admin"
        });

        await Admin.create({
            userId: user._id,
            adminId: `ADM-${user._id.toString().slice(-8).toUpperCase()}`
        });

        console.log("Admin account created successfully!");

    } catch (error) {
        console.error("Admin Creation Failed:", error.message);
    } finally {
        await mongoose.disconnect();
    }
};

createAdmin();

