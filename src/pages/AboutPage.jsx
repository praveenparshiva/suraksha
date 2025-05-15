import React from "react";
import { FaUsers, FaHistory, FaAward, FaHandshake } from "react-icons/fa";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Suraksha</h1>
          <p>
            Your trusted partner for professional tank and sump cleaning
            services
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section our-story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img src="/images/poster.jpg" alt="Suraksha Team" />
            </div>
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Suraksha Tank & Sump Cleaning Service began
                with a simple mission: to provide high-quality water tank
                cleaning services that ensure safe and clean water for families
                and businesses across Karnataka.
              </p>
              <p>
                What started as a small team of dedicated professionals has now
                grown into a trusted name in the industry, serving thousands of
                satisfied customers throughout the region.
              </p>
              <p>
                Our commitment to excellence, attention to detail, and
                customer-centric approach has helped us build long-lasting
                relationships with our clients, who continue to trust us with
                their water storage cleaning needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h2>Our Mission</h2>
              <p>
                To provide exceptional tank and sump cleaning services that
                ensure clean and safe water for our customers, while maintaining
                the highest standards of professionalism, safety, and
                environmental responsibility.
              </p>
            </div>
            <div className="vision-box">
              <h2>Our Vision</h2>
              <p>
                To be the leading provider of water storage cleaning solutions,
                recognized for our excellence, innovation, and commitment to
                improving public health through clean water initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>

          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Customer Focus</h3>
              <p>
                We prioritize our customers' needs and strive to exceed their
                expectations with every service we provide.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <FaAward />
              </div>
              <h3>Excellence</h3>
              <p>
                We are committed to delivering the highest quality of service
                through continuous improvement and attention to detail.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty, transparency, and ethical
                practices that build trust with our customers.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <FaHistory />
              </div>
              <h3>Reliability</h3>
              <p>
                We are dependable and consistent in our service delivery,
                ensuring timely and efficient solutions for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>

            <div className="stat-item">
              <h3>12,000+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
