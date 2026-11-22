
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>ABOUT FUEL RESCUE</span>
          <h1>Keeping Your Journey Moving</h1>
          <p>
            We make emergency fuel delivery simple, reliable
            and convenient. Because running out of fuel
            should never stop your journey.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-intro">
        <div className="about-intro-text">
          <h2>Who We Are</h2>
          <p>
            Fuel Rescue is an emergency fuel delivery platform
            designed to help people when their vehicles run
            out of fuel unexpectedly.
          </p>
          <p>
            Our platform connects customers with fuel vendors
            and delivery partners, making it easier to request
            fuel and get assistance at the required location.
          </p>
        </div>

        <div className="about-intro-card">
          <div className="about-highlight-icon">⛽</div>
          <h3>Fuel at Your Fingertips</h3>
          <p>
            Convenient fuel assistance whenever you need it.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="mission-card">
          <div className="about-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To make emergency fuel assistance accessible,
            convenient and reliable through a simple
            digital platform.
          </p>
        </div>

        <div className="mission-card">
          <div className="about-icon">🌟</div>
          <h3>Our Vision</h3>
          <p>
            To become a trusted emergency fuel assistance
            platform that helps people travel with greater
            confidence and peace of mind.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose Fuel Rescue?</h2>
        <p className="about-subtitle">
          Making emergency fuel assistance easier for everyone.
        </p>

        <div className="about-features">
          <div className="about-feature">
            <span>⚡</span>
            <h3>Quick Requests</h3>
            <p>Submit your fuel request through a simple process.</p>
          </div>

          <div className="about-feature">
            <span>📍</span>
            <h3>Location Based</h3>
            <p>Share your location for convenient fuel delivery.</p>
          </div>

          <div className="about-feature">
            <span>🤝</span>
            <h3>Reliable Support</h3>
            <p>Connect with vendors and delivery partners.</p>
          </div>

          <div className="about-feature">
            <span>🚗</span>
            <h3>Convenience</h3>
            <p>Get assistance without searching for a nearby fuel station.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Don't Let an Empty Tank Stop You!</h2>
        <p>
          Fuel Rescue is here to help you keep moving.
        </p>
      </section>

    </div>
  );
}

export default About;
