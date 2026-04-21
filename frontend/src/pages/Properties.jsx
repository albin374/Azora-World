import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import './Properties.css';

const allProperties = [
  {
    id: 1, type: 'PENTHOUSE', title: 'The Royal Atlantis', location: 'Palm Jumeirah',
    price: 'AED 45,000,000', beds: 5, baths: 6, area: '12,500 sqft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80', badge: 'EXCLUSIVE'
  },
  {
    id: 2, type: 'VILLA', title: 'Elysian Estate', location: 'Emirates Hills',
    price: 'AED 32,500,000', beds: 6, baths: 7, area: '15,000 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80', badge: 'NEW'
  },
  {
    id: 3, type: 'RESIDENCE', title: 'Burj Khalifa Signatures', location: 'Downtown Dubai',
    price: 'AED 18,200,000', beds: 4, baths: 4, area: '5,800 sqft',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=80', badge: 'FEATURED'
  },
  {
    id: 4, type: 'OFF-PLAN', title: 'Serenia Living', location: 'Palm Jumeirah',
    price: 'AED 50,000,000', beds: 5, baths: 6, area: '14,000 sqft',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1920&q=80', badge: ''
  }
];

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const filters = ['ALL', 'VILLAS', 'PENTHOUSES', 'OFF-PLAN'];

  const filtered = activeFilter === 'ALL' 
    ? allProperties 
    : allProperties.filter(p => p.type === activeFilter.replace(/S$/, ''));

  return (
    <div className="properties-immersive-page fade-in">
      
      {/* Immersive Header Top Spacer & Filters */}
      <div className="immersive-header text-center fade-up pt-5 pb-4">
        <h1 className="text-primary mt-5" style={{fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300}}>The Collection</h1>
        <ul className="elegant-filters justify-center mt-3">
          {filters.map(f => (
            <li 
              key={f} 
              className={activeFilter === f ? 'active' : ''}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Full-bleed showcase list */}
      <div className="immersive-list">
        {filtered.map((prop, idx) => (
          <div className="immersive-card" key={prop.id}>
            <div className="immersive-bg" style={{backgroundImage: `url(${prop.image})`}}></div>
            <div className="immersive-overlay"></div>
            
            <div className="immersive-content container flex-col justify-end">
              <div className="immersive-meta flex-between align-start mb-4">
                <div className="badge-group">
                  <span className="prop-badge">{prop.badge || 'SIGNATURE'}</span>
                  <span className="prop-type text-gold uppercase text-xs tracking-widest">{prop.type}</span>
                </div>
                <div className="prop-price text-gold tracking-widest" style={{fontFamily: 'var(--font-serif)', fontSize: '1.5rem'}}>{prop.price}</div>
              </div>

              <div className="immersive-main-content text-left">
                <Link to={`/property/${prop.id}`} className="hover-link">
                  <h2 className="prop-title">{prop.title}</h2>
                </Link>
                
                <div className="prop-location flex items-center gap-2 mt-2 mb-3">
                  <MapPin size={16} className="text-secondary" />
                  <span className="text-secondary" style={{fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: '1.2rem'}}>{prop.location}</span>
                </div>
                
                <div className="prop-specs-bar uppercase text-xs tracking-widest text-secondary flex gap-3 mt-4 mb-5">
                  <span>{prop.beds} Beds</span>
                  <span className="text-gold">•</span>
                  <span>{prop.baths} Baths</span>
                  <span className="text-gold">•</span>
                  <span>{prop.area}</span>
                </div>

                <Link to={`/property/${prop.id}`} className="btn btn-dark-outline">
                  View Residence <ArrowRight size={14} style={{marginLeft: '0.5rem'}} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Properties;
