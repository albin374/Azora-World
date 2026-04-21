import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-luxury-page fade-in">
      
      {/* Cinematic Header */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-content text-center fade-up">
          <span className="eyebrow text-gold">DISCRETION & EXCELLENCE</span>
          <h1 className="hero-heading mx-auto">The Private Office</h1>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="consultation-section section-padding bg-primary">
        <div className="container form-container fade-up">
          <div className="text-center mb-5">
            <h2 className="subheading">Request a Private Consultation</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Whether you are acquiring a masterpiece or curating your portfolio, our senior luxury advisors are at your disposal. Complete the form below to begin the conversation.
            </p>
          </div>

          <form className="luxury-form editorial-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Title*" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="First Name*" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name*" required />
              </div>
            </div>

            <div className="form-row half">
              <div className="form-group">
                <input type="email" placeholder="Email Address*" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number*" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group select-wrapper">
                <select required>
                  <option value="" disabled selected>Area of Interest*</option>
                  <option>Exclusive Acquisitions</option>
                  <option>Selling Portfolio</option>
                  <option>Luxury Rentals</option>
                  <option>Off-Market Opportunities</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <textarea rows="3" placeholder="How may we assist you? (Optional)"></textarea>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-solid-gold px-5">Submit Request</button>
            </div>
          </form>
        </div>
      </section>

      {/* Global Presence */}
      <section className="global-presence-section section-padding bg-secondary">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span className="eyebrow">GLOBAL PRESENCE</span>
            <h2 className="subheading">Our Headquarters</h2>
            <div className="hairline-divider mx-auto" style={{maxWidth: '100px'}}></div>
          </div>

          <div className="presence-grid fade-up">
            
            {/* Dubai Office */}
            <div className="office-card">
              <div className="office-img">
                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" alt="Dubai" className="img-cover grayscale-hover"/>
              </div>
              <div className="office-details text-center">
                <h3>Dubai</h3>
                <p className="text-secondary mb-4">Level 42, The Address Downtown<br/>Dubai, United Arab Emirates</p>
                <div className="office-contact flex-center flex-col gap-2">
                  <a href="tel:+971501234567" className="contact-link"><Phone size={14}/> +971 50 123 4567</a>
                  <a href="mailto:vip@azoraworld.com" className="contact-link"><Mail size={14}/> vip@azoraworld.com</a>
                </div>
              </div>
            </div>

            {/* London Office */}
            <div className="office-card">
              <div className="office-img">
                <img src="https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=600&q=80" alt="London" className="img-cover grayscale-hover"/>
              </div>
              <div className="office-details text-center">
                <h3>London</h3>
                <p className="text-secondary mb-4">15 Berkeley Square, Mayfair<br/>London, United Kingdom</p>
                <div className="office-contact flex-center flex-col gap-2">
                  <a href="tel:+442012345678" className="contact-link"><Phone size={14}/> +44 20 1234 5678</a>
                  <a href="mailto:london@azoraworld.com" className="contact-link"><Mail size={14}/> london@azoraworld.com</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
