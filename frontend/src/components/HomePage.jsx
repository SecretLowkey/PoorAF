import React, { useState } from 'react';
import { mockData } from '../mock';
import Header from './Header';
import Hero from './Hero';
import Story from './Story';
import Tokenomics from './Tokenomics';
import HowToBuy from './HowToBuy';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <Header />
      <Hero />
      <Story />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </div>
  );
};

export default HomePage;