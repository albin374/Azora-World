import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Plus, Minus } from 'lucide-react';
import './Home.css';


const masterpieces = [
  {
    id: 1,
    title: "Lakeview Residence",
    stats: "6 Beds • 7 Baths • 9,200 sqft",
    price: "$2,500/night",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  {
    id: 2,
    title: "The Grand Vista",
    stats: "5 Beds • 6 Baths • 8,500 sqft",
    price: "$2,000/night",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
  },
  {
    id: 3,
    title: "Azure Manor",
    stats: "8 Beds • 10 Baths • 12,000 sqft",
    price: "$4,500/night",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80"
  },
  {
    id: 4,
    title: "Royal Penthouse",
    stats: "4 Beds • 4 Baths • 5,800 sqft",
    price: "$3,200/night",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80"
  },
  {
    id: 5,
    title: "Eco Retreat Villa",
    stats: "7 Beds • 8 Baths • 10,500 sqft",
    price: "$2,800/night",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
  }
];

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev === masterpieces.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? masterpieces.length - 1 : prev - 1));
  };

  // Determine the 3 visible slides (Prev, Active, Next)
  const prevIndex = carouselIndex === 0 ? masterpieces.length - 1 : carouselIndex - 1;
  const nextIndex = carouselIndex === masterpieces.length - 1 ? 0 : carouselIndex + 1;

  const visibleSlides = [
    { item: masterpieces[prevIndex], class: "carousel-slide dim", key: 'prev' },
    { item: masterpieces[carouselIndex], class: "carousel-slide active", key: 'active' },
    { item: masterpieces[nextIndex], class: "carousel-slide dim", key: 'next' }
  ];

  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Luxury Homes<br />That Redefine Modern<br />Style of Living</h1>
          
          <div className="hero-bottom-box">
            <p>Discover exclusive properties crafted for elegance, comfort, and timeless value.</p>
            <Link to="/properties" className="btn btn-white">Explore Collections</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section container">
        <div className="about-header">
          <h2>Designing Luxury Homes<br />That Inspire Generations<br />to Come</h2>
          <div className="stat-box">
            <span className="stat-number">120+</span>
            <span className="stat-label">Premium Homes Built</span>
          </div>
        </div>
        
        <div className="about-body">
          <div className="about-text-content">
            <p>We design and deliver residences that blend artistry, architecture, and lifestyle. Our mission is to build homes that stand as a reflection of refined taste and timeless quality.</p>
            <Link to="/about" className="btn btn-white">About Us</Link>
          </div>
          
          <div className="about-images">
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80" alt="Interior Details" className="img-small" />
            <img src="https://images.unsplash.com/photo-1613490908677-7422dd819c9e?w=800&q=80" alt="Modern Exterior" className="img-large" />
          </div>
        </div>
        <div className="about-subtitle">
          <span>About us</span>
        </div>
      </section>

      {/* Featured Masterpieces Carousel */}
      <section className="masterpieces-section">
        <div className="container masterpieces-header text-center">
          <h2>Our Featured Masterpieces</h2>
          <p>A showcase of architectural excellence — designed to inspire and built to last.</p>
        </div>
        
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}><ChevronLeft size={20} /></button>
          
          <div className="carousel-track">
            {visibleSlides.map((slide) => (
              <div className={slide.class} key={slide.item.id + slide.key}>
                <img src={slide.item.image} alt={slide.item.title} />
                {slide.class.includes("active") && (
                  <div className="slide-info">
                    <h3>{slide.item.title}</h3>
                    <div className="slide-stats">
                      <span>{slide.item.stats.split('•')[0]}</span> • <span>{slide.item.stats.split('•')[1]}</span> • <span>{slide.item.stats.split('•')[2]}</span>
                    </div>
                    <div className="slide-price">Price: {slide.item.price}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next" onClick={nextSlide}><ChevronRight size={20} /></button>
        </div>
      </section>


    </div>
  );
};

export default Home;
