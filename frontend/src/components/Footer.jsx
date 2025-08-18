import React from 'react';
import { Twitter, MessageCircle, Heart, ArrowUp, Mail, Globe } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-brown text-white relative">
      {/* Main Footer */}
      <div className="container section-sm">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-warm-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-dark-brown font-bold text-xl cartoon-font">$</span>
              </div>
              <span className="text-3xl font-bold cartoon-font">PoorAF</span>
            </div>
            <p className="text-light-beige/90 text-lg body-font mb-6 max-w-md leading-relaxed">
              From bum to millionaire, fortune in a meme. Join the revolution and stop being poor AF!
            </p>
            <div className="flex space-x-4">
              <a
                href={mockData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-blue/20 hover:bg-slate-blue text-light-beige hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href={mockData.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-blue/20 hover:bg-slate-blue text-light-beige hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold cartoon-font mb-6 text-warm-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-light-beige/90 hover:text-warm-gold transition-colors duration-300 body-font"
                >
                  About $PoorAF
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('tokenomics').scrollIntoView({ behavior: 'smooth' })}
                  className="text-light-beige/90 hover:text-warm-gold transition-colors duration-300 body-font"
                >
                  Tokenomics
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })}
                  className="text-light-beige/90 hover:text-warm-gold transition-colors duration-300 body-font"
                >
                  Roadmap
                </button>
              </li>
              <li>
                <a
                  href="https://jup.ag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-beige/90 hover:text-warm-gold transition-colors duration-300 body-font"
                >
                  Buy $PoorAF
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-bold cartoon-font mb-6 text-warm-gold">Community</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={mockData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-beige/90 hover:text-warm-gold transition-colors duration-300 body-font flex items-center gap-2"
                >
                  <Twitter size={16} />
                  Follow on X
                </a>
              </li>
              <li>
                <a
                  href={mockData.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-beige/90 hover:text-warm-gold transition-colors duration-300 body-font flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  Join Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://dexscreener.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-beige/90 hover:text-warm-gold transition-colors duration-300 body-font flex items-center gap-2"
                >
                  <Globe size={16} />
                  View Chart
                </a>
              </li>
              <li>
                <a
                  href="mailto:community@pooraf.meme"
                  className="text-light-beige/90 hover:text-warm-gold transition-colors duration-300 body-font flex items-center gap-2"
                >
                  <Mail size={16} />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Token Info */}
        <div className="border-t border-slate-blue/30 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="card-dark">
              <div className="text-2xl font-bold cartoon-font text-warm-gold mb-2">
                {mockData.token.totalSupply}
              </div>
              <div className="text-light-beige/70 body-font">Total Supply</div>
            </div>
            <div className="card-dark">
              <div className="text-2xl font-bold cartoon-font text-warm-gold mb-2">
                Launching Soon
              </div>
              <div className="text-light-beige/70 body-font">Join the Revolution!</div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-blue/30 pt-8 mb-8">
          <div className="bg-slate-blue/10 rounded-2xl p-6 border border-slate-blue/20">
            <h4 className="text-lg font-bold cartoon-font text-warm-gold mb-3">⚠️ Important Disclaimer</h4>
            <p className="text-sm text-light-beige/80 body-font leading-relaxed">
              $PoorAF is a meme token created for entertainment purposes. Cryptocurrency investments are highly risky and volatile. 
              Only invest what you can afford to lose. This is not financial advice. Always do your own research (DYOR) before investing.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-blue/30 bg-dark-brown/80">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-light-beige/70 text-sm body-font mb-4 md:mb-0">
              © {currentYear} $PoorAF. Built by the community, for the community.
            </div>
            <div className="flex items-center gap-2 text-light-beige/70 text-sm body-font">
              <span>Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>by poor chads worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-warm-gold to-yellow-400 hover:from-yellow-400 hover:to-warm-gold text-dark-brown p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      >
        <ArrowUp size={24} />
      </button>

      <style jsx>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .section-sm { padding: 60px 0; }
        .grid { display: grid; gap: 32px; }
        .bg-dark-brown { background-color: var(--dark-brown); }
        .text-warm-gold { color: var(--warm-gold); }
        .text-light-beige { color: var(--light-beige); }
        .bg-slate-blue { background-color: var(--slate-blue); }
        .border-slate-blue { border-color: var(--slate-blue); }
        .cartoon-font { font-family: 'Comic Neue', cursive; font-weight: 700; }
        .body-font { font-family: 'Inter', sans-serif; }
        .card-dark {
          background: rgba(58, 107, 123, 0.1);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(58, 107, 123, 0.2);
        }
        .hover\\:text-warm-gold:hover { color: var(--warm-gold); }
        .hover\\:bg-slate-blue:hover { background-color: var(--slate-blue); }
        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .grid { gap: 24px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;