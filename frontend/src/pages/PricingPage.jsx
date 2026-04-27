import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PricingPage.css';

const PricingPage = () => {
  useScrollReveal();
  const [activePlan, setActivePlan] = useState(null);

  const handleCardClick = (planName) => {
    setActivePlan(planName);
  };

  const services = [
    { name: 'Resume Preparation', essential: true, plus: true, expert: true, signature: true },
    { name: 'One on One Personalized Resume Consultation', essential: true, plus: true, expert: true, signature: true },
    { name: 'Resume Insights Workshop', essential: true, plus: true, expert: true, signature: true },
    { name: 'Interview Support (Full Time)', essential: false, plus: false, expert: true, signature: true },
    { name: 'Practice Interview Session (Recruiter)', essential: false, plus: false, expert: true, signature: true },
    { name: 'Technical Expert-led Training', essential: false, plus: true, expert: true, signature: true },
    { name: 'Individualized Job Description Analysis', essential: false, plus: true, expert: true, signature: true },
    { name: 'Technical Question Clarification (One on One)', essential: false, plus: false, expert: true, signature: true },
    { name: 'Resume Promotion Services', essential: false, plus: true, expert: true, signature: true },
    { name: 'Direct Employment Assistance (Full-Time/W2)', essential: true, plus: true, expert: true, signature: true },
    { name: 'Highly Skilled Recruiter Assistance', essential: true, plus: true, expert: true, signature: true },
    { name: 'Interview Arrangement Services', essential: false, plus: true, expert: true, signature: true },
    { name: 'High-volume Application Management', essential: true, plus: true, expert: true, signature: true },
    { name: 'Dedicated Recruiter Support', essential: false, plus: true, expert: true, signature: true },
    { name: 'Email Correspondence Assistance', essential: false, plus: true, expert: true, signature: true },
  ];



  return (
    <div className="pricing-page-container reveal active">
      <div className="pricing-header">
        <h2>Our Exclusive <span>Plans</span></h2>
        <div className="pricing-divider"></div>
      </div>

      <div className="pricing-cards">
        {/* Essential Card */}
        <div 
          className={`pricing-card ${activePlan === 'essential' ? 'active' : ''}`}
          onClick={() => handleCardClick('essential')}
        >
          <div className="modern-badge">ESSENTIAL</div>
          
          <div className="card-header">
            <h3 className="card-title">ESSENTIAL</h3>
            <div className="price-display">
              <span className="currency">$</span>
              <span className="amount">999</span>
            </div>
          </div>
          
          <div className="card-body">
            <div className="discount-block">
              <span className="strike-price">18%</span>
              <span className="installment-text">16% IN 3 EASY INSTALLMENTS</span>
            </div>
            <div className="student-discount">
              Enjoy <strong>2% Student Discount</strong> on our 18% plan, marking it a total of 16%!
            </div>
          </div>
        </div>

        {/* Plus Card */}
        <div 
          className={`pricing-card ${activePlan === 'plus' ? 'active' : ''}`}
          onClick={() => handleCardClick('plus')}
        >
          <div className="modern-badge bestseller">★ BEST SELLER</div>
          
          <div className="card-header">
            <h3 className="card-title">PLUS</h3>
            <div className="price-display">
              <span className="currency">$</span>
              <span className="amount">1,999</span>
            </div>
          </div>
          
          <div className="card-body">
            <div className="discount-block">
              <span className="strike-price">16%</span>
              <span className="installment-text">14% IN 3 EASY INSTALLMENTS</span>
            </div>
            <div className="student-discount">
              Enjoy <strong>2% Student Discount</strong> on our 16% plan, marking it a total of 14%!
            </div>
          </div>
        </div>

        {/* Expert Card */}
        <div 
          className={`pricing-card ${activePlan === 'expert' ? 'active' : ''}`}
          onClick={() => handleCardClick('expert')}
        >
          <div className="modern-badge">EXPERT</div>
          
          <div className="card-header">
            <h3 className="card-title">EXPERT</h3>
            <div className="price-display">
              <span className="currency">$</span>
              <span className="amount">2,999</span>
            </div>
          </div>
          
          <div className="card-body">
            <div className="discount-block">
              <span className="strike-price">14%</span>
              <span className="installment-text">12% IN 3 EASY INSTALLMENTS</span>
            </div>
            <div className="student-discount">
              Enjoy <strong>2% Student Discount</strong> on our 14% plan, marking it a total of 12%!
            </div>
          </div>
        </div>

        {/* Signature Card */}
        <div 
          className={`pricing-card signature-card ${activePlan === 'signature' ? 'active' : ''}`}
          onClick={() => handleCardClick('signature')}
        >
          <div className="modern-badge premium">★ PREMIUM</div>
          
          <div className="card-header">
            <h3 className="card-title">SIGNATURE</h3>
            <div className="price-display">
              <span className="currency">$</span>
              <span className="amount">8,999</span>
            </div>
            <span className="billing-cycle">ONE TIME ONLY</span>
          </div>
          
          <div className="card-body">
            <p className="card-desc">The Signature Plan is available for a one-time payment.</p>
            <ul className="card-features">
              <li><strong>No Percentage</strong> / Any Payment will be taken after placement</li>
              <li>All commitments would be as per the legal agreement</li>
              <li>Customization is available based on the need</li>
            </ul>
          </div>
        </div>
      </div>

      {activePlan && createPortal(
        <div className="modal-overlay" onClick={() => setActivePlan(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                Services included in the <span className="capitalize">{activePlan}</span> Plan
              </h3>
              <button className="modal-close" onClick={() => setActivePlan(null)}>✕</button>
            </div>
            
            <div className="modal-body">
              <div className="services-grid">
                {services.filter(s => s[activePlan]).map((service, index) => (
                  <div className="service-item" key={index}>
                    <div className="service-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default PricingPage;
