import React from 'react';
import { Heart, Shield, Zap, Users, TrendingUp, Target } from 'lucide-react';
import { mockData } from '../mock';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Community Driven",
      description: "Built by the community, for the community. No VCs, no corporate BS - just pure people power."
    },
    {
      icon: Shield,
      title: "Community Owned",
      description: "Liquidity locked forever, ownership renounced. We've been rugged before, never again!"
    },
    {
      icon: Zap,
      title: "Meme Power",
      description: "Powered by pure meme energy and the collective will to stop being poor AF."
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold cartoon-font text-dark-brown mb-8">
            About <span className="text-warm-gold">$POOR</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-dark-brown/90 body-font leading-relaxed">
              {mockData.story}
            </p>
            <p className="text-lg text-slate-blue body-font leading-relaxed">
              This isn't just another memecoin - it's a movement. A rallying cry for everyone who's been left behind, 
              rugged, or forgotten. We're taking our financial destiny into our own hands, one meme at a time.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-3 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={index}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="icon-container mx-auto">
                  <Icon className="w-8 h-8 text-dark-brown" />
                </div>
                <h3 className="text-2xl font-bold cartoon-font text-dark-brown mb-4">
                  {feature.title}
                </h3>
                <p className="text-dark-brown/80 body-font leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="card max-w-4xl mx-auto text-center bg-gradient-to-br from-light-beige to-white">
          <div className="mb-6">
            <Target className="w-16 h-16 text-warm-gold mx-auto mb-4" />
            <h3 className="text-3xl font-bold cartoon-font text-dark-brown mb-6">
              Our Mission
            </h3>
          </div>
          <p className="text-xl text-dark-brown body-font leading-relaxed mb-6">
            To prove that even the poorest, most rugged individuals can band together 
            and create something extraordinary. We're not just building a token - we're building hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={mockData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Users size={20} />
              Join Our Community
            </a>
            <a
              href={mockData.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <TrendingUp size={20} />
              Start Your Journey
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section { padding: 80px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .grid { display: grid; gap: 32px; }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
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
          margin-bottom: 16px;
          box-shadow: 0 4px 15px rgba(242, 201, 76, 0.3);
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
          text-decoration: none;
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
          text-decoration: none;
        }
        .btn-secondary:hover {
          background-color: var(--slate-blue);
          color: var(--white);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .container { padding: 0 16px; }
          .grid { gap: 24px; }
          .card { padding: 24px; }
        }
      `}</style>
    </section>
  );
};

export default About;