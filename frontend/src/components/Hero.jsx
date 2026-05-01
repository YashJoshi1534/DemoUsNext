import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import { Briefcase } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations (video moves down slower than page scrolls)
  const videoTranslateY = scrollY * 0.3;
  const videoOpacity = Math.max(1 - (scrollY / 800), 0.4);

  return (
    <section className="video-hero" ref={containerRef}>
      
      {/* 🎬 Background Parallax Video Layer */}
      <div 
        className="video-container" 
        style={{ 
          transform: `translateY(${videoTranslateY}px)`,
          opacity: videoOpacity
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          poster="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
        >
          {/* Real corporate background footage */}
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle Dark Overlay for excellent text legibility */}
        <div className="video-overlay"></div>
      </div>

      {/* 🧠 Core Content Layer */}
      <div className="hero-content container">
        
        <div className="hero-text-center fade-up-load">
          {/* USNextTech Badge */}
          <span className="hero-badge">USNextTech</span>
          
          <h1 className="hero-heading">
            Launch Your Tech Career in the <br className="desktop-break"/>
            <span className="text-gradient-blue">United States</span>
          </h1>
          
          <p className="hero-subheading">
            Transform your skills into global opportunities with expert training, 
            staffing support, and job placement guidance.
          </p>
          
          <div className="hero-buttons">
            <a href="#services" className="btn-solid-red">Start Your Journey</a>
            <a href="#contact" className="btn-outline-clear">Book Free Consultation</a>
          </div>
        </div>

        {/* 💼 Floating UI Elements (Absolute around Content) */}
        
        {/* Removed Job Offer Notification Card per user request */}

        {/* Abstract Profile Card (Left side) */}
        <div className="floating-card float-profile delay-2">
          <div className="profile-avatar-gradient"></div>
          <div className="profile-mock-lines">
            <div className="mock-line-long"></div>
            <div className="mock-line-short"></div>
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default Hero;
