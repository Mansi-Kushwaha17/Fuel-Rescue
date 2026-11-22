import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-icon">⛽</span>
          Fuel<span className="logo-highlight">Rescue</span>
        </Link>

        <div className="div-link">
          <Link to="/">Home</Link>
          <Link to="/fuel-request">Fuel Request</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
          <Link to="/admin" className="admin-btn">
          Admin
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;