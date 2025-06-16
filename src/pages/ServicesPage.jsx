import React from "react";
import { Link } from "react-router-dom";
import {
  FaWater,
  FaTools,
  FaShieldAlt,
  FaCheck,
  FaBuilding,
  FaHome,
  FaIndustry,
} from "react-icons/fa";
import "./ServicesPage.css";

const ServicesPage = () => {
  const services = [
    {
      icon: <FaWater />,
      title: "Water Tank Cleaning",
      description:
        "Our comprehensive water tank cleaning service includes removal of sediment, algae, and bacteria, followed by thorough disinfection to ensure clean and safe water storage.",
      features: [
        "Complete draining of the tank",
        "Removal of sludge and sediment",
        "Scrubbing of walls and floor",
        "Disinfection with eco-friendly chemicals",
        "Final rinse and refilling",
      ],
    },
    {
      icon: <FaTools />,
      title: "Sump Cleaning",
      description:
        "Our sump cleaning service ensures that the primary water storage unit of your building is free from contaminants, providing clean water supply throughout your property.",
      features: [
        "Pumping out existing water",
        "Manual cleaning of sump walls and floor",
        "Removal of debris and sediment",
        "Disinfection and sanitization",
        "Quality check before refilling",
      ],
    },
   
    {
      icon: <FaBuilding />,
      title: "Commercial Tank Cleaning",
      description:
        "Tailored cleaning solutions for commercial buildings, ensuring uninterrupted supply of clean water for businesses, offices, and commercial establishments.",
      features: [
        "Scheduled maintenance programs",
        "Minimal disruption to business operations",
        "Compliance with health regulations",
        "Documentation and certification",
        "24/7 emergency services",
      ],
    },
    {
      icon: <FaHome />,
      title: "Residential Tank Cleaning",
      description:
        "Specialized cleaning services for homes and residential complexes, ensuring that families have access to clean and safe water for daily use.",
      features: [
        "Thorough cleaning of all types of home tanks",
        "Flexible scheduling options",
        "Affordable service packages",
        "Child and pet-safe cleaning methods",
        "Preventive maintenance advice",
      ],
    },
    {
      icon: <FaIndustry />,
      title: "Industrial Tank Cleaning",
      description:
        "Heavy-duty cleaning solutions for industrial water storage systems, adhering to strict safety standards and industrial regulations.",
      features: [
        "Handling of large-capacity tanks",
        "Specialized equipment for industrial cleaning",
        "Compliance with industry standards",
        "Minimal downtime for operations",
        "Comprehensive reporting",
      ],
    },
  ];

  
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Comprehensive tank and sump cleaning solutions for residential,
            commercial, and industrial properties
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            At Suraksha, we provide a wide range of professional cleaning
            services for all types of water storage systems. Our team uses
            advanced equipment and eco-friendly cleaning agents to ensure the
            highest standards of cleanliness and hygiene.
          </p>

          <div className="services-list">
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <h4>Service Includes:</h4>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheck className="feature-check" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Cleaning Process</h2>
          <p className="section-subtitle">
            We follow a systematic approach to ensure thorough cleaning and
            disinfection of your water storage systems
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Inspection</h3>
              <p>
                We begin with a thorough inspection of your tank or sump to
                assess its condition and identify specific cleaning
                requirements.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Draining</h3>
              <p>
                The tank is completely drained of water, ensuring that all
                sediment and debris can be properly removed.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Cleaning</h3>
              <p>
                Our team manually scrubs all surfaces to remove algae, sediment,
                and other contaminants using specialized equipment.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Rinsing</h3>
              <p>
                The tank is thoroughly rinsed to remove any residual cleaning
                agents, ensuring water safety.
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Final Inspection</h3>
              <p>
                We conduct a final inspection to ensure that the cleaning meets
                our high standards before refilling the tank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-list">
            <div className="faq-item">
              <h3>How often should I clean my water tank?</h3>
              <p>
                We recommend cleaning your water tank at least once every 6
                months for residential properties and once every 3-4 months for
                commercial properties to ensure clean and safe water supply.
              </p>
            </div>

            <div className="faq-item">
              <h3>How long does the cleaning process take?</h3>
              <p>
                The duration depends on the size and condition of your tank or
                sump. Typically, a standard residential tank cleaning takes 2-3
                hours, while larger commercial tanks may take 4-6 hours or more.
              </p>
            </div>

            <div className="faq-item">
              <h3>Are the cleaning agents you use safe?</h3>
              <p>
                Yes, we only use eco-friendly, food-grade cleaning agents and
                disinfectants that are safe for drinking water systems and do
                not leave harmful residues.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                Will I need to arrange for water supply during the cleaning?
              </h3>
              <p>
                We recommend having alternative water arrangements during the
                cleaning process. However, we try to minimize disruption by
                scheduling the service at a convenient time and completing it as
                efficiently as possible.
              </p>
            </div>
          </div>

          <div className="faq-cta">
            <p>Have more questions? We're here to help!</p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to schedule a cleaning service?</h2>
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

export default ServicesPage;
