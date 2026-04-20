import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <div className="container contact-container">
        
        <div className="contact-header">
          <h1 className="text-gold">Get in Touch</h1>
          <p>We are here to assist you in securing your next luxury lifestyle experience. Connect with our concierge to book your curated estate.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-panel">
            <h3>Contact Information</h3>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="info-items">
              <div className="info-item">
                <Phone className="contact-icon" />
                <span>+971 56 526 3471</span>
              </div>
              <div className="info-item">
                <Mail className="contact-icon" />
                <span>enquiries@azoraworld.com</span>
              </div>
              <div className="info-item">
                <MapPin className="contact-icon" />
                <span>Office No. OF-01, Palm Jumeirah, Dubai, UAE</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="contact-form-panel">
            <form className="luxury-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>
              
              <div className="form-group-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+1 234 567 8900" />
                </div>
              </div>

              <div className="form-group">
                <label>Desired Location or Property</label>
                <input type="text" placeholder="e.g. Palm Jumeirah Villa" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us how we can curate your experience..."></textarea>
              </div>

              <button className="btn btn-white submit-btn">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
