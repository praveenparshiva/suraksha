import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './TestimonialCard.css';

const TestimonialCard = ({ name, location, rating, text }) => {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">
        <FaQuoteLeft />
      </div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <div className="testimonial-author">
        <h4>{name}</h4>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
