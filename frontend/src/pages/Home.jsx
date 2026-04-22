import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, MapPin, ArrowRight, ChevronDown, Home as HomeIcon, CircleDollarSign, Search } from 'lucide-react';
import './Home.css';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    title: 'LIVE BEYOND THE ORDINARY',
    subtitle: 'Curated estates for the world\'s most discerning buyers'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
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

const locationOptions = ['Any Location', 'Dubai Marina', 'Palm Jumeirah', 'Downtown Dubai', 'Jumeirah Bay Island', 'Abu Dhabi'];
const typeOptions = ['All Types', 'Penthouse', 'Villa', 'Apartment', 'Mansion', 'Townhouse'];
const priceOptions = ['Any Price', 'AED 1M–5M', 'AED 5M–15M', 'AED 15M–50M', 'AED 50M+'];
const bedOptions = ['Any', '1', '2', '3', '4', '5+'];

const FilterBox = ({ id, label, icon: Icon, value, options, onChange, openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === id;
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setOpenDropdown]);

  return (
    <div className={`filter-box ${isOpen ? 'active' : ''}`} ref={dropdownRef}>
      <div 
        className="filter-trigger"
        onClick={() => setOpenDropdown(isOpen ? null : id)}
      >
        <div className="filter-label">
          {Icon && <Icon size={12} className="f-icon" />}
          {label}
        </div>
        <div className="filter-value">
          <span>{value}</span>
          <ChevronDown size={14} className={`f-chevron ${isOpen ? 'rotated' : ''}`} />
        </div>
      </div>
      <div className={`filter-dropdown ${isOpen ? 'show' : ''}`}>
        {options.map((opt) => (
          <div 
            key={opt}
            className={`filter-option ${value === opt ? 'selected' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onChange(opt);
              setOpenDropdown(null);
            }}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

const statsData = [
  { val: 500, suffix: '+', desc: 'Properties' },
  { val: 12, suffix: '', desc: 'Countries' },
  { val: 2, prefix: 'AED ', suffix: 'B+', desc: 'Sold', isCompact: true },
  { val: 24, suffix: '/7', desc: 'Concierge' }
];

const AnimatedCounter = ({ endValue, duration = 1800, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    let observer;
    if (countRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime = null;
            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              // ease-out cubic
              const easeOut = (t) => 1 - Math.pow(1 - t, 3);
              const percent = Math.min(progress / duration, 1);
              setCount(Math.floor(endValue * easeOut(percent)));
              if (percent < 1) {
                window.requestAnimationFrame(animate);
              } else {
                setCount(endValue);
              }
            };
            window.requestAnimationFrame(animate);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(countRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasAnimated, endValue, duration]);

  return (
    <span ref={countRef}>
      {prefix && <span className="stat-prefix">{prefix}</span>}
      {count}
      {suffix && <span className="stat-suffix">{suffix}</span>}
    </span>
  );
};

const Home = () => {
  useEffect(() => {
    document.title = "Home | Azora World Luxury Real Estate";
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState('Any Location');
  const [propType, setPropType] = useState('All Types');
  const [price, setPrice] = useState('Any Price');
  const [beds, setBeds] = useState('Any');
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClearFilters = () => {
    setLocation('Any Location');
    setPropType('All Types');
    setPrice('Any Price');
    setBeds('Any');
    setOpenDropdown(null);
  };

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
      <section className="search-bar-section box-layout">
        <div className="container">
          <div className="search-eyebrow">
            <div className="s-line"></div>
            <span>Discover Luxury Properties</span>
            <div className="s-line"></div>
          </div>
          <h2 className="search-heading">Find your <span className="muted-italic">perfect</span> residence</h2>

          <div className="search-container">
            <div className="search-row search-row-1">
              <FilterBox 
                id="location" label="LOCATION" icon={MapPin} 
                value={location} onChange={setLocation} options={locationOptions}
                openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} 
              />
              <FilterBox 
                id="type" label="PROPERTY TYPE" icon={HomeIcon} 
                value={propType} onChange={setPropType} options={typeOptions}
                openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} 
              />
              <FilterBox 
                id="price" label="PRICE RANGE" icon={CircleDollarSign} 
                value={price} onChange={setPrice} options={priceOptions}
                openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} 
              />
              <div className="bedrooms-strip">
                <span className="beds-label">BEDROOMS</span>
                <div className="beds-toggles">
                  {bedOptions.map(b => (
                    <button 
                      key={b} 
                      className={`bed-toggle ${beds === b ? 'active' : ''}`}
                      onClick={() => setBeds(b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="search-action-wrapper">
            <button className="search-action-btn">
              <Search size={16} style={{marginRight: '8px'}} /> SEARCH PROPERTIES
            </button>
          </div>

          <div className="search-footer">
            <div className="search-results-info">Showing <span className="gold-num">500+</span> properties available</div>
            <button className="clear-filters-btn" onClick={handleClearFilters}>CLEAR FILTERS</button>
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
              <p>Meticulously maintained estates featuring premium bespoke furnishings, state-of-the-art home automation, and flawlessly integrated climate control systems to ensure total perfection.</p>
            </div>
            <div className="amenity-item">
              <h4>Ultimate Security</h4>
              <p>Thorough health and safety standards paired with continuous 24/7 private security details, encrypted smart surveillance, and highly restricted biometric access for absolute peace of mind.</p>
            </div>
            <div className="amenity-item">
              <h4>Absolute Privacy</h4>
              <p>Exclusive gated communities and private, ultra-luxury residences meticulously positioned and shielded from the public eye to grant high-net-worth individuals total residential anonymity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section bg-primary">
        <div className="stats-grid fade-up">
          {statsData.map((stat, i) => (
            <div className="stat-block" key={i} style={{ '--delay': `${i * 150}ms` }}>
              <div className={`stat-num ${stat.isCompact ? 'compact-num' : ''}`}>
                <AnimatedCounter endValue={stat.val} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="stat-desc">{stat.desc}</div>
              {i !== statsData.length - 1 && <div className="stat-divider"></div>}
            </div>
          ))}
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
