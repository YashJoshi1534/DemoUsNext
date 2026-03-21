import React, { useEffect } from 'react';
import './PlacementServices.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, TrendingUp, Award, Briefcase, Users, CheckCircle, ArrowRight } from 'lucide-react';

const PlacementServices = () => {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when loaded
  }, []);

  const steps = [
    {
      step: 1,
      title: "Career Kickstart",
      text: "We help you build a professional, standout resume tailored to your goals.",
      icon: <Target size={28} />
    },
    {
      step: 2,
      title: "Skill Enhancement",
      text: "Enroll in targeted courses and certification programs to boost your expertise.",
      icon: <TrendingUp size={28} />
    },
    {
      step: 3,
      title: "Mock Interviews",
      text: "We conduct practice interviews to prepare you for real-world scenarios.",
      icon: <Users size={28} />
    },
    {
      step: 4,
      title: "Profile Building",
      text: "We help you craft a strong LinkedIn and job portal presence that recruiters notice.",
      icon: <Award size={28} />
    },
    {
      step: 5,
      title: "Job Matching",
      text: "Get matched with top job opportunities that align with your profile and goals.",
      icon: <Briefcase size={28} />
    },
    {
      step: 6,
      title: "Success!",
      text: "Congratulations! You're placed and ready to grow in your career journey.",
      icon: <CheckCircle size={28} />
    }
  ];

  return (
    <div className="page-wrapper">
      {/* 🚀 Hero Section */}
      <section className="ps-hero">
        <div className="container ps-hero-grid">
          <div className="ps-hero-content reveal">
            <div className="accent-bar-title">
              <h1>Tailored support from your first resume draft to your first day on the job.</h1>
            </div>
            <p className="ps-hero-description">
              At <strong className="text-red">US NEXT TECH</strong>, our Placement Services are designed to provide complete, personalized guidance throughout your job search journey. We don't just help you find a job—we help you build a career.
            </p>
            <button className="btn-solid-red mt-6">Get Started Today <ArrowRight size={18} className="inline ml-2" /></button>
          </div>
          <div className="ps-hero-image reveal reveal-stagger-1">
            <div className="ps-image-glass-card">
              {/* Note: I'm replacing the user's flat illustration with a premium CSS-drawn abstract representation to match the new ultra-premium SaaS look, but they can easily slot an image tag here */}
              <div className="abstract-ps-graphic">
                <div className="circle-bg"></div>
                <div className="block block-1"></div>
                <div className="block block-2"></div>
                <div className="block block-3"></div>
                <div className="flag-pole"></div>
                <div className="flag-banner"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 What We Offer / Stats Section */}
      <section className="ps-stats-section bg-slate">
        <div className="container">
          <div className="ps-section-header reveal">
            <div className="capsule-badge outline-badge">What We Offer</div>
            <h2>How It Works : <span className="text-red">Seamless</span></h2>
            <div className="title-underline"></div>
          </div>

          <div className="ps-stats-grid reveal reveal-stagger-1">
            <div className="ps-stat-card glass">
              <h3>395+</h3>
              <p>Successful career transitions</p>
            </div>
            <div className="ps-stat-card glass">
              <h3>95%</h3>
              <p>of candidates hired within 3 months</p>
            </div>
            <div className="ps-stat-card glass">
              <h3>475+</h3>
              <p>Hiring partners nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🛤️ Roadmap Grid Section */}
      <section className="ps-roadmap-section">
        <div className="container">
          <div className="ps-section-header reveal">
            <div className="capsule-badge solid-badge">US NEXT TECH JOB PLACEMENT ROADMAP</div>
          </div>

          <div className="ps-roadmap-grid">
            {steps.map((item, index) => (
              <div className={`ps-roadmap-card reveal reveal-stagger-${min(index, 3)}`} key={item.step}>
                <div className="step-circle">Step: {item.step}</div>
                <div className="ps-card-content">
                  <div className="ps-card-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for stagger limit
const min = (a, b) => (a < b ? a : b);

export default PlacementServices;
