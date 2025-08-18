import React from 'react';
import { PieChart, Lock, Megaphone, Users, Crown, CheckCircle } from 'lucide-react';
import { mockData } from '../mock';

const Tokenomics = () => {
  const tokenomicsData = [
    {
      label: 'Liquidity Pool',
      percentage: '90%',
      color: 'var(--slate-blue)',
      icon: Lock,
      description: 'Locked forever - no rug pulls possible'
    },
    {
      label: 'Marketing',
      percentage: '5%',
      color: 'var(--warm-gold)',
      icon: Megaphone,
      description: 'Spread the word, grow the movement'
    },
    {
      label: 'Team',
      percentage: '3%',
      color: '#8B4513',
      icon: Crown,
      description: 'Core development team'
    },
    {
      label: 'Community',
      percentage: '2%',
      color: '#CD853F',
      icon: Users,
      description: 'Airdrops and community rewards'
    }
  ];

  const securityFeatures = [
    'Liquidity Locked Forever',
    'Ownership Renounced',
    'No Hidden Functions',
    'Community Controlled',
    'Fair Launch',
    'No Presale Scams'
  ];

  return (
    <section id="tokenomics" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold cartoon-font text-dark-brown mb-8">
            <span className="text-warm-gold">Tokenomics</span> & Distribution
          </h2>
          <p className="text-xl text-slate-blue body-font max-w-3xl mx-auto">
            Fair, transparent, and anti-rug. We've learned from every scam and built the safest tokenomics possible.
          </p>
        </div>

        <div className="grid grid-2 gap-12 items-start mb-16">
          {/* Left Side - Distribution Cards */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-container">
                  <PieChart className="w-8 h-8 text-dark-brown" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold cartoon-font text-dark-brown">Total Supply</h3>
                  <p className="text-slate-blue body-font">1,000,000,000 $PoorAF</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {tokenomicsData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 bg-light-beige rounded-xl border border-warm-gold/20">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color }}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-dark-brown body-font">{item.label}</div>
                          <div className="text-sm text-dark-brown/70 body-font">{item.description}</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold cartoon-font text-dark-brown">
                        {item.percentage}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Security Features */}
            <div className="card">
              <h3 className="text-2xl font-bold cartoon-font text-dark-brown mb-6">
                🛡️ Security Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-dark-brown body-font">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Visual Chart */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-light-beige to-white flex items-center justify-center shadow-2xl border-4 border-warm-gold/30">
                <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-4xl cartoon-font font-bold text-dark-brown mb-2">$PoorAF</div>
                    <div className="text-slate-blue body-font">1B Supply</div>
                  </div>
                </div>
              </div>
              
              {/* Floating percentage badges */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="bg-slate-blue text-white px-4 py-2 rounded-full text-sm font-semibold cartoon-font shadow-lg">
                  LP: 90%
                </div>
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                <div className="bg-warm-gold text-dark-brown px-4 py-2 rounded-full text-sm font-semibold cartoon-font shadow-lg">
                  Marketing: 5%
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                <div className="text-dark-brown px-4 py-2 rounded-full text-sm font-semibold cartoon-font shadow-lg" style={{ backgroundColor: '#8B4513', color: 'white' }}>
                  Team: 3%
                </div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
                <div className="text-dark-brown px-4 py-2 rounded-full text-sm font-semibold cartoon-font shadow-lg" style={{ backgroundColor: '#CD853F', color: 'white' }}>
                  Community: 2%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section { padding: 80px 0; background-color: var(--light-beige); }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .grid { display: grid; gap: 32px; }
        .grid-2 { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
        .card {
          background: var(--white);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 8px 30px var(--shadow-light);
          border: 1px solid rgba(242, 201, 76, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .icon-container {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, var(--warm-gold), #f5d76e);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(242, 201, 76, 0.3);
        }
        .text-dark-brown { color: var(--dark-brown); }
        .text-slate-blue { color: var(--slate-blue); }
        .text-warm-gold { color: var(--warm-gold); }
        .bg-light-beige { background-color: var(--light-beige); }
        .border-warm-gold { border-color: var(--warm-gold); }
        .cartoon-font { font-family: 'Comic Neue', cursive; font-weight: 700; }
        .body-font { font-family: 'Inter', sans-serif; }
        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .grid-2 { grid-template-columns: 1fr; }
          .card { padding: 24px; }
        }
      `}</style>
    </section>
  );
};

export default Tokenomics;