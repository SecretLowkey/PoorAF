import React from 'react';
import { mockData } from '../mock';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default HomePage;