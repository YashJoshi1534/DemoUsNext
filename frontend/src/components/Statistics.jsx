import { useState, useEffect, useRef } from 'react';
import './Statistics.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Counter = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <div className="stat-item" ref={ref}>
      <h3 className="stat-number">{count}+</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const Statistics = () => {
  useScrollReveal();

  return (
    <section className="section bg-light statistics-section">
      <div className="container">
        <div className="stats-grid reveal">
          <Counter end={400} duration={2000} label="Placements" />
          <Counter end={350} duration={2000} label="Staffing" />
          <Counter end={30} duration={1500} label="Projects" />
          <Counter end={280} duration={2000} label="Bootcamp" />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
