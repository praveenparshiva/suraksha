import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  // FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>Suraksha</h3>
          <p>Tank & Sump Cleaning Service</p>
          <p>Providing professional cleaning services</p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <FaPhone /> <a href="tel:+919713409275">+91 9713 409 275</a>
            </li>
            <li>
              <FaEnvelope />{" "}
              <a href="mailto:surakshatankmysore@gmail.com">
                surakshatankmysore@gmail.com
              </a>
            </li>
            <li>
              <FaMapMarkerAlt /> 3rd Main Rd, C-Block, JP Nagar, Mysuru,
              Karnataka 570008
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/16XkttZBg9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a> */}
            <a
              href="https://instagram.com/tank_sump_cleaning_mysore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Suraksha Tank & Sump Cleaning
            Service. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
