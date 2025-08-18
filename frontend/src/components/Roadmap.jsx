import React from 'react';
import { Rocket, Users, TrendingUp, Globe, Star, Zap } from 'lucide-react';

const Roadmap = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "The Awakening",
      icon: Rocket,
      status: "current",
      items: [
        "Website Launch",
        "Community Building", 
        "Token Launch on Solana",
        "Initial Marketing Push",
        "Social Media Presence"
      ]
    },
    {
      phase: "Phase 2", 
      title: "The Growth",
      icon: Users,
      status: "upcoming",
      items: [
        "1000+ Holders Milestone",
        "Influencer Partnerships",
        "Community Events",
        "Meme Competitions",
        "First Exchange Listings"
      ]
    },
    {
      phase: "Phase 3",
      title: "The Revolution",
      icon: TrendingUp,
      status: "future",
      items: [
        "Major Exchange Listings",
        "10,000+ Holders",
        "Merchandise Launch",
        "NFT Collection",
        "Charity Initiatives"
      ]
    },
    {
      phase: "Phase 4",
      title: "The Legacy", 
      icon: Globe,
      status: "future",
      items: [
        "Global Recognition",
        "100,000+ Holders",
        "PoorAF Foundation",
        "Educational Programs",
        "Mainstream Adoption"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'current': return 'var(--warm-gold)';
      case 'upcoming': return 'var(--slate-blue)';
      default: return 'var(--dark-brown)';
    }
  };

  const getStatusBg = (status) => {
    switch(status) {
      case 'current': return 'rgba(242, 201, 76, 0.1)';
      case 'upcoming': return 'rgba(58, 107, 123, 0.1)';
      default: return 'rgba(90, 62, 54, 0.1)';
    }
  };

  return (
    <section id="roadmap" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold cartoon-font text-dark-brown mb-8">
            <span className="text-warm-gold">Roadmap</span> to Riches
          </h2>
          <p className="text-xl text-slate-blue body-font max-w-3xl mx-auto">
            Our journey from poor AF to financially free. Every milestone brings us closer to changing lives.
          </p>
        </div>

        {/* Desktop Roadmap - Horizontal */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-warm-gold/30 z-0"></div>
            
            {roadmapPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="relative z-10">
                  <div className="card text-center hover:scale-105 transition-transform duration-300" style={{ backgroundColor: getStatusBg(phase.status) }}>
                    {/* Phase Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: getStatusColor(phase.status) }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Phase Info */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold body-font mb-2" style={{ color: getStatusColor(phase.status) }}>
                        {phase.phase}
                      </div>
                      <h3 className="text-xl font-bold cartoon-font text-dark-brown mb-4">
                        {phase.title}
                      </h3>
                    </div>

                    {/* Phase Items */}
                    <div className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2 text-sm text-dark-brown/80 body-font">
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: getStatusColor(phase.status) }}></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Roadmap - Vertical */}
        <div className="lg:hidden space-y-8">
          {roadmapPhases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < roadmapPhases.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-warm-gold/30 z-0"></div>
                )}
                
                <div className="card" style={{ backgroundColor: getStatusBg(phase.status) }}>
                  <div className="flex items-start gap-6">
                    {/* Phase Icon */}
                    <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0" style={{ backgroundColor: getStatusColor(phase.status) }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      {/* Phase Info */}
                      <div className="mb-4">
                        <div className="text-sm font-semibold body-font mb-1" style={{ color: getStatusColor(phase.status) }}>
                          {phase.phase}
                        </div>
                        <h3 className="text-2xl font-bold cartoon-font text-dark-brown">
                          {phase.title}
                        </h3>
                      </div>

                      {/* Phase Items */}
                      <div className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3 text-dark-brown/80 body-font">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: getStatusColor(phase.status) }}></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="card mt-16 text-center max-w-2xl mx-auto bg-gradient-to-br from-light-beige to-white">
          <Star className="w-16 h-16 text-warm-gold mx-auto mb-6" />
          <h3 className="text-3xl font-bold cartoon-font text-dark-brown mb-6">
            Join the Journey
          </h3>
          <p className="text-lg text-dark-brown/80 body-font mb-8">
            Every great journey starts with a single step. Take yours today and be part of the $PoorAF revolution.
          </p>
          <button 
            className="btn-primary text-lg px-10 py-4"
            onClick={() => window.open('https://jup.ag', '_blank')}
          >
            <Zap size={20} />
            Start Your Journey
          </button>
        </div>
      </div>

      <style jsx>{`
        .section { padding: 80px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .card {
          background: var(--white);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 8px 30px var(--shadow-light);
          border: 1px solid rgba(242, 201, 76, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .text-dark-brown { color: var(--dark-brown); }
        .text-slate-blue { color: var(--slate-blue); }
        .text-warm-gold { color: var(--warm-gold); }
        .bg-light-beige { background-color: var(--light-beige); }
        .bg-warm-gold { background-color: var(--warm-gold); }
        .cartoon-font { font-family: 'Comic Neue', cursive; font-weight: 700; }
        .body-font { font-family: 'Inter', sans-serif; }
        .btn-primary {
          background: linear-gradient(135deg, var(--slate-blue), #4a7c8a);
          color: var(--white);
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 15px var(--shadow-light);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px var(--shadow-medium);
        }
        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .card { padding: 24px; }
        }
      `}</style>
    </section>
  );
};

export default Roadmap;