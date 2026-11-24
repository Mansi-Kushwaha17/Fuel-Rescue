
const express = require("express");
const router = express.Router();

const {
    generateOTP,
    verifyOTP,
    getVerificationStatus
} = require("../controllers/verificationController");

// Generate OTP
router.post("/generate", generateOTP);

// Verify OTP
router.post("/verify", verifyOTP);

// Get Verification Status
router.get("/status/:fuelRequestId", getVerificationStatus);

module.exports = router;
