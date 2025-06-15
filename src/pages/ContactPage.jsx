import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Get in touch with our team for inquiries, quotes, or to schedule a
            service
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Get In Touch</h2>
              <p>
                We're here to answer any questions you may have about our
                services. Reach out to us and we'll respond as soon as we can.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+919713409275">+91 9713 409 275</a>
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:surakshatankmysore@gmail.com">
                        surakshatankmysore@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-details">
                    <h3>Address</h3>
                    <p>7th Cross, 3rd Main Rd, C-Block, JP Nagar,</p>
                    <p>Mysuru, Karnataka - 570008</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaClock />
                  </div>
                  <div className="method-details">
                    <h3>Business Hours</h3>
                    <p>Monday - Saturday: 6:00 AM - 6:00 PM</p>
                    <p>Sunday: 6:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331.5900940913784!2d76.6456147251456!3d12.266448206965947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6f6be747edc7%3A0x8000104bd867c535!2sSuraksha%20Tank%20and%20Sump%20Cleaning%20Service!5e1!3m2!1sen!2sin!4v1747106614406!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Suraksha Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to schedule a cleaning service?</h2>
            <p>Call us now or fill out the contact form above!</p>
            <a href="tel:+919743409275" className="btn btn-cta">
              Call Now: +91 9743 409 275
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
