import React from 'react';
import './Footer.css';
import { Linkedin, MapPin, Phone, Mail, ChevronUp, ArrowRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="premium-footer-wrapper">
      
      {/* Overlapping Floating Contact Card */}
      <div className="container relative-overlap">
        <div className="floating-contact-card reveal">
          <div className="card-accent-bar"></div>
          <div className="card-header">
            <h3>Get in Touch</h3>
            <p>Connect with our expert team today</p>
          </div>
          
          <div className="card-details-grid">
            <div className="detail-item">
              <div className="icon-circle">
                <MapPin size={22} />
              </div>
              <div className="detail-text">
                <span className="detail-label">Headquarters</span>
                <span className="detail-value">30 N Gould St, Sheridan<br/> Wyoming 82801, US</span>
              </div>
            </div>
            
            <div className="detail-item">
              <div className="icon-circle">
                <Mail size={22} />
              </div>
              <div className="detail-text">
                <span className="detail-label">Email Support</span>
                <a href="mailto:support@usnexttech.com" className="detail-value link-hover">support@usnexttech.com</a>
              </div>
            </div>
            
            <div className="detail-item">
              <div className="icon-circle">
                <Phone size={22} />
              </div>
              <div className="detail-text">
                <span className="detail-label">Phone Support</span>
                <a href="tel:+13072069998" className="detail-value link-hover">+1 307 206 9998 Ext /800</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dark Footer */}
      <footer className="footer-dark">
        <div className="footer-bg-glow"></div>
        
        <div className="container">
          <div className="footer-grid">
            
            {/* Brand Column */}
            <div className="footer-col brand-col">
              <div className="footer-brand-logo">
                <div className="flag-graphic-dark">
                  <div className="flag-row-s">
                    <div className="flag-blue-box-s white-tint"></div>
                    <div className="flag-red-stripe-s"></div>
                  </div>
                  <div className="flag-row-s">
                    <div className="flag-red-stripe-s full"></div>
                  </div>
                  <div className="flag-row-s">
                    <div className="flag-red-stripe-s long"></div>
                    <div className="flag-blue-box-s small white-tint"></div>
                  </div>
                </div>
                <h2>US N<span className="accent-red">E</span>XT TECH</h2>
                <span className="logo-subtext-light">CAMPUS TO CAREER IN THE US</span>
              </div>
              
              <p className="footer-about-text">
                Leading the industry in bridging the gap between exceptional talent and career-defining opportunities across the nation.
              </p>
              
              <div className="social-links-glass">
                <a href="#" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col links-col">
              <h4 className="footer-title">Our Top Services</h4>
              <ul className="footer-menu">
                <li><a href="/placement-services"><ArrowRight size={14} /> Placement Services</a></li>
                <li><a href="/#services"><ArrowRight size={14} /> Staffing Solutions</a></li>
                <li><a href="/#services"><ArrowRight size={14} /> Bootcamp Training</a></li>
                <li><a href="/#services"><ArrowRight size={14} /> Software Development</a></li>
              </ul>
            </div>

            {/* Support Links Column */}
            <div className="footer-col links-col">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-menu">
                <li><a href="/about"><ArrowRight size={14} /> About Us</a></li>
                <li><a href="/#mission"><ArrowRight size={14} /> Our Mission</a></li>
                <li><a href="/#career"><ArrowRight size={14} /> Careers</a></li>
                <li><a href="/#contact"><ArrowRight size={14} /> Global Contact</a></li>
              </ul>
            </div>
            
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              © {new Date().getFullYear()} US NEXT TECH. All rights reserved.
            </div>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          
        </div>
        
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <ChevronUp size={24} />
        </button>
      </footer>
    </div>
  );
};

export default Footer;
