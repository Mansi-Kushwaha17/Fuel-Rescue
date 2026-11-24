const Verification = require("../models/verification");
const FuelRequest = require("../models/fuelrequest");
const crypto = require("crypto");

const generateOTP = async (req, res) => {
    try {
        const { fuelRequestId } = req.body;

        const fuelRequest = await FuelRequest.findById(fuelRequestId);

        if (!fuelRequest) {
            return res.status(404).json({
                success: false,
                message: "Fuel request not found"
            });
        }

        const otp = crypto.randomInt(100000, 1000000).toString();

        const otpHash = crypto
            .createHash("sha256")
            .update(otp)
            .digest("hex");

        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        const verification = await Verification.create({
            fuelRequestId,
            customerId: fuelRequest.customerId,
            otpHash,
            expiresAt
        });

        res.status(201).json({
            success: true,
            message: "OTP generated successfully",
            otp,
            verificationId: verification._id
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const verifyOTP = async (req, res) => {
    try {
        const { verificationId, otp } = req.body;

        const verification = await Verification.findById(verificationId);

        if (!verification) {
            return res.status(404).json({
                success: false,
                message: "Verification record not found"
            });
        }

        if (verification.isVerified) {
            return res.status(400).json({
                success: false,
                message: "OTP already verified"
            });
        }

        if (verification.expiresAt < new Date()) {
            return res.status(400).json({
                success: false,
                message: "OTP has expired"
            });
        }

        if (verification.attempts >= 5) {
            return res.status(429).json({
                success: false,
                message: "Maximum OTP attempts exceeded"
            });
        }

        const enteredHash = crypto
            .createHash("sha256")
            .update(String(otp))
            .digest("hex");

        if (enteredHash !== verification.otpHash) {
            verification.attempts += 1;
            await verification.save();

            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }

        verification.isVerified = true;
        verification.verifiedAt = new Date();

        await verification.save();

        res.status(200).json({
            success: true,
            message: "OTP verified successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getVerificationStatus = async (req, res) => {
    try {
        const { fuelRequestId } = req.params;

        const verification = await Verification.findOne({
            fuelRequestId
        }).sort({ createdAt: -1 });

        if (!verification) {
            return res.status(404).json({
                success: false,
                message: "Verification record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Verification status fetched successfully",
            data: {
                fuelRequestId: verification.fuelRequestId,
                isVerified: verification.isVerified,
                verifiedAt: verification.verifiedAt,
                expiresAt: verification.expiresAt,
                attempts: verification.attempts
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    generateOTP,
    verifyOTP,
    getVerificationStatus
};