import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo.jpg" alt="Azora World" style={{ height: '60px', filter: 'brightness(2)' }} />
            </Link>
            <p className="brand-desc">
              Curating the world's most extraordinary properties. A legacy of luxury, distinction, and unparalleled service.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">X</a>
              <a href="#" className="social-icon">IN</a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">Our Properties</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/properties">Off-Plan Developments</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><a href="#">Property Buying</a></li>
              <li><a href="#">Property Selling</a></li>
              <li><a href="#">Luxury Rentals</a></li>
              <li><a href="#">Investment Advisory</a></li>
              <li><a href="#">Concierge</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <p>Level 42, The Address Downtown,<br />Dubai, United Arab Emirates</p>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <p>+971 50 123 4567<br />+971 4 321 0000</p>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <p>enquiries@azoraworld.com</p>
            </div>
          </div>

        </div>

        <div className="hairline-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Azora World. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="separator">·</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
