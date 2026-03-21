import React from 'react';
import './About.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  useScrollReveal();

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="about-grid">
          {/* Left Content */}
          <div className="about-content reveal">
            <h2 className="section-title">
              About <span className="highlight-underline">US Next Tech</span>
            </h2>
            <div className="about-text-content">
              <p>
                US NEXT TECH is a career-focused tech company committed to bridging the gap between talent and opportunity. Through our core services—Staffing, Placement, Bootcamp Training, and Software Development—we guide candidates from campus to career with expert support every step of the way.
              </p>
              <br />
              <p>
                With over 14 years of team industry experience, our mission is simple: empower individuals with the skills, tools, and connections they need to thrive in today's digital world.
              </p>
            </div>
          </div>

          {/* Right Content - CSS stylized logo mimic */}
          <div className="about-logo-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="flag-graphic">
              <div className="flag-row">
                <div className="flag-blue-box"></div>
                <div className="flag-red-stripe"></div>
              </div>
              <div className="flag-row">
                <div className="flag-red-stripe full"></div>
              </div>
              <div className="flag-row">
                <div className="flag-red-stripe long"></div>
                <div className="flag-blue-box small"></div>
              </div>
            </div>
            <div className="logo-text-block">
              <h1>US N<span className="accent-x">E</span>XT TECH</h1>
              <p>CAMPUS TO CAREER IN THE US</p>
            </div>
          </div>
        </div>

        <div className="about-promise reveal" style={{ transitionDelay: '0.4s' }}>
          <h3>Talent Trained. Careers Launched. That's the US NEXT TECH promise.</h3>
        </div>

      </div>
    </section>
  );
};

export default About;
