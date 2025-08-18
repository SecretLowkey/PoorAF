import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Copy, ExternalLink, TrendingUp } from 'lucide-react';
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
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  $PoorAF
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-amber-800 font-semibold">
                The Chad's Revenge Token
              </p>
              <p className="text-lg text-amber-700 max-w-2xl">
                From rags to riches, from rugged to rich. We're done being poor AF!
              </p>
            </div>

            {/* Token Info Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-amber-900">{mockData.token.totalSupply}</div>
                <div className="text-amber-700 font-medium">Total Supply</div>
              </div>
              <div className="text-sm text-amber-700 mb-2">Contract Address</div>
              <div className="flex items-center gap-3">
                <code className="flex-1 text-amber-900 font-mono text-sm bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
                  {mockData.token.contractAddress}
                </code>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300"
                >
                  {copied ? "Copied!" : <Copy size={16} />}
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('how-to-buy').scrollIntoView({ behavior: 'smooth' })}
              >
                Buy $PoorAF Now
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 hover:border-amber-600 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://jup.ag', '_blank')}
              >
                <ExternalLink size={20} className="mr-2" />
                Trade on Jupiter
              </Button>
            </div>
          </div>

          {/* Right Content - Mascot Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-500/30 rounded-full blur-3xl opacity-60 animate-pulse group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border-2 border-amber-200 shadow-2xl backdrop-blur-sm group-hover:border-amber-300 transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src="https://customer-assets.emergentagent.com/job_59614b16-86d5-460e-8ff4-4a5ed31657b7/artifacts/tn19485q_image.png"
                  alt="PoorAF Mascot - The Chad's Revenge"
                  className="w-80 h-80 object-contain rounded-2xl transition-all duration-300 filter drop-shadow-lg group-hover:drop-shadow-xl"
                  style={{
                    imageRendering: 'smooth',
                    WebkitFontSmoothing: 'antialiased',
                  }}
                />
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full animate-bounce delay-100 opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;