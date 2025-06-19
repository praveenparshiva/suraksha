import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, message } = formData;

    const text = `Full Name: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/919743409275?text=${text}`;

    window.open(whatsappURL, "_blank"); 

    setFormStatus({ submitted: true });
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-container">
      {formStatus.submitted ? (
        <div className="form-success">
          <h3>Thank you!</h3>
          <p>Your WhatsApp message is ready to send.</p>
          <button
            className="btn"
            onClick={() => setFormStatus({ submitted: false })}
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
              <option value="Water Tank Cleaning">Water Tank Cleaning</option>
              <option value="Sump Cleaning">Sump Cleaning</option>
              <option value="Both">Both</option>
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

          <p className="whatsapp-note">
            After clicking "Send via WhatsApp", you will be redirected to
            WhatsApp. Please press the send button to confirm your message.
          </p>

          <button type="submit" className="btn form-submit">
            Send via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
