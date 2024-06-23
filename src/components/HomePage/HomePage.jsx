// HomePage.js
import React from 'react';
import Hero from '../Hero/Hero';
import Programs from '../Programs/Programs';
import Reasons from '../Reasons/Reasons';
import Plans from '../Plans/Plans';
import Testimonials from '../Testimonials/Testimonials';
import Join from '../Join/Join';
import Footer from '../Footer/Footer';

const HomePage = ({ plansList }) => {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans plansList={plansList} />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default HomePage;