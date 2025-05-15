import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_c6ci24r",
        "template_o1w8xmz",
        templateParams,
        "ZKDmgCH6w0BqZrLs2"
      )
      .then(() => {
        setFormStatus({ submitted: true, error: false });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch(() => {
        setFormStatus({ submitted: false, error: true });
      });
  };

  return (
    <div className="contact-form-container">
      {formStatus.submitted ? (
        <div className="form-success">
          <h3>Thank you for contacting us!</h3>
          <p>We have received your message and will get back to you shortly.</p>
          <button
            className="btn"
            onClick={() => setFormStatus({ submitted: false, error: false })}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Required</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="water-tank-cleaning">Water Tank Cleaning</option>
              <option value="sump-cleaning">Sump Cleaning</option>
              <option value="underground-tank-cleaning">
                Underground Tank Cleaning
              </option>
              <option value="overhead-tank-cleaning">
                Overhead Tank Cleaning
              </option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn form-submit">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;