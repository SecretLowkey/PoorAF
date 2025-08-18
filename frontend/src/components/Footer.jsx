import React from 'react';
import { Twitter, MessageCircle, ExternalLink, Heart, TrendingUp } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">$</span>
              </div>
              <span className="text-3xl font-bold">PoorAF</span>
            </div>
            <p className="text-amber-100 text-lg mb-6 max-w-md">
              The people's token. From rugs to riches, we're building something real together.
            </p>
            <div className="flex space-x-4">
              <a
                href={mockData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href={mockData.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-100 hover:text-white transition-colors duration-300"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('tokenomics').scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-100 hover:text-white transition-colors duration-300"
                >
                  Tokenomics
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('how-to-buy').scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-100 hover:text-white transition-colors duration-300"
                >
                  How to Buy
                </button>
              </li>
            </ul>
          </div>

          {/* Trading Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Trade $PoorAF</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://jup.ag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Jupiter
                </a>
              </li>
              <li>
                <a
                  href="https://raydium.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Raydium
                </a>
              </li>
              <li>
                <a
                  href="https://dexscreener.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <TrendingUp size={16} />
                  Chart
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Token Stats */}
        <div className="border-t border-amber-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-amber-200">{mockData.token.totalSupply}</div>
              <div className="text-amber-300 text-sm">Total Supply</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-200">Launching Soon</div>
              <div className="text-amber-300 text-sm">Get Ready!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800 bg-amber-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-300 text-sm mb-4 md:mb-0">
              © 2024 $PoorAF. Built by the community, for the community.
            </div>
            <div className="flex items-center gap-2 text-amber-300 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>by poor chads</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      >
        <TrendingUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;