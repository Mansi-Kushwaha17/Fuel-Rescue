const express = require("express");
const router = express.Router();

const {
    getPendingVendors,
    approveVendor,
    rejectVendor,
    getPendingDrivers,
    approveDriver,
    rejectDriver,
    getAllFuelRequests,
    updateFuelRequestStatus
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Admin authentication
router.use(authMiddleware);
router.use(roleMiddleware("admin"));

// Vendor Management
router.get("/pending-vendors", getPendingVendors);
router.patch("/approve-vendor/:id", approveVendor);
router.patch("/reject-vendor/:id", rejectVendor);

// Driver Management
router.get("/pending-drivers", getPendingDrivers);
router.patch("/approve-driver/:id", approveDriver);
router.patch("/reject-driver/:id", rejectDriver);

// Fuel Request Management
router.get("/fuel-requests", getAllFuelRequests);
router.patch("/fuel-requests/:id/status", updateFuelRequestStatus);

module.exports = router;