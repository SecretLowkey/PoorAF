import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Twitter, MessageCircle } from 'lucide-react';
import { mockData } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">$</span>
            </div>
            <span className="text-2xl font-bold text-amber-900">PoorAF</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('story')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              Story
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('how-to-buy')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              How to Buy
            </button>
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={mockData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-800 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href={mockData.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-800 transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <Button 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('how-to-buy')}
            >
              Buy Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-200 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('story')}
              className="block w-full text-left px-4 py-2 text-amber-800 hover:bg-amber-50 transition-colors"
            >
              Story
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="block w-full text-left px-4 py-2 text-amber-800 hover:bg-amber-50 transition-colors"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('how-to-buy')}
              className="block w-full text-left px-4 py-2 text-amber-800 hover:bg-amber-50 transition-colors"
            >
              How to Buy
            </button>
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-amber-200">
              <a
                href={mockData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-800 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href={mockData.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-800 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <Button 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-2 rounded-full"
                onClick={() => scrollToSection('how-to-buy')}
              >
                Buy Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;