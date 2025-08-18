import React from 'react';
import { mockData } from '../mock';
import { PieChart, Lock, Users, Megaphone, Crown } from 'lucide-react';

const Tokenomics = () => {
  const tokenomicsData = [
    {
      label: 'Liquidity Pool',
      percentage: mockData.tokenomics.liquidityPool,
      color: 'from-blue-400 to-blue-600',
      icon: Lock,
      description: 'Locked forever, no rug pulls'
    },
    {
      label: 'Marketing',
      percentage: mockData.tokenomics.marketing,
      color: 'from-green-400 to-green-600',
      icon: Megaphone,
      description: 'Spread the word, grow the community'
    },
    {
      label: 'Team',
      percentage: mockData.tokenomics.team,
      color: 'from-purple-400 to-purple-600',
      icon: Crown,
      description: 'Core team allocation'
    },
    {
      label: 'Community',
      percentage: mockData.tokenomics.community,
      color: 'from-orange-400 to-orange-600',
      icon: Users,
      description: 'Airdrops and community rewards'
    }
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            Tokenomics
          </h2>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Fair distribution with anti-rug mechanisms built in. We've learned from the best (and worst).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Token Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900">Total Supply</h3>
                  <p className="text-amber-700">1,000,000,000 $PoorAF</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {tokenomicsData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-amber-900">{item.label}</div>
                          <div className="text-sm text-amber-700">{item.description}</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-amber-900">
                        {item.percentage}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Security Features</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-amber-800">Liquidity Locked Forever</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-amber-800">Ownership Renounced</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-amber-800">No Hidden Functions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-amber-800">Community Driven</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Representation */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-900 mb-2">$PoorAF</div>
                    <div className="text-amber-700">1B Total Supply</div>
                  </div>
                </div>
              </div>
              
              {/* Floating cards around the circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  LP: 90%
                </div>
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Marketing: 5%
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Team: 3%
                </div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Community: 2%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;