import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const slides = [
  { type: "image", src: "house1.jpg" },
  { type: "image", src: "house2.jpg" },
  { type: "image", src: "house3.jpg" },
  { type: "image", src: "house4.jpg" },
  { type: "image", src: "house5.jpg" },
  { type: "image", src: "overhead1.jpg" },
  { type: "image", src: "uniform1.jpg" },
  { type: "video", src: "tank1.mp4" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const prevIndex = (index - 1 + slides.length) % slides.length;
  const nextIndex = (index + 1) % slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderMedia = (media, position) => {
    if (media.type === "image") {
      return (
        <div
          className={`carousel-image ${position}`}
          style={{
            backgroundImage: `url(/GalleryImages/${media.src})`,
          }}
        />
      );
    } else {
      return (
        <div className={`carousel-image ${position}`}>
          <video
            src={`/GalleryVideos/${media.src}`}
            autoPlay
            muted
            loop
            playsInline
            className="video-slide"
          />
        </div>
      );
    }
  };

  return (
    <section className="hero">
      <div className="hero-carousel">
        {renderMedia(slides[prevIndex], "left")}
        {renderMedia(slides[index], "center")}
        {renderMedia(slides[nextIndex], "right")}
      </div>

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
