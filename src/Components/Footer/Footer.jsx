import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import Phone from "../../assets/Icon feather-phone-call.png";
import Mail from "../../assets/Icon simple-email.png";
import Location from "../../assets/Icon metro-location.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <img src={Logo} alt="Logo" className="footer-logo" />

        <div className="footer-text">
          <span>For More Information About Rooms</span>
          <input type="email" placeholder="Your Email Address" />
          <button className="sub-btn">Subscribe Now</button>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <h4> About Us</h4>
          <p>
            Lorem Ipsum Is Simply Dummy Text Of The<br></br> Printing And
            Typesetting Industry. Lorem Ipsum <br></br>Has Been The Industry's
            Standard Dummy Text <br></br>Ever Since The 1500S, When Unknown
            Printer<br></br> Took A Galley Of Type And Scrambled It To <br></br>
            Make A Type Specimen Book.<br></br>
            <br></br>
            <span>
              {" "}
              <img src={Phone} alt="phone" />
              +123-145-3690
            </span>
            <br></br>
            <span>
              <a href="#">
                <img src={Mail} alt="mail" />
                Email.Com{" "}
              </a>
              <br></br>
            </span>
            <span>
              <br></br>
              <img src={Location} alt="Loc" />
              Address
            </span>
            <br></br>
            <br></br>
            &copy; {new Date().getFullYear()} DMap. All rights reserved.
            <br></br>
            <span>
              {" "}
              <a href="/privacy">Privacy Policy</a>
            </span>
          </p>
        </div>
        <div className="grid-item">
          <h4>Places</h4>
          <p>
            <a href="#">Noida</a>
            <br></br>
            <a href="#">Hyderabad</a>
            <br></br>
            <a href="#">Mumbai</a>
            <br></br>
            <a href="#">Chennai</a>
            <br></br>
            <a href="#"> Delhi</a>
            <br></br>
            <a href="#">Lucknow </a>
            <br></br>
            <a href="#">Chandigarh</a>
            <br></br>
          </p>
        </div>
        <div className="grid-item">
          <h4>Other Option</h4>
          <p>
            <a href="#"> Accommodations</a>
            <br></br>
            <a href="#">New Blog</a>
            <br></br>
            <a href="#">Meals</a>
            <br></br>
            <a href="#">Services</a>
            <br></br>
            <a href="#">Team</a>
            <br></br>
            <a href="#"> Places</a>
            <br></br>
            <a href="/privacy">Privacy Policy</a>
            <br></br>
          </p>
        </div>
        <div className="grid-item">
          <h4>Property Type</h4>
          <p>
            <a href="#">House </a>
            <br></br> <a href="#">Apartment</a>
            <br></br> <a href="#">Boys</a>
            <br></br> <a href="#">PG </a>
            <br></br> <a href="#">Vilas</a>
            <br></br>
          </p>
        </div>
      </div>

      <div className="footer-content"></div>
    </footer>
  );
};

export default Footer;
