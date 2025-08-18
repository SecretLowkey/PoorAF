import React from 'react';
import { mockData } from '../mock';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import HowItWorks from './HowItWorks';
import Tokenomics from './Tokenomics';
import Testimonials from './Testimonials';
import Roadmap from './Roadmap';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Tokenomics />
      <Testimonials />
      <Roadmap />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default HomePage;