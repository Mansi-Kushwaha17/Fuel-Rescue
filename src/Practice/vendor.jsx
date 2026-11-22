import React from "react";
import { Link } from "react-router-dom";
import "./Vendor.css";

function Vendor() {
  return (
    <div className="vendor-page">

      {/* Hero Section */}
      <section className="vendor-hero">

        <div className="vendor-content">
          <span className="vendor-tag">
            🤝 Partner With Fuel Rescue
          </span>

          <h1>
            Grow Your Fuel Business
            <span> With Us!</span>
          </h1>

          <p>
            Join Fuel Rescue as a trusted fuel vendor.
            Connect with customers, receive fuel requests
            and expand your business with our platform.
          </p>

          <div className="vendor-buttons">
            <Link to="/vendor/register" className="vendor-primary-btn">
              Become a Vendor →
            </Link>

            <Link to="/vendor/login" className="vendor-secondary-btn">
              Vendor Login
            </Link>
          </div>

          <div className="vendor-stats">
            <div>
              <h3>24/7</h3>
              <p>Request Access</p>
            </div>

            <div>
              <h3>Easy</h3>
              <p>Management</p>
            </div>

            <div>
              <h3>Growth</h3>
              <p>Opportunity</p>
            </div>
          </div>
        </div>

        <div className="vendor-image">
          <img
            src="https://images.unsplash.com/photo-1545262810-77515befe149?w=900"
            alt="Fuel station"
          />

          <div className="vendor-image-card">
            <span>⛽</span>
            <div>
              <h4>Grow With Us</h4>
              <p>Become our trusted partner</p>
            </div>
          </div>
        </div>

      </section>

      {/* Benefits Section */}
      <section className="vendor-benefits">

        <div className="vendor-heading">
          <span>WHY PARTNER WITH US</span>
          <h2>Benefits For Our Vendors</h2>
          <p>Everything you need to grow your fuel business.</p>
        </div>

        <div className="vendor-benefit-cards">

          <div className="vendor-benefit-card">
            <div className="vendor-icon">📈</div>
            <h3>Business Growth</h3>
            <p>
              Reach more customers and increase
              your business opportunities.
            </p>
          </div>

          <div className="vendor-benefit-card">
            <div className="vendor-icon">📋</div>
            <h3>Manage Requests</h3>
            <p>
              Receive and manage customer
              fuel delivery requests easily.
            </p>
          </div>

          <div className="vendor-benefit-card">
            <div className="vendor-icon">⚡</div>
            <h3>Quick Processing</h3>
            <p>
              Handle incoming orders and
              respond to customers efficiently.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="vendor-process">

        <div className="vendor-heading">
          <span>GET STARTED</span>
          <h2>How Vendor Partnership Works</h2>
          <p>Join our platform in three simple steps.</p>
        </div>

        <div className="vendor-steps">

          <div className="vendor-step">
            <div className="vendor-step-number">01</div>
            <h3>Register</h3>
            <p>
              Submit your business and contact details.
            </p>
          </div>

          <div className="vendor-step">
            <div className="vendor-step-number">02</div>
            <h3>Get Verified</h3>
            <p>
              Our admin team reviews your vendor application.
            </p>
          </div>

          <div className="vendor-step">
            <div className="vendor-step-number">03</div>
            <h3>Start Receiving Requests</h3>
            <p>
              Manage fuel orders and fulfil customer requests.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="vendor-cta">
        <h2>Ready To Grow Your Business?</h2>
        <p>
          Become a part of Fuel Rescue and connect with more customers.
        </p>

        <Link to="/vendor/register">
          Join As A Vendor →
        </Link>
      </section>

    </div>
  );
}

export default Vendor;