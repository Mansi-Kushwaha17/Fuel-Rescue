import React from "react";
import { Link } from "react-router-dom";
import "./CustomerSidebar.css";

function Customer() {
  return (
    <div className="customer-page">

      {/* Hero Section */}
      <Link to="/customer"/>
      <section className="customer-hero">
        <div className="customer-content">
          <span className="customer-tag">
            🚘 Emergency Fuel Delivery
          </span>

          <h1>
            Running Out of Fuel?
            <span> We've Got You Covered!</span>
          </h1>

          <p>
            Don't let an empty fuel tank stop your journey.
            Get petrol or diesel delivered directly to your
            location with Fuel Rescue.
          </p>

          <div className="customer-buttons">
            <Link to="/fuel-request" className="request-btn">
              Request Fuel Now →
            </Link>

            <Link to="/services" className="explore-btn">
              Explore Services
            </Link>
          </div>

          <div className="customer-features">
            <div>
              <h3>24/7</h3>
              <p>Service Support</p>
            </div>

            <div>
              <h3>Fast</h3>
              <p>Fuel Delivery</p>
            </div>

            <div>
              <h3>Safe</h3>
              <p>Reliable Service</p>
            </div>
          </div>
        </div>

        <div className="customer-image">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900"
            alt="Vehicle service"
          />
          <div className="image-card">
            <span>⛽</span>
            <div>
              <h4>Fuel at Your Location</h4>
              <p>Convenient. Reliable. Easy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Selection Section */}
      <section className="fuel-selection">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>What Fuel Do You Need?</h2>
          <p>Choose your fuel type and get back on the road.</p>
        </div>

        <div className="fuel-cards">
          <div className="fuel-card">
            <div className="fuel-icon">⛽</div>
            <h3>Petrol</h3>
            <p>Quick petrol delivery for your vehicle.</p>
            <Link to="/fuel-request">Request Petrol →</Link>
          </div>

          <div className="fuel-card">
            <div className="fuel-icon">🚛</div>
            <h3>Diesel</h3>
            <p>Reliable diesel delivery at your location.</p>
            <Link to="/fuel-request">Request Diesel →</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="section-heading">
          <span>SIMPLE PROCESS</span>
          <h2>How Fuel Rescue Works</h2>
          <p>Get emergency fuel in just three simple steps.</p>
        </div>

        <div className="steps">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Place Your Request</h3>
            <p>Select your fuel type and enter your location.</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Request Confirmation</h3>
            <p>Our team confirms your fuel delivery request.</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Get Fuel Delivered</h3>
            <p>Receive fuel at your requested location.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="customer-cta">
        <h2>Don't Let an Empty Tank Stop You!</h2>
        <p>Fuel Rescue is just one request away.</p>
        <Link to="/fuel-request">Get Fuel Now →</Link>
      </section>

    </div>
  );
}

export default Customer;