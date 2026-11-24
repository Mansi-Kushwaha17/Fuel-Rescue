
const express = require("express");
const router = express.Router();

const {
    createCustomerProfile,
    getCustomerProfile
} = require("../controllers/customerController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Create Customer Profile
router.post(
    "/profile",
    authMiddleware,
    roleMiddleware("customer"),
    createCustomerProfile
);

// Get Customer Profile
router.get(
    "/profile",
    authMiddleware,
    roleMiddleware("customer"),
    getCustomerProfile
);

module.exports = router;
