import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer-area">
      {location.pathname !== '/properties' && (
        <div className="footer-cta" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000')" }}>
          <div className="cta-overlay"></div>
          <div className="cta-content container">
            <h2>Grow Your Real Estate Portfolio with Us</h2>
            <p>Partner with our team to access exclusive listings, investment insights, and personalized buying guidance.</p>
            <Link to="/properties" className="btn btn-white">Explore Collections</Link>
          </div>
        </div>
      )}

      <div className="footer-main container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h3 className="footer-logo">
              <img src="/logo.jpg" alt="Azora World" style={{ height: '50px', objectFit: 'contain', marginRight: '15px' }} />
              Azora World
            </h3>
            <p>Luxury Homes That Redefine Modern Living. Crafted with elegance, precision, and timeless design.</p>
            <div className="social-links">
              <a href="#">Fb</a>
              <a href="#">Tw</a>
              <a href="#">In</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/properties">Featured Homes</Link></li>
              <li><Link to="/properties">Popular Deals</Link></li>
              <li><Link to="/properties">Investments</Link></li>
              <li><Link to="/properties">Virtual Tours</Link></li>
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h4>Newsletter</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn btn-white">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Azora World. All Rights Reserved.</p>
          <p>Luxury Location Lifestyle</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
