
import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Customer");

  const handleSignup = (event) => {
    event.preventDefault();

    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(
      "Sign Up form is working! Backend registration is not connected yet."
    );
  };

  return (
    <div className="signup-page">
      {/* Left Section */}
      <div className="signup-illustration">
        <Link to="/" className="signup-brand">
          ⛽ FuelRescue
        </Link>

        <div className="signup-art">
          <div className="signup-art-circle">
            🚚
          </div>
        </div>

        <h1>Your journey starts here.</h1>

        <p>
          Join FuelRescue and get emergency fuel
          assistance whenever you need it.
          We're here to keep you moving!
        </p>

        <div className="signup-points">
          <p>✓ Quick and easy registration</p>
          <p>✓ Emergency fuel assistance</p>
          <p>✓ Convenient delivery tracking</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-form-side">
        <div className="signup-form-box">
          <Link to="/" className="signup-back">
            ← Back to Home
          </Link>

          <div className="signup-heading">
            <span className="signup-tag">JOIN FUELRESCUE</span>

            <h2>Create your account</h2>

            <p>
              Enter your details to get started.
            </p>
          </div>

          <form onSubmit={handleSignup}>
            <label htmlFor="signup-name">
              Full Name
            </label>

            <input
              id="signup-name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="signup-email">
              Email Address
            </label>

            <input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="signup-phone">
              Phone Number
            </label>

            <input
              id="signup-phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              required
            />

            <label htmlFor="signup-role">
              Register As
            </label>

            <select
              id="signup-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="Customer">Customer</option>
              <option value="Vendor">Vendor</option>
              <option value="Driver">Driver</option>
            </select>

            <label htmlFor="signup-password">
              Password
            </label>

            <input
              id="signup-password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />

            <label htmlFor="signup-confirm-password">
              Confirm Password
            </label>

            <input
              id="signup-confirm-password"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              minLength={6}
              required
            />

            <button
              type="submit"
              className="signup-submit"
            >
              Create Account →
            </button>
          </form>

          <div className="signup-login">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </div>

          <div className="signup-footer">
            ⛽ Your journey matters to us.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
