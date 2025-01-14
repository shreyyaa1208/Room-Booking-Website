import React, { useState } from "react";
import "./styles.css";
import FB from "../../assets/fb.png";
import Google from "../../assets/google.png";
import Cross from "../../assets/COLSE.png";

const Signup2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault(); // Prevent page refresh

    const userData = {
      username,
      password,
    };

    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    alert("User data saved!");
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
          <h2>Sign Up</h2>
        </div>
        <div className="social-login">
          <a href="https://www.facebook.com/">
            {" "}
            <button className="social-btn facebook">
              <img src={FB} alt="fb icon" />
              <span className="text">Sign Up</span>
            </button>
          </a>
          <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=ARpgrqcBFtDYYs4bHyy01wJUr4eLIupXQfyuD-CMJyvf-rQsLuC_nlboKV8QMKeEQqokI7UOfREH-A&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-469699194%3A1727792355887203&ddm=0">
            {" "}
            <button className="social-btn google">
              <img src={Google} alt="google icon" />
              <span className="text">Sign Up</span>
            </button>
          </a>
        </div>
        <div className="divider">Or</div>

        {/* Attach handleSignup to the form */}
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="username" className="input-label">
              {" "}
              {/* Changed 'for' to 'htmlFor' */}
              Username
            </label>
            <input
              type="text"
              id="username"
              className="input-field" // Changed 'class' to 'className'
              placeholder="Enter Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Handle username input
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="input-label">
              {" "}
              {/* Changed 'for' to 'htmlFor' */}
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-field" // Changed 'class' to 'className'
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Handle password input
            />
          </div>

          <div className="form-sign">
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
          </div>
        </form>

        <p className="terms-text">
          By clicking Google or Facebook, you agree to the Room terms.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Signup2;
