const express = require("express");
const router = express.Router();

const {
    createDriverProfile,
    getDriverProfile,
    updateDriverAvailability,
    updateDriverLocation
} = require("../controllers/driverController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Create Driver Profile
router.post(
    "/profile",
    authMiddleware,
    roleMiddleware("driver"),
    createDriverProfile
);

// Get Driver Profile
router.get(
    "/profile",
    authMiddleware,
    roleMiddleware("driver"),
    getDriverProfile
);

// Update Driver Availability
router.patch(
    "/availability",
    authMiddleware,
    roleMiddleware("driver"),
    updateDriverAvailability
);

// Update Driver Location
router.patch(
    "/location",
    authMiddleware,
    roleMiddleware("driver"),
    updateDriverLocation
);

module.exports = router;