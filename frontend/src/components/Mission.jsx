import './Mission.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target } from 'lucide-react';

const Mission = () => {
  useScrollReveal();

  return (
    <section id="mission" className="section mission-section">
      <div className="container mission-container">
        
        <div className="mission-content reveal">
          <div className="mission-badge">
            <Target size={18} /> Our Mission
          </div>
          <h2 className="section-title">
            Empowering the Next Generation of Tech Leaders at <span className="highlight-red">US Next Tech</span>
          </h2>
          <p className="mission-desc">
            We bridge the gap between extraordinary talent and leading tech enterprises. Our mission is to accelerate career growth for individuals and provide reliable, high-performing IT teams to businesses nationwide.
          </p>
          <ul className="mission-list">
            <li><strong>Innovation First:</strong> Staying ahead of tech trends.</li>
            <li><strong>Career Growth:</strong> Mentorship that lasts a lifetime.</li>
            <li><strong>Trust & Reliability:</strong> Vetted talent for mission-critical projects.</li>
          </ul>
        </div>

        <div className="mission-visual reveal reveal-stagger-2">
          {/* Abstract Vector Illustration Placeholder */}
          <div className="abstract-illustration glass">
            <div className="illustration-circle"></div>
            <div className="illustration-square"></div>
            <div className="illustration-triangle"></div>
            <div className="illustration-lines">
              <div className="i-line"></div>
              <div className="i-line short"></div>
              <div className="i-line"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
