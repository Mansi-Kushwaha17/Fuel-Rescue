const express = require("express");
const router = express.Router();

const {
    createFuelRequest,
    getMyFuelRequests,
    getFuelRequestById,
    cancelFuelRequest
} = require("../controllers/fuelrequestController")

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// All routes require customer login
router.use(authMiddleware);
router.use(roleMiddleware("customer"));

// Create Fuel Request
router.post("/", createFuelRequest);

// Get All My Fuel Requests
router.get("/my-requests", getMyFuelRequests);

// Get Single Fuel Request
router.get("/:id", getFuelRequestById);

// Cancel Fuel Request
router.patch("/:id/cancel", cancelFuelRequest);

module.exports = router;