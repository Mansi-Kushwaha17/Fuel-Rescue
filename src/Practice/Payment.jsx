
import React, { useState } from "react";
import "./Payment.css";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  // Actual values will come from backend/API
  const order = null;

  const fuelAmount = order?.fuelAmount || 0;
  const deliveryCharge = order?.deliveryCharge || 0;
  const totalAmount = fuelAmount + deliveryCharge;

  const handlePayment = (e) => {
    e.preventDefault();

    if (!order) {
      alert("No order details available.");
      return;
    }

    alert("Payment gateway will be connected with backend.");
  };

  return (
    <div className="payment-page">
      <div className="payment-container">

        <div className="payment-header">
          <h1>Secure Payment</h1>
          <p>Review your order and select a payment method.</p>
        </div>

        <div className="payment-content">

          <div className="payment-summary">
            <h2>Order Summary</h2>

            {order ? (
              <>
                <div className="payment-item">
                  <span>Fuel Type</span>
                  <strong>{order.fuelType}</strong>
                </div>

                <div className="payment-item">
                  <span>Quantity</span>
                  <strong>{order.quantity} Litres</strong>
                </div>

                <div className="payment-item">
                  <span>Fuel Amount</span>
                  <strong>₹{fuelAmount}</strong>
                </div>

                <div className="payment-item">
                  <span>Delivery Charges</span>
                  <strong>₹{deliveryCharge}</strong>
                </div>

                <div className="payment-total">
                  <span>Total Amount</span>
                  <strong>₹{totalAmount}</strong>
                </div>
              </>
            ) : (
              <p className="no-order">
                No order details available. Please submit a fuel request first.
              </p>
            )}
          </div>

          <div className="payment-method-section">
            <h2>Choose Payment Method</h2>

            <form onSubmit={handlePayment}>

              {["UPI", "Card", "Cash"].map((method) => (
                <label className="payment-option" key={method}>
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  <span>
                    {method === "UPI"
                      ? "📱 UPI Payment"
                      : method === "Card"
                      ? "💳 Debit / Credit Card"
                      : "💵 Cash on Delivery"}
                  </span>
                </label>
              ))}

              <button
                type="submit"
                className="pay-now-btn"
                disabled={!order}
              >
                Pay ₹{totalAmount} Now
              </button>

            </form>

            <p className="payment-security">
              🔒 Secure Payment
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Payment;
