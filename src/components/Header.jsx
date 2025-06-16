import React, { useState } from "react";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCustomerSayingsClick = () => {
    localStorage.setItem("scrollToReviews", "true");

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.dispatchEvent(new CustomEvent("scrollToReviews"));
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>Suraksha</h1>
            <p>Tank & Sump Cleaning Service</p>
          </Link>
        </div>

        <div className="contact-info">
          <a href="tel:+919743409275" className="phone-link">
            <FaPhone /> +91 9743409275
          </a>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={handleCustomerSayingsClick}>
                Customer Sayings
              </span>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
