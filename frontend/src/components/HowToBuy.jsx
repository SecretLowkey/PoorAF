import React, { useState } from 'react';
import { mockData } from '../mock';
import { Button } from './ui/button';
import { Wallet, DollarSign, ArrowRightLeft, Coins, ExternalLink, CheckCircle } from 'lucide-react';

const HowToBuy = () => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStep = (stepNumber) => {
    if (completedSteps.includes(stepNumber)) {
      setCompletedSteps(completedSteps.filter(step => step !== stepNumber));
    } else {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
  };

  const stepIcons = [Wallet, DollarSign, ArrowRightLeft, Coins];

  return (
    <section id="how-to-buy" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            How to Buy $PoorAF
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Stop being poor! Follow these simple steps to join the revolution.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mockData.howToBuy.map((step, index) => {
            const Icon = stepIcons[index];
            const isCompleted = completedSteps.includes(step.step);
            
            return (
              <div 
                key={step.step}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isCompleted ? 'transform scale-105' : 'hover:transform hover:scale-105'
                }`}
                onClick={() => toggleStep(step.step)}
              >
                <div className={`bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 transition-all duration-300 ${
                  isCompleted 
                    ? 'border-green-400 bg-gradient-to-br from-green-50 to-green-100' 
                    : 'border-amber-200 hover:border-amber-300'
                }`}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-green-500' 
                      : 'bg-gradient-to-r from-amber-500 to-orange-500'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle size={16} />
                    ) : (
                      step.step
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-green-500' 
                      : 'bg-gradient-to-r from-amber-400 to-orange-500 group-hover:scale-110'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-amber-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (except for last item) */}
                {index < mockData.howToBuy.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-300 transform -translate-y-1/2 z-10">
                    <div className="absolute top-1/2 right-0 w-0 h-0 border-l-4 border-l-amber-300 border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Ready to Stop Being Poor?
            </h3>
            <p className="text-xl text-amber-800">
              Get your wallets ready and join the $PoorAF revolution!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://jup.ag', '_blank')}
            >
              <ExternalLink size={20} className="mr-2" />
              Buy on Jupiter
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300"
              onClick={() => window.open('https://raydium.io', '_blank')}
            >
              <ExternalLink size={20} className="mr-2" />
              Trade on Raydium
            </Button>

            <Button 
              variant="outline"
              className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300"
              onClick={() => window.open('https://phantom.app', '_blank')}
            >
              <Wallet size={20} className="mr-2" />
              Get Phantom Wallet
            </Button>
          </div>

          {/* Progress indicator */}
          {completedSteps.length > 0 && (
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <CheckCircle size={16} />
                <span>Progress: {completedSteps.length}/4 steps completed!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;