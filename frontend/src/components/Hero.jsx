import React, { useState } from 'react';
import { Copy, Sparkles } from 'lucide-react';
import { mockData } from '../mock';
import { useToast } from '../hooks/use-toast';

const Hero = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mockData.token.contractAddress);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section pt-32 pb-20">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Mascot Image - Centered */}
          <div className="mb-12 flex justify-center">
            <div className="relative inline-block">
              {/* Golden glow effect */}
              <div className="absolute inset-0 bg-warm-gold/30 rounded-full blur-2xl animate-glow"></div>
              
              {/* Image container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-warm-gold/30 animate-float">
                <img 
                  src="https://customer-assets.emergentagent.com/job_59614b16-86d5-460e-8ff4-4a5ed31657b7/artifacts/tn19485q_image.png"
                  alt="PoorAF Mascot - From Bum to Millionaire"
                  className="w-80 h-80 object-contain rounded-2xl"
                  style={{
                    imageRendering: 'smooth',
                    WebkitFontSmoothing: 'antialiased',
                  }}
                />
                
                {/* Floating sparkles */}
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-8 h-8 text-warm-gold animate-pulse" />
                </div>
                <div className="absolute -bottom-3 -left-3">
                  <Sparkles className="w-6 h-6 text-warm-gold animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Title and Slogan */}
          <div className="mb-12 space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold cartoon-font text-dark-brown mb-6">
              <span className="text-warm-gold">$</span>PoorAF
            </h1>
            <p className="text-2xl md:text-3xl text-slate-blue font-medium cartoon-font mb-6">
              From bum to millionaire, fortune in a meme
            </p>
            <p className="text-lg text-dark-brown/80 body-font max-w-2xl mx-auto leading-relaxed">
              The ultimate underdog story in memecoin form. We've been rugged, we've been poor, but we're fighting back with humor and hope.
            </p>
          </div>

          {/* Token Info Card */}
          <div className="card mb-12 max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold cartoon-font text-dark-brown mb-2">
                {mockData.token.totalSupply}
              </div>
              <div className="text-slate-blue font-medium body-font">Total Supply</div>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm text-dark-brown/70 body-font">Contract Address</div>
              <div className="flex items-center gap-3 p-3 bg-light-beige rounded-xl border border-warm-gold/20">
                <code className="flex-1 text-dark-brown font-mono text-sm">
                  {mockData.token.contractAddress}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="p-2 text-slate-blue hover:text-dark-brown transition-colors rounded-lg hover:bg-white"
                >
                  {copied ? "✓" : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div id="buy-now" className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="btn-primary text-lg px-10 py-4"
              onClick={() => window.open('https://jup.ag', '_blank')}
            >
              <Sparkles size={20} />
              Buy $PoorAF Now
            </button>
            <button 
              className="btn-secondary text-lg px-10 py-4"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
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
        .bg-light-beige { background-color: var(--light-beige); }
        .text-dark-brown { color: var(--dark-brown); }
        .text-slate-blue { color: var(--slate-blue); }
        .text-warm-gold { color: var(--warm-gold); }
        .border-warm-gold { border-color: var(--warm-gold); }
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
        .animate-float {
          animation: gentle-float 4s ease-in-out infinite;
        }
        .animate-glow {
          animation: golden-glow 3s ease-in-out infinite;
        }
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes golden-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(242, 201, 76, 0.3); }
          50% { box-shadow: 0 0 30px rgba(242, 201, 76, 0.5); }
        }
      `}</style>
    </section>
  );
};

export default Hero;