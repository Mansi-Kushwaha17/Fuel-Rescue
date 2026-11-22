
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields!");
      return;
    }

    alert("Login UI working! Backend authentication is not connected yet.");
  };

  return (
    <div className="login-page">
      <div className="login-illustration">
        <div className="login-brand">
          <span>⛽</span> FuelRescue
        </div>

        <div className="login-art">
          <div className="login-art-circle">
            <span>🚚</span>
          </div>
        </div>

        <h1>Fuel up. Get back on track.</h1>
        <p>
          Emergency fuel delivery, right when you need it.
          We are here to make your journey easier.
        </p>
      </div>

      <div className="login-form-side">
        <div className="login-form-box">
          <Link to="/" className="login-back">
            ← Back to Home
          </Link>

          <div className="login-heading">
            <span className="login-small-tag">WELCOME BACK</span>
            <h2>Login to your account</h2>
            <p>Enter your details to continue to FuelRescue.</p>
          </div>

          <form onSubmit={handleLogin}>
            <label htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <div className="login-options">
              <label className="remember-option">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="login-submit">
              Login →
            </button>
          </form>

          <div className="login-signup">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>

          <div className="login-footer">
            ⛽ Your journey matters to us.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
