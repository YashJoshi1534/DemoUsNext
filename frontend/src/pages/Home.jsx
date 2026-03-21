import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Roadmap from '../components/Roadmap';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Mission from '../components/Mission';
import Statistics from '../components/Statistics';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="page-content">
      <Hero />
      <Partners />
      <Services />
      <Mission />
      <Roadmap />
      <Testimonials />
      <Statistics />
      <Contact />
    </div>
  );
};

export default Home;
