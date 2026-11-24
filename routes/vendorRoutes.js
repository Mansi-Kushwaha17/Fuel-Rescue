const express = require("express");
const router = express.Router();

const {
    createVendorProfile,
    getVendorProfile,
    updateFuelInventory,
    updateVendorAvailability
} = require("../controllers/vendorController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Create Vendor Profile
router.post(
    "/profile",
    authMiddleware,
    roleMiddleware("vendor"),
    createVendorProfile
);

// Get Vendor Profile
router.get(
    "/profile",
    authMiddleware,
    roleMiddleware("vendor"),
    getVendorProfile
);

// Update Fuel Inventory
router.patch(
    "/inventory",
    authMiddleware,
    roleMiddleware("vendor"),
    updateFuelInventory
);

// Update Vendor Availability
router.patch(
    "/availability",
    authMiddleware,
    roleMiddleware("vendor"),
    updateVendorAvailability
);

module.exports = router;