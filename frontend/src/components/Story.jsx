import React from 'react';
import { mockData } from '../mock';
import { Zap, Shield, Heart } from 'lucide-react';

const Story = () => {
  return (
    <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-amber-800 leading-relaxed mb-8 font-medium">
              {mockData.story}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {mockData.features.map((feature, index) => {
            const icons = [Heart, Shield, Zap];
            const Icon = icons[index];
            
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-amber-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Join the Revolution
            </h3>
            <p className="text-xl text-amber-800 mb-6">
              No more getting rugged. It's time to fight back and get rich together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={mockData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Follow on X
              </a>
              <a
                href={mockData.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Join Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;