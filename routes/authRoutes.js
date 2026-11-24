
const express = require("express");

const router = express.Router();

// Middlewares
const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Controllers
const {
    registerUser,
    loginUser
} = require("../controllers/authController");

// 1. Registration API
router.post("/register", registerUser);

// 2. Login API
router.post("/login", loginUser);

// 3. Profile API - All logged-in users
router.get("/profile", authMiddleware, (req, res) => {
    res.status(200).json({
        message: "Authentication successful",
        user: req.user
    });
});

// 4. Customer Only API
router.get(
    "/customer-only",
    authMiddleware,
    authorizeRoles("customer"),
    (req, res) => {
        res.status(200).json({
            message: "Customer access granted",
            user: req.user
        });
    }
);
// Driver Only Route
router.get(
    "/driver-only",
    authMiddleware,
    authorizeRoles("driver"),
    (req, res) => {
        res.json({
            message: "Driver access granted"
        });
    }
);

// Vendor Only Route
router.get(
    "/vendor-only",
    authMiddleware,
    authorizeRoles("vendor"),
    (req, res) => {
        res.json({
            message: "Vendor access granted"
        });
    }
);

// Admin Only Route
router.get(
    "/admin-only",
    authMiddleware,
    authorizeRoles("admin"),
    (req, res) => {
        res.json({
            message: "Admin access granted"
        });
    }
);
module.exports = router;
