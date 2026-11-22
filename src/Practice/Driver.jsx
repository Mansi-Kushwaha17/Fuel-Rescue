
import React from "react";
import "./Driver.css";

function Driver() {
  const deliveries = [];

  return (
    <div className="driver-page">

      {/* Header */}
      <div className="driver-header">
        <div>
          <h1>Driver Dashboard</h1>
          <p>Welcome to your Fuel Rescue driver panel.</p>
        </div>

        <div className="driver-profile">
          <span>🚗</span>
          <div>
            <h4>Driver Panel</h4>
            <p>Delivery Partner</p>
          </div>
        </div>
      </div>

      {/* Assigned Deliveries */}
      <div className="driver-delivery-section">

        <div className="driver-section-header">
          <h2>Assigned Deliveries</h2>
          <p>
            Here you can view and manage your assigned fuel
            delivery requests.
          </p>
        </div>

        <div className="driver-table-wrapper">
          <table className="driver-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Customer</th>
                <th>Fuel Type</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {deliveries.length > 0 ? (
                deliveries.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.customer}</td>
                    <td>{item.fuelType}</td>
                    <td>{item.quantity}</td>
                    <td>{item.location}</td>
                    <td>{item.status}</td>
                    <td>
                      <button className="driver-view-btn">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="empty-deliveries">
                    No deliveries assigned yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Driver;
