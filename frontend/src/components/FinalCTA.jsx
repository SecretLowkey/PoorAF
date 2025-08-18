import React from 'react';
import { Zap, TrendingUp, Timer, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="section bg-gradient-to-br from-dark-brown to-slate-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-warm-gold rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-warm-gold rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-warm-gold rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-warm-gold rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Main Headline */}
          <div className="mb-12">
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold cartoon-font mb-6">
              <span className="text-warm-gold">Buy $PoorAF</span>
              <div className="text-white">now or cry later.</div>
            </div>
            <p className="text-2xl md:text-3xl text-light-beige/90 body-font">
              Don't miss the comeback story of the year.
            </p>
          </div>

          {/* Urgency Message */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-12 border border-warm-gold/30">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Timer className="w-8 h-8 text-warm-gold animate-pulse" />
              <h3 className="text-3xl font-bold cartoon-font text-warm-gold">
                The Revolution is Starting
              </h3>
              <Timer className="w-8 h-8 text-warm-gold animate-pulse" />
            </div>
            <p className="text-xl text-light-beige body-font leading-relaxed mb-8">
              Join the community that rebuilt from nothing. Every day you wait is another day you stay poor AF. 
              The chads who left us for dead are watching us rise — don't let them be right about you.
            </p>
            
            {/* Key points */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-warm-gold/20 rounded-2xl p-6 border border-warm-gold/30">
                <Sparkles className="w-8 h-8 text-warm-gold mx-auto mb-3" />
                <div className="text-2xl font-bold cartoon-font text-warm-gold mb-2">1B Tokens</div>
                <div className="text-light-beige/80 body-font">Community Owned</div>
              </div>
              <div className="bg-slate-blue/30 rounded-2xl p-6 border border-slate-blue/50">
                <Zap className="w-8 h-8 text-light-beige mx-auto mb-3" />
                <div className="text-2xl font-bold cartoon-font text-light-beige mb-2">0% Tax</div>
                <div className="text-light-beige/80 body-font">No Hidden Fees</div>
              </div>
              <div className="bg-green-500/20 rounded-2xl p-6 border border-green-500/30">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold cartoon-font text-green-400 mb-2">∞ Potential</div>
                <div className="text-light-beige/80 body-font">Sky's the Limit</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                className="bg-gradient-to-r from-warm-gold to-yellow-400 hover:from-yellow-400 hover:to-warm-gold text-dark-brown font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl cartoon-font flex items-center gap-3"
                onClick={() => window.open('https://jup.ag', '_blank')}
              >
                <Zap size={24} />
                BUY $PoorAF NOW
              </button>
              <button 
                className="bg-transparent border-3 border-light-beige text-light-beige hover:bg-light-beige hover:text-dark-brown font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 body-font flex items-center gap-3"
                onClick={() => window.open('https://dexscreener.com', '_blank')}
              >
                <TrendingUp size={24} />
                View Chart
              </button>
            </div>
            
            {/* Social proof */}
            <div className="text-center">
              <p className="text-light-beige/70 body-font mb-4">
                Join thousands who chose to stop being poor AF
              </p>
              <div className="flex justify-center gap-8 text-sm body-font text-light-beige/60">
                <span>✓ Community Verified</span>
                <span>✓ Liquidity Locked</span>
                <span>✓ Ownership Renounced</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section { padding: 100px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .bg-dark-brown { background-color: var(--dark-brown); }
        .bg-slate-blue { background-color: var(--slate-blue); }
        .text-warm-gold { color: var(--warm-gold); }
        .text-light-beige { color: var(--light-beige); }
        .text-dark-brown { color: var(--dark-brown); }
        .bg-warm-gold { background-color: var(--warm-gold); }
        .border-warm-gold { border-color: var(--warm-gold); }
        .border-slate-blue { border-color: var(--slate-blue); }
        .border-light-beige { border-color: var(--light-beige); }
        .cartoon-font { font-family: 'Comic Neue', cursive; font-weight: 700; }
        .body-font { font-family: 'Inter', sans-serif; }
        .border-3 { border-width: 3px; }
        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .section { padding: 80px 0; }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;