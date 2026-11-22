
import React, { useState } from "react";
import "./FuelRequest.css";

function FuelRequest() {
  const [fuelType, setFuelType] = useState("Petrol");

  return (
    <div className="fuel-request-page">

      <div className="fuel-request-container">

        <div className="fuel-request-header">
          <h1>Request Emergency Fuel</h1>
          <p>Get fuel delivered to your location whenever you need it.</p>
        </div>

        <form className="fuel-request-form">

          <h3>Fuel Details</h3>

          <div className="form-group">
            <label>Fuel Type</label>
            <select
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
            >
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quantity (Litres)</label>
            <input type="number" min="1" placeholder="Enter quantity" />
          </div>

          <h3>Vehicle Details</h3>

          <div className="form-group">
            <label>Vehicle Type</label>
            <select>
              <option value="">Select Vehicle</option>
              <option>Bike</option>
              <option>Car</option>
              <option>Truck</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Vehicle Number</label>
            <input type="text" placeholder="Enter vehicle number" />
          </div>

          <h3>Delivery Details</h3>

          <div className="form-group">
            <label>Delivery Address</label>
            <textarea placeholder="Enter your complete delivery address"></textarea>
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input type="tel" placeholder="Enter mobile number" />
          </div>

          <button type="submit" className="fuel-submit-btn">
            Submit Fuel Request
          </button>

        </form>
      </div>
    </div>
  );
}

export default FuelRequest;