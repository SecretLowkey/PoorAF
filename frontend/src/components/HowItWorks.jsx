import React from 'react';
import { ArrowRight, Users, TrendingUp, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Get Rugged", 
      description: "Original devs abandoned ship. Community left holding empty bags.",
      icon: Users,
      color: "#8B4513"
    },
    {
      number: "02", 
      title: "Rebuild",
      description: "Community takes over. No more dev wallet abuse or VC manipulation.",
      icon: TrendingUp,
      color: "var(--slate-blue)"
    },
    {
      number: "03",
      title: "Moon",
      description: "Pure community power drives growth. From poor AF to rich AF.",
      icon: Rocket,
      color: "var(--warm-gold)"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold cartoon-font text-dark-brown mb-8">
            How <span className="text-warm-gold">$POOR</span> Works
          </h2>
          <p className="text-xl text-slate-blue body-font max-w-3xl mx-auto">
            Born from chaos, rebuilt by community. We're powered by memes and community loyalty — not empty promises.
          </p>
        </div>

        {/* Desktop Flow - Horizontal */}
        <div className="hidden lg:flex items-center justify-center gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center max-w-xs">
                  {/* Step Number Badge */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white font-bold text-2xl cartoon-font shadow-lg" style={{ backgroundColor: step.color }}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: step.color + '20', border: `2px solid ${step.color}30` }}>
                    <Icon className="w-10 h-10" style={{ color: step.color }} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold cartoon-font text-dark-brown mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-dark-brown/80 body-font text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-warm-gold mx-4" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Flow - Vertical */}
        <div className="lg:hidden space-y-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="card text-center">
                {/* Step Number Badge */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white font-bold text-2xl cartoon-font shadow-lg mx-auto" style={{ backgroundColor: step.color }}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto" style={{ backgroundColor: step.color + '20', border: `2px solid ${step.color}30` }}>
                  <Icon className="w-10 h-10" style={{ color: step.color }} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold cartoon-font text-dark-brown mb-4">
                  {step.title}
                </h3>
                <p className="text-dark-brown/80 body-font leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="card max-w-4xl mx-auto text-center bg-gradient-to-br from-light-beige to-white">
          <h3 className="text-3xl font-bold cartoon-font text-dark-brown mb-6">
            🔥 The Community Revolution
          </h3>
          <p className="text-xl text-dark-brown body-font leading-relaxed mb-8">
            No dev wallet abuse, no VC allocations. Built and maintained by the community, for the community. 
            This is how memecoins should work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn-primary text-lg px-10 py-4"
              onClick={() => window.open('https://jup.ag', '_blank')}
            >
              <Rocket size={20} />
              Join the Revolution
            </button>
            <button 
              className="btn-secondary text-lg px-10 py-4"
              onClick={() => window.open('https://dexscreener.com', '_blank')}
            >
              <TrendingUp size={20} />
              View Chart
            </button>
          </div>
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
        .btn-secondary {
          background: transparent;
          color: var(--slate-blue);
          border: 2px solid var(--slate-blue);
          padding: 12px 30px;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-secondary:hover {
          background-color: var(--slate-blue);
          color: var(--white);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .card { padding: 24px; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;