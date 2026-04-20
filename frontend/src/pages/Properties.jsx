import React, { useState, useEffect } from 'react';
import './Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch properties from backend
    const fetchProperties = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'https://azora-world.onrender.com';
        const response = await fetch(`${apiUrl}/api/properties`);
        if (response.ok) {
          const data = await response.json();
          setProperties(data);
        } else {
          console.error("Failed to fetch");
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="properties-page fade-in">
      <div className="container">
        <div className="properties-header text-center fade-in">
          <h1>Exclusive Collections</h1>
          <p>Immerse yourself in our portfolio of carefully curated architectural masterpieces around the globe.</p>
        </div>

        {loading ? (
          <div className="text-center" style={{ padding: '4rem 0' }}>
            <p style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>Loading exclusive properties...</p>
          </div>
        ) : (
          <div className="luxury-property-list">
            {properties.map((property, idx) => (
              <div key={property._id} className="luxury-property-card fade-in" style={{ animationDelay: `${idx * 0.2}s` }}>
                
                <div className="property-image-wrapper">
                  <img src={property.images[0]} alt={property.title} />
                  <div className="property-price-tag">
                    ${property.pricePerNight} <span style={{fontSize:'0.8rem', fontWeight:'normal', color: '#fff'}}>/ night</span>
                  </div>
                </div>

                <div className="property-details-wrapper">
                  <h2>{property.title}</h2>
                  <span className="property-location-tag">{property.location}</span>
                  
                  <p className="property-desc">{property.description}</p>
                  
                  <div className="luxury-amenities">
                    {property.amenities.map((amenity, i) => (
                      <span key={i}>{amenity}</span>
                    ))}
                    <span>Max {property.maxGuests} Guests</span>
                  </div>
                  
                  <button className="btn btn-outline" style={{ padding: '1rem 3rem' }}>Reserve Now</button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
