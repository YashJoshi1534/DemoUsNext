import React, { useEffect } from 'react';
import About from '../components/About';
import Statistics from '../components/Statistics';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AboutPage = () => {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-content" style={{ paddingTop: '80px' }}>
      <About />
      
      <div className="container" style={{ margin: '40px auto 80px auto' }}>
        <div className="contact-cta-card reveal" style={{
          backgroundColor: '#F8FAFC',
          borderRadius: '12px',
          padding: '50px 30px',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
          border: '1px solid #E2E8F0',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{ color: '#9E2A2B', fontSize: '2rem', marginBottom: '15px' }}>
            Let's Get Started 🚀
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '10px' }}>
            Ready to launch your career with the right support, training, and opportunities?
          </p>
          <p style={{ color: '#1E293B', fontSize: '1.1rem', fontWeight: '600', marginBottom: '30px' }}>
            Join US NEXT TECH — where your future begins today.
          </p>
          <a href="/#contact" className="btn btn-primary" style={{ padding: '14px 34px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px', borderRadius: '6px' }}>
            CONTACT US
          </a>
        </div>
      </div>

      <div style={{ paddingBottom: '60px' }}>
        <Statistics />
      </div>
    </div>
  );
};

export default AboutPage;
