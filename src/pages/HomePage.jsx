import React, { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWater, FaTools, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import "./HomePage.css";

const HomePage = () => {
  const reviewsRef = useRef(null);

  useEffect(() => {
    const scrollFlag = localStorage.getItem("scrollToReviews");

    if (scrollFlag === "true") {
      setTimeout(() => {
        reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);

      localStorage.removeItem("scrollToReviews");
    }

    const handleScroll = () => {
      reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("scrollToReviews", handleScroll);

    return () => window.removeEventListener("scrollToReviews", handleScroll);
  }, []);

  const services = [
    {
      icon: <FaWater />,
      title: "Water Tank Cleaning",
      description:
        "Professional cleaning of overhead and underground water tanks to remove sediment, algae, and bacteria.",
    },
    {
      icon: <FaTools />,
      title: "Sump Cleaning",
      description:
        "Complete cleaning and disinfection of sumps to ensure clean water supply to your home or business.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Disinfection Services",
      description:
        "Thorough disinfection using eco-friendly chemicals to eliminate harmful microorganisms.",
    },
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to Suraksha Tank & Sump Cleaning Service</h2>
              <p>
                With over 15 years of experience, we are dedicated to providing
                high-quality tank and sump cleaning services to ensure clean and
                safe water for your family and business.
              </p>
              <p>
                Our team of trained professionals uses advanced equipment and
                ultraviolet light to eliminate bacteria and deliver exceptional
                results every time."
              </p>
              <div className="about-features">
                <div className="feature">
                  <FaCheckCircle className="feature-icon" />
                  <span>Experienced Professionals</span>
                </div>
                <div className="feature">
                  <FaCheckCircle className="feature-icon" />
                  <span>Eco-Friendly Solutions</span>
                </div>
                <div className="feature">
                  <FaCheckCircle className="feature-icon" />
                  <span>Advanced Equipment</span>
                </div>
                <div className="feature">
                  <FaCheckCircle className="feature-icon" />
                  <span>100% Customer Satisfaction</span>
                </div>
              </div>
              <Link to="/about" className="btn">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <img src="/images/poster.jpg" alt="Suraksha Cleaning Service" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive cleaning solutions for all types of water
            storage systems
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="services-cta">
            <Link to="/services" className="btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-us-section">
        <div className="container">
          <h2 className="section-title">Why Choose Suraksha?</h2>

          <div className="why-us-grid">
            <div className="why-us-item">
              <div className="why-us-icon">
                <FaShieldAlt />
              </div>
              <h3>Safety First</h3>
              <p>
                We prioritize safety in all our operations, using only certified
                and eco-friendly cleaning methods.
              </p>
            </div>

            <div className="why-us-item">
              <div className="why-us-icon">
                <FaTools />
              </div>
              <h3>Expert Team</h3>
              <p>
                Our technicians are highly trained and experienced in handling
                all types of tank and sump cleaning tasks.
              </p>
            </div>

            <div className="why-us-item">
              <div className="why-us-icon">
                <FaWater />
              </div>
              <h3>Comprehensive Service</h3>
              <p>
                From inspection to cleaning and disinfection, we provide
                end-to-end water tank maintenance solutions.
              </p>
            </div>

            <div className="why-us-item">
              <div className="why-us-icon">
                <FaCheckCircle />
              </div>
              <h3>Guaranteed Results</h3>
              <p>
                We guarantee clean, hygienic water storage systems that meet
                health and safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elfsight Google Reviews Widget */}
      <section className="section google-reviews-section" ref={reviewsRef}>
        <div className="container">
          <div
            className="elfsight-app-d1fb7013-7ccf-4263-b788-7d93f5a1e787"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to ensure clean and safe water?</h2>
            <p>Contact us today for a free inspection and quote!</p>
            <Link to="/contact" className="btn btn-cta">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
