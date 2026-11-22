import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <span className="hero-tag">
            ⚡ Emergency Fuel Delivery Service
          </span>

          <h1>
            Fuel <span>Rescue</span>
          </h1>

          <h2>
            Because You Never Know
            <br />
            When You'll Need Fuel.
          </h2>

          <p>
            Get emergency fuel delivery at your location,
            anytime, anywhere. Fast, safe and reliable
            service when you need it the most.
          </p>

          <div className="hero-buttons">
            <Link to="/fuel-request" className="request-btn">
              Request Fuel Now →
            </Link>

            <Link to="/services" className="services-btn">
              Our Services
            </Link>
          </div>

          <div className="hero-features">
            <div>
              <span>⚡</span>
              <p>Fast Response</p>
            </div>

            <div>
              <span>🛡️</span>
              <p>Safe & Secure</p>
            </div>

            <div>
              <span>📍</span>
              <p>Easy Location</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <span className="fuel-icon">⛽</span>
            <span className="fuel-drop">💧</span>
          </div>

          <div className="delivery-card">
            <span className="delivery-icon">🚚</span>
            <div>
              <h3>Fuel at Your Doorstep</h3>
              <p>Reliable. Quick. Convenient.</p>
            </div>
          </div>

          <div className="hero-decoration decoration-one"></div>
          <div className="hero-decoration decoration-two"></div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="home-modules">
        <div className="section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Our <span>Modules</span></h2>
          <p>Complete fuel delivery solution at your fingertips.</p>
        </div>

        <div className="module-grid">

          <Link to="/customer" className="module-card">
            <div className="module-icon customer-icon">👤</div>
            <h3>Customer</h3>
            <p>Register, login and manage your profile.</p>
            <span className="module-arrow">→</span>
          </Link>

          <Link to="/fuel-request" className="module-card">
            <div className="module-icon fuel-module-icon">⛽</div>
            <h3>Fuel Request</h3>
            <p>Select fuel type, quantity and location.</p>
            <span className="module-arrow">→</span>
          </Link>

          <Link to="/vendor" className="module-card">
            <div className="module-icon vendor-icon">🏪</div>
            <h3>Vendor</h3>
            <p>Manage fuel inventory and requests.</p>
            <span className="module-arrow">→</span>
          </Link>

          <Link to="/driver" className="module-card">
            <div className="module-icon driver-icon">🚚</div>
            <h3>Driver</h3>
            <p>View assigned deliveries and update status.</p>
            <span className="module-arrow">→</span>
          </Link>

          <Link to="/admin" className="module-card">
            <div className="module-icon admin-module-icon">🛡️</div>
            <h3>Admin</h3>
            <p>Manage users, requests and deliveries.</p>
            <span className="module-arrow">→</span>
          </Link>

          <Link to="/verification" className="module-card">
            <div className="module-icon verification-icon">✓</div>
            <h3>Delivery Verification</h3>
            <p>Confirm delivery using a verification code.</p>
            <span className="module-arrow">→</span>
          </Link>

          <Link to="/payment" className="module-card">
            <div className="module-icon payment-icon">₹</div>
            <h3>Payment</h3>
            <p>View payment options and payment status.</p>
            <span className="module-arrow">→</span>
          </Link>

          <Link to="/settings" className="module-card">
            <div className="module-icon settings-icon">⚙</div>
            <h3>Settings</h3>
            <p>Manage your profile and preferences.</p>
            <span className="module-arrow">→</span>
          </Link>

        </div>
      </section>

      {/* Bottom Feature Strip */}
      <section className="home-benefits">
        <div>
          <span>⚡</span>
          <p><strong>Fast Response</strong><br />Help when you need it.</p>
        </div>

        <div>
          <span>🛡️</span>
          <p><strong>Safe & Secure</strong><br />Your safety matters.</p>
        </div>

        <div>
          <span>📍</span>
          <p><strong>Easy Location</strong><br />Find your delivery location.</p>
        </div>

        <div>
          <span>☎</span>
          <p><strong>Customer Support</strong><br />We're here to help.</p>
        </div>
      </section>

    </div>
  );
}

export default Home;