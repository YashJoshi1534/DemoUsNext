import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PricingSection from '../components/PricingSection';
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

      <PricingSection activePlan={activePlan} onCardClick={handleCardClick} />

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
