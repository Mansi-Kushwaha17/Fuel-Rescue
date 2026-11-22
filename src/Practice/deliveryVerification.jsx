
import React, { useState } from "react";
import "./deliveryVerification.css";

function DeliveryVerification() {
  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    alert("OTP verification will be connected with backend.");
  };

  return (
    <>
    <div className="verification-page">
      <div className="verification-container">

        <div className="verification-header">
          <span className="verification-icon">🔐</span>
          <h1>Delivery Verification</h1>
          <p>Verify customer OTP to complete the fuel delivery.</p>
        </div>

        <div className="verification-card">
          <h2>Verify Customer OTP</h2>

          <p className="verification-description">
            Ask the customer for the OTP received on their registered
            mobile number.
          </p>

          <form onSubmit={handleVerify}>
            <div className="verification-form-group">
              <label htmlFor="otp">Enter 6-Digit OTP</label>

              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                placeholder="Enter OTP"
                maxLength={6}
                inputMode="numeric"
                required
              />
            </div>

            <button type="submit" className="verify-btn">
              Verify &amp; Complete Delivery
            </button>
          </form>

          <div className="verification-note">
            <span>ℹ️</span>
            <p>
              Delivery will be marked as completed only after
              successful OTP verification.
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}


export default DeliveryVerification;
