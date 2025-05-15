import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Professional Tank & Sump Cleaning Services</h1>
        <p>
          Ensuring clean and hygienic water storage for your home and business
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
          <Link to="/services" className="btn btn-secondary">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
