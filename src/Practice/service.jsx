
import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "⛽",
      title: "Emergency Fuel Delivery",
      description:
        "Get emergency petrol or diesel delivered whenever your vehicle runs out of fuel."
    },
    {
      icon: "🚗",
      title: "Petrol & Diesel",
      description:
        "Choose the right fuel for your vehicle with convenient doorstep delivery."
    },
    {
      icon: "📍",
      title: "Doorstep Delivery",
      description:
        "Share your location and get fuel delivered directly to your destination."
    },
    {
      icon: "🛠️",
      title: "Roadside Assistance",
      description:
        "Get assistance when your vehicle faces unexpected fuel-related problems."
    }
  ];

  return (
    <div className="services-page">

      <div className="services-hero">
        <h1>Our Services</h1>
        <p>
          Reliable fuel delivery and emergency assistance,
          whenever and wherever you need it.
        </p>
      </div>

      <div className="services-container">

        <div className="services-heading">
          <h2>What We Offer</h2>
          <p>Making your journey easier, safer and stress-free.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button className="service-btn">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>

      <div className="services-cta">
        <h2>Need Fuel? We've Got You Covered!</h2>
        <p>Don't let an empty tank stop your journey.</p>
        <button className="services-request-btn">
          Request Fuel Now
        </button>
      </div>

    </div>
  );
}

export default Services;
