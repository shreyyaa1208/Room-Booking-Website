import React from "react";
import "./styles.css";

const Signup = () => {
  return (
    <div>
      <div className="signup-modal">
        <div className="signup-header">
          <h2>Sign Up</h2>
          <button className="close-button">X</button>
        </div>
        <div className="signup-options">
          <div className="option-card">
            <a href="/signup2">
              <h3>I'm A Host</h3>
              <p>Lorem Ipsum Is Simply Dummy Text Of The Printing.</p>
            </a>
          </div>
          <div className="option-card">
            <a href="/signup2">
              <h3>I'm A Renter</h3>
              <p>Lorem Ipsum Is Simply Dummy Text Of The Printing.</p>
            </a>
          </div>
        </div>
        <footer className="signup-footer">
          <p>
            Already Have A Room Account? <a href="/login">Log In</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
