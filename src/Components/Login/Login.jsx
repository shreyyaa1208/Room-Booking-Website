import React, { useState } from "react";
import "./styles.css";
import FB from "../../assets/fb.png";
import Google from "../../assets/google.png";
import Cross from "../../assets/COLSE.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      if (
        username.trim() === storedUser.username &&
        password.trim() === storedUser.password
      ) {
        alert("User Logged in successfully");
      } else {
        alert("Incorrect username or password");
      }
    } else {
      alert("Please sign up");
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <a href="/home">
          <button className="close-btn">
            <img src={Cross} alt="cross-btn"></img>
          </button>
        </a>

        <div className="form-header">
          <h2>Log In</h2>
        </div>
        <div className="social-login">
          <button className="social-btn facebook">
            <img src={FB} alt="fb icon" />
            <span className="text">Login</span>
          </button>
          <button className="social-btn google">
            <img src={Google} alt="fb icon" />
            <span className="text">Login</span>
          </button>
        </div>
        <div className="divider">Or</div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username" className="input-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="input-field"
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-footer">
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <div className="form-sign">
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </div>
        </form>
        <p className="terms-text">
          By clicking Google or Facebook, you agree to the Room terms.
        </p>
        <br />
        <p className="terms-text">
          Don't have an account?<a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
