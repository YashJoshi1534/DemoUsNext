import { useState, useEffect } from 'react';
import './Testimonials.css';
import { Quote, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Testimonials = () => {
  useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Software Engineer at Google",
      text: "US Next Tech helped me polish my technical interviewing skills to the point where my FAANG interviews felt like a breeze. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer",
      text: "Their placement capability is unmatched. I landed 3 offers within a month of completing their profile building and mock interview sessions.",
      rating: 5
    },
    {
      name: "Amanda Rivera",
      role: "Data Scientist",
      text: "The bootcamp training gave me the exact stack modern employers are looking for. The mentors are top notch industry professionals.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section bg-light testimonials-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">Hear from professionals who accelerated their careers with us.</p>
        </div>

        <div className="testimonials-slider reveal reveal-stagger-2">
          {testimonials.map((t, index) => {
            let position = "next";
            if (index === activeIndex) position = "active";
            if (index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1)) position = "prev";
            
            return (
              <div className={`testimonial-card glass ${position}`} key={index}>
                <Quote className="quote-icon" size={48} />
                <div className="stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#ffbd2e" color="#ffbd2e" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name.charAt(0)}</div>
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
          
          <div className="slider-dots">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                className={`dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
