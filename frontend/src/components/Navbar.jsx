import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const isLightTop = location.pathname === '/properties' ||
    location.pathname === '/about' ||
    location.pathname.startsWith('/properties/');

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isLightTop ? 'light-nav' : ''}`}>
      <div className="container nav-container">

        <Link to="/" className="nav-logo-area" onClick={closeMenu}>
          <img src="/logo.jpg" alt="Azora World" className="nav-logo" />
          <div className="nav-tagline">LUXURY PROPERTIES</div>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
          <Link to="/properties" className={location.pathname === '/properties' ? 'active' : ''}>PROPERTIES</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link>
        </div>

        <div className="nav-actions">
          <div className="nav-phone">
            <Phone size={14} />
            <span>+971 50 123 4567</span>
          </div>
          <Link to="/properties" className="btn btn-gold-outline">view property page</Link>
          <button className="theme-toggle desktop-theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-controls">
          <button className="theme-toggle mobile-theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <Link to="/" onClick={closeMenu}>HOME</Link>
          <Link to="/properties" onClick={closeMenu}>PROPERTIES</Link>
          <Link to="/about" onClick={closeMenu}>ABOUT</Link>
          <Link to="/contact" onClick={closeMenu}>CONTACT</Link>

          <div className="mobile-actions">
            <div className="nav-phone">
              <Phone size={14} />
              <span>+971 50 123 4567</span>
            </div>
            <Link to="/contact" onClick={closeMenu} className="btn btn-solid-gold">Book a Viewing</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;