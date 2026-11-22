
import React, { useState } from "react";
import "./setting.css";

function Settings() {
  const [notifications, setNotifications] = useState(true);

  const handlePassword = () => {
    alert("Change password feature will be connected with backend.");
  };

  const handleLogout = () => {
    alert("Logout functionality will be connected with backend.");
  };

  return (
    <div className="settings-page">

      <div className="settings-container">

        {/* Header */}
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your account and preferences.</p>
        </div>

        {/* Profile Settings */}
        <div className="settings-card">
          <div className="settings-card-icon">👤</div>

          <div className="settings-card-content">
            <h3>Profile Settings</h3>
            <p>View and update your personal information.</p>
          </div>

          <button className="settings-action-btn">
            Edit Profile →
          </button>
        </div>

        {/* Account Settings */}
        <div className="settings-card">
          <div className="settings-card-icon">🔐</div>

          <div className="settings-card-content">
            <h3>Account Information</h3>
            <p>Manage your account details and security.</p>
          </div>

          <button
            className="settings-action-btn"
            onClick={handlePassword}
          >
            Change Password →
          </button>
        </div>

        {/* Notification Settings */}
        <div className="settings-card">
          <div className="settings-card-icon">🔔</div>

          <div className="settings-card-content">
            <h3>Notifications</h3>
            <p>Manage your delivery and account notifications.</p>
          </div>

          <label className="settings-toggle">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            <span className="settings-slider"></span>
          </label>
        </div>

        {/* Help & Support */}
        <div className="settings-card">
          <div className="settings-card-icon">❓</div>

          <div className="settings-card-content">
            <h3>Help & Support</h3>
            <p>Get assistance with your Fuel Rescue account.</p>
          </div>

          <button className="settings-action-btn">
            Get Help →
          </button>
        </div>

        {/* Logout */}
        <div className="settings-logout">
          <div>
            <h3>Logout</h3>
            <p>Sign out from your account.</p>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Settings;
