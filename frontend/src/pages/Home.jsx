import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, MapPin, ArrowRight } from 'lucide-react';
import './Home.css';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    title: 'LIVE BEYOND THE ORDINARY',
    subtitle: 'Curated estates for the world\'s most discerning buyers'
  },
  {
    image: 'https://images.unsplash.com/photo-1613490908677-7422dd819c9e?w=1920&q=80',
    title: 'THE PINNACLE OF LUXURY',
    subtitle: 'Exclusive penthouses shaping the skyline'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1920&q=80',
    title: 'YOUR PRIVATE SANCTUARY',
    subtitle: 'Villas that blend architecture with nature'
  }
];

const properties = [
  {
    id: 1,
    title: "The Royal Atlantis Penthouse",
    location: "Palm Jumeirah, Dubai",
    price: "AED 45,000,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    badge: "EXCLUSIVE"
  },
  {
    id: 2,
    title: "Elysian Private Villa",
    location: "Emirates Hills, Dubai",
    price: "AED 32,500,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    badge: "NEW"
  },
  {
    id: 3,
    title: "Burj Khalifa Residence",
    location: "Downtown Dubai",
    price: "AED 18,200,000",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    badge: "FEATURED"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page fade-in">
      
      {/* Hero Section */}
      <section className="hero-fullscreen">
        {heroSlides.map((slide, idx) => (
          <div 
            key={idx} 
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
        
        <div className="hero-vertical-text">
          LUXURY REAL ESTATE · EST. 2010
        </div>

        <div className="hero-content text-center container">
          <div className="stars-rating">★★★★★</div>
          <span className="eyebrow">PREMIUM PROPERTIES · UAE & BEYOND</span>
          <h1 className="hero-heading">{heroSlides[currentSlide].title}</h1>
          <p className="hero-subtitle">{heroSlides[currentSlide].subtitle}</p>
          <Link to="/properties" className="btn btn-gold-outline mt-4">EXPLORE PROPERTIES</Link>
        </div>

        <div className="hero-carousel-indicator">
          <span className="current">0{currentSlide + 1}</span>
          <div className="indicator-line"></div>
          <span className="total">0{heroSlides.length}</span>
        </div>
      </section>

      {/* Property Search Bar */}
      <section className="search-bar-section">
        <div className="container">
          <div className="search-bar">
            <div className="search-field">
              <label>Location</label>
              <select><option>Any Location</option><option>Dubai</option><option>Abu Dhabi</option></select>
            </div>
            <div className="search-field">
              <label>Property Type</label>
              <select><option>All Types</option><option>Villa</option><option>Penthouse</option></select>
            </div>
            <div className="search-field">
              <label>Price Range</label>
              <select><option>Any Price</option><option>Above AED 10M</option></select>
            </div>
            <button className="btn btn-solid-gold search-btn">Search Properties</button>
          </div>
        </div>
      </section>

      {/* About Brand Section */}
      <section className="about-brand section-padding bg-primary">
        <div className="container">
          <div className="brand-grid">
            <div className="brand-text fade-up">
              <h2 className="subheading">A Legacy of<br/>Extraordinary Homes</h2>
              <p>
                Azora World was founded on a simple premise: to curate the most exceptional properties across the globe and pair them with unparalleled client service.
              </p>
              <p>
                Whether you seek a beachfront villa in Palm Jumeirah or a bespoke penthouse overlooking the city skyline, our Private Office is dedicated to fulfilling your most refined real estate aspirations.
              </p>
              <Link to="/about" className="text-gold inline-cta mt-2">Our Story <ArrowRight size={14}/></Link>
            </div>
            <div className="brand-images fade-up">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Interior Details" className="img-front" />
              <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80" alt="Villa Exterior" className="img-back" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-properties section-padding bg-secondary">
        <div className="container">
          <div className="text-center mb-5 fade-up">
            <span className="eyebrow">HANDPICKED COLLECTION</span>
            <h2 className="subheading">Featured Properties</h2>
          </div>
          
          <div className="property-grid fade-up">
            {properties.map(prop => (
              <div className="property-card" key={prop.id}>
                <div className="property-img-wrapper">
                  <div className="property-badge">{prop.badge}</div>
                  <img src={prop.image} alt={prop.title} className="img-cover" />
                  <div className="property-img-overlay">
                    <Link to={`/property/${prop.id}`} className="btn btn-gold-outline">View Details</Link>
                  </div>
                </div>
                <div className="property-details">
                  <span className="property-type">VILLA</span>
                  <h3 className="property-title">{prop.title}</h3>
                  <div className="property-location"><MapPin size={12}/> {prop.location}</div>
                  <div className="property-price">{prop.price}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5 fade-up">
            <Link to="/properties" className="btn btn-dark-outline">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* VIP Concierge Section */}
      <section className="concierge-section section-padding bg-primary">
        <div className="container concierge-grid">
          <div className="concierge-image fade-up">
            <img src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80" alt="VIP Lifestyle" className="img-cover" />
          </div>
          <div className="concierge-text fade-up">
            <span className="eyebrow">TAILORED SERVICE</span>
            <h2 className="subheading mb-4">VIP Concierge & Lifestyle Management</h2>
            <p>
              For luxury seekers and high-net-worth individuals, our dedicated concierge team ensures your life and investments run flawlessly. 
            </p>
            <p>
              From securing exclusive restaurant reservations and private yacht charters, to arranging bespoke property management and comprehensive security — we offer an unparalleled suite of services built on absolute discretion.
            </p>
            <Link to="/contact" className="btn btn-gold-outline mt-4">Discover Our Services</Link>
          </div>
        </div>
      </section>

      {/* Villa Gallery Mosaic */}
      <section className="gallery-section section-padding bg-secondary">
        <div className="container text-center fade-up">
          <span className="eyebrow">THE COLLECTION</span>
          <h2 className="subheading mb-5">Villa Gallery</h2>
        </div>
        <div className="gallery-mosaic container fade-up">
          {galleryImages.map((img, i) => (
            <div className={`gallery-item item-${i}`} key={i}>
              <img src={img} alt={`Gallery ${i}`} className="img-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Amenities & Security Strip */}
      <section className="amenities-strip bg-dark text-light section-padding">
        <div className="container text-center fade-up">
          <h2 className="subheading text-gold mb-5">Experience World-Class Living</h2>
          <div className="amenities-grid-3">
            <div className="amenity-item">
              <h4>Unparalleled Comfort</h4>
              <p>Meticulously maintained estates featuring premium bespoke furnishings and integrated climate control.</p>
            </div>
            <div className="amenity-item">
              <h4>Ultimate Security</h4>
              <p>Thorough health & safety standards paired with 24/7 private security details and smart surveillance.</p>
            </div>
            <div className="amenity-item">
              <h4>Absolute Privacy</h4>
              <p>Exclusive gated communities and private residences shielded from the public eye.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section section-padding bg-primary">
        <div className="container stats-grid fade-up">
          <div className="stat-block">
            <div className="stat-num">500+</div>
            <div className="stat-desc">Properties</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">12</div>
            <div className="stat-desc">Countries</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">AED 2B+</div>
            <div className="stat-desc">Sold</div>
          </div>
          <div className="stat-block">
            <div className="stat-num">24/7</div>
            <div className="stat-desc">Concierge</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding bg-dark text-light">
        <div className="container text-center fade-up">
          <div className="quote-mark">"</div>
          <h3 className="testimonial-text">
            "Azora World completely transformed our expectations of what real estate service could be. 
            The attention to detail and market insight is simply unmatched."
          </h3>
          <div className="testimonial-author">
            <span className="author-name">Alexander Wright</span>
            <span className="author-loc">London, UK</span>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section section-padding bg-primary">
        <div className="container newsletter-grid fade-up">
          <div className="newsletter-text">
            <h2 className="subheading">Stay up to date</h2>
            <p>Get our emails. Letters from our private office. Enhancing luxury living, exclusive property drops, and much more. Not too often — just enough.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email Address" required />
            <button className="btn btn-solid-gold">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
