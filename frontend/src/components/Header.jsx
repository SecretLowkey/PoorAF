import React, { useState } from 'react';
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
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-warm-gold/20">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-warm-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-dark-brown font-bold text-xl cartoon-font">$</span>
            </div>
            <span className="text-3xl font-bold cartoon-font text-dark-brown">PoorAF</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-dark-brown hover:text-slate-blue transition-colors font-medium body-font"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="text-dark-brown hover:text-slate-blue transition-colors font-medium body-font"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="text-dark-brown hover:text-slate-blue transition-colors font-medium body-font"
            >
              Roadmap
            </button>
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={mockData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-blue hover:text-dark-brown transition-colors p-2"
            >
              <Twitter size={20} />
            </a>
            <a
              href={mockData.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-blue hover:text-dark-brown transition-colors p-2"
            >
              <MessageCircle size={20} />
            </a>
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('buy-now')}
            >
              Buy Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-brown p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-warm-gold/20 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-dark-brown hover:bg-light-beige transition-colors body-font"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="block w-full text-left px-4 py-3 text-dark-brown hover:bg-light-beige transition-colors body-font"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="block w-full text-left px-4 py-3 text-dark-brown hover:bg-light-beige transition-colors body-font"
            >
              Roadmap
            </button>
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-warm-gold/20">
              <a
                href={mockData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-blue hover:text-dark-brown transition-colors p-2"
              >
                <Twitter size={20} />
              </a>
              <a
                href={mockData.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-blue hover:text-dark-brown transition-colors p-2"
              >
                <MessageCircle size={20} />
              </a>
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('buy-now')}
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .bg-warm-gold { background-color: var(--warm-gold); }
        .text-dark-brown { color: var(--dark-brown); }
        .text-slate-blue { color: var(--slate-blue); }
        .border-warm-gold { border-color: var(--warm-gold); }
        .bg-light-beige { background-color: var(--light-beige); }
        .hover\\:bg-light-beige:hover { background-color: var(--light-beige); }
        .hover\\:text-slate-blue:hover { color: var(--slate-blue); }
        .hover\\:text-dark-brown:hover { color: var(--dark-brown); }
      `}</style>
    </header>
  );
};

export default Header;