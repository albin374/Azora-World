import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Droplets, Dumbbell, MonitorPlay, Trees, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('BUY');

  return (
    <div className="property-detail-page fade-in">
      
      {/* Hero Gallery */}
      <section className="detail-hero">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Property Hero" className="hero-img" />
        <div className="hero-overlay"></div>
        <button className="btn btn-gold-outline view-gallery-btn">View All Photos</button>
      </section>

      {/* Main Content Layout */}
      <section className="detail-content section-padding bg-primary">
        <div className="container detail-grid">
          
          {/* Left Column - Details */}
          <div className="detail-main">
            
            <div className="property-header">
              <div className="breadcrumb mb-5 mt-0">
                <Link to="/">HOME</Link> <span className="mx-2">/</span> 
                <Link to="/properties">PROPERTIES</Link> <span className="mx-2">/</span> 
                <span className="text-gold">THE ROYAL ATLANTIS</span>
              </div>

              <span className="eyebrow">EXCLUSIVE PENTHOUSE</span>
              <h1 className="detail-heading mt-2">The Royal Atlantis Penthouse</h1>
              <div className="loc text-secondary mt-2"><MapPin size={16}/> Palm Jumeirah, Dubai</div>

              <div className="quick-stats mt-5">
                <div className="stat"><Bed size={20}/> <span>5 Beds</span></div>
                <div className="stat"><Bath size={20}/> <span>6 Baths</span></div>
                <div className="stat"><Square size={20}/> <span>12,500 sqft</span></div>
              </div>
            </div>

            <div className="hairline-divider"></div>

            <div className="about-property">
              <h3 className="section-title">About this Property</h3>
              <p>
                Experience the pinnacle of luxury living in this sprawling 5-bedroom penthouse located in the iconic Royal Atlantis, Palm Jumeirah. Offering unobstructed, panoramic views of the Dubai skyline and the Arabian Gulf, this residence is a masterpiece of modern architecture and bespoke design.
              </p>
              <p>
                Every detail has been meticulously crafted, from the soaring ceilings and floor-to-ceiling windows to the private infinity pool seamlessly blending with the horizon. The interiors are dressed in the finest materials, completely custom-made by world-renowned designers.
              </p>
            </div>

            <div className="hairline-divider"></div>

            <div className="amenities">
              <h3 className="section-title">Features & Amenities</h3>
              <div className="amenities-grid">
                <div className="amenity-item"><Droplets size={20}/> Private Pool</div>
                <div className="amenity-item"><Trees size={20}/> Beach Access</div>
                <div className="amenity-item"><Dumbbell size={20}/> Private Gym</div>
                <div className="amenity-item"><MonitorPlay size={20}/> Home Cinema</div>
                <div className="amenity-item"><ShieldCheck size={20}/> 24/7 Security</div>
                <div className="amenity-item"><CheckCircle2 size={20}/> Smart Home System</div>
              </div>
            </div>

            <div className="hairline-divider"></div>

            <div className="floor-plan">
              <h3 className="section-title">Floor Plan</h3>
              <div className="plan-box">
                <img src="https://images.unsplash.com/photo-1600607688960-e095ff55baee?w=800&q=80" alt="Floor Plan" />
                <div className="plan-overlay">
                  <button className="btn btn-solid-gold"><Download size={14} className="mr-2"/> Download PDF</button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Booking Panel */}
          <aside className="detail-sidebar">
            <div className="booking-panel">
              <div className="price-tag">
                <span className="currency">AED</span>
                <span className="amount">45,000,000</span>
              </div>

              <div className="purpose-tabs">
                <button className={`p-tab ${activeTab === 'BUY' ? 'active' : ''}`} onClick={() => setActiveTab('BUY')}>BUY</button>
                <button className={`p-tab ${activeTab === 'RENT' ? 'active' : ''}`} onClick={() => setActiveTab('RENT')}>RENT</button>
              </div>

              <form className="enquiry-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <input type="date" placeholder="Preferred Viewing Date" />
                <textarea placeholder="Your Message" rows="3"></textarea>
                
                <button type="submit" className="btn btn-solid-gold w-100 mt-2 mb-2">Book a Viewing</button>
                <button type="button" className="btn btn-dark-outline w-100">Send Enquiry</button>
              </form>
            </div>

            <div className="agent-card">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Agent" className="agent-photo" />
              <div className="agent-info">
                <h4>David Sterling</h4>
                <p>Senior Luxury Advisor</p>
                <a href="#" className="agent-phone">+971 50 987 6543</a>
              </div>
            </div>

            <div className="trust-badges">
              <div className="t-badge"><CheckCircle2 size={16}/> Verified Property</div>
              <div className="t-badge"><CheckCircle2 size={16}/> RERA Licensed</div>
            </div>
          </aside>

        </div>
      </section>

      {/* Similar Properties */}
      <section className="similar-properties section-padding bg-secondary">
        <div className="container text-center">
          <span className="eyebrow">EXPLORE MORE</span>
          <h2 className="subheading mb-5">Similar Properties</h2>
          
          <div className="property-grid">
            {/* Reusing Home styles for quick mockup */}
            <div className="property-card">
              <div className="property-img-wrapper" style={{height: '250px'}}>
                <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80" alt="Similar" className="img-cover" />
              </div>
              <div className="property-details">
                <span className="property-type text-gold">PENTHOUSE</span>
                <h3 className="property-title">Burj Khalifa Residence</h3>
                <div className="property-price">AED 18,200,000</div>
              </div>
            </div>
            
            <div className="property-card">
              <div className="property-img-wrapper" style={{height: '250px'}}>
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" alt="Similar" className="img-cover" />
              </div>
              <div className="property-details">
                <span className="property-type text-gold">VILLA</span>
                <h3 className="property-title">Elysian Private Villa</h3>
                <div className="property-price">AED 32,500,000</div>
              </div>
            </div>
            
            <div className="property-card">
              <div className="property-img-wrapper" style={{height: '250px'}}>
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80" alt="Similar" className="img-cover" />
              </div>
              <div className="property-details">
                <span className="property-type text-gold">OFF-PLAN</span>
                <h3 className="property-title">Serenia Living</h3>
                <div className="property-price">AED 50,000,000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PropertyDetail;
