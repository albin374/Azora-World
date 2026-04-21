import React from 'react';
import { Target, Users, Shield, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page fade-in">
      
      {/* Hero */}
      <section className="about-hero text-center fade-up bg-primary flex-col justify-end">
        <div className="container">
          <span className="eyebrow mt-5">OUR STORY</span>
          <h1 className="detail-heading mt-3">Where Luxury Meets Legacy</h1>
          <div className="hairline-divider mx-auto my-4" style={{width: '60px'}}></div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="brand-story section-padding bg-primary">
        <div className="container story-grid">
          <div className="story-text">
            <h2 className="subheading mb-4">A Tradition of Excellence</h2>
            <p>
              Founded in 2010, Azora World was established with a singular vision: to redefine the luxury real estate experience. We operate not merely as brokers, but as trusted advisors to some of the world's most discerning individuals, families, and investors.
            </p>
            <p>
              Our private office approach ensures absolute discretion, unparalleled market intelligence, and access to off-market masterpieces that never reach the public domain. We believe that true luxury is found in the meticulous attention to detail and a seamless, bespoke service.
            </p>
          </div>
          <div className="story-image-wrap">
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80" alt="Office" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values section-padding bg-secondary">
        <div className="container text-center">
          <span className="eyebrow">OUR PHILOSOPHY</span>
          <h2 className="subheading mb-5">Core Values</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <Shield size={32} className="value-icon" />
              <h3>Integrity</h3>
              <p>Absolute transparency and ethical conduct form the bedrock of every relationship we build.</p>
            </div>
            <div className="value-card">
              <Award size={32} className="value-icon" />
              <h3>Excellence</h3>
              <p>We accept nothing less than extraordinary in our properties, our people, and our service.</p>
            </div>
            <div className="value-card">
              <Users size={32} className="value-icon" />
              <h3>Discretion</h3>
              <p>Operating with strict confidentiality, protecting the privacy and interests of our clients globally.</p>
            </div>
            <div className="value-card">
              <Target size={32} className="value-icon" />
              <h3>Vision</h3>
              <p>Anticipating market shifts to curating investments that stand the test of time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section section-padding bg-primary">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">THE PRIVATE OFFICE</span>
            <h2 className="subheading">Leadership Team</h2>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="CEO" />
              <div className="team-info">
                <h4>Alexander Wright</h4>
                <p>Founder & CEO</p>
              </div>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Director" />
              <div className="team-info">
                <h4>Eleanor Vance</h4>
                <p>Managing Director</p>
              </div>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" alt="Head of Sales" />
              <div className="team-info">
                <h4>Michael Chang</h4>
                <p>Head of Global Sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
