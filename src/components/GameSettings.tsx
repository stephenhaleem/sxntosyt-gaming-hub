
import React, { useState } from "react";
import { Target, ChevronLeft, ChevronRight, Settings, Zap, Award, Shield } from "lucide-react";

const GameSettings = () => {
  const loadouts = [
    {
      game: "Call of Duty Mobile",
      weapons: [
        {
          name: "BY15",
          type: "Shotgun",
          attachments: [
            "Muzzle: Marauder Suppressor",
            "Barrel: RTC Extended Barrel", 
            "Perk: Sleight of Hand",
            "Laser: MIP Laser 5mW",
            "Rear Grip: Stipled Grip Tape",
          ],
          image: "/images/by.jpg",
          damage: 95,
          range: 78,
          mobility: 85,
        },
        {
          name: "AK117",
          type: "Assault Rifle",
          attachments: [
            "Laser: OWC Tactical Laser",
            "Barrel: OWC Marksman",
            "Underbarrel: Tactical Foregrip B", 
            "Rear Grip: Granulated Grip Tape",
            "Ammunition: 48 Round Extended Mag",
          ],
          image: "/images/ak.jpg",
          damage: 88,
          range: 92,
          mobility: 76,
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const weapons = loadouts[0].weapons;
  const total = weapons.length;

  const prevWeapon = () =>
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextWeapon = () =>
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  const StatBar = ({ label, value, color }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-300 font-medium">{label}</span>
        <span className="text-sm font-bold text-white">{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176')] bg-cover opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="inline-block px-8 py-3 border-2 border-purple-400/40 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md mb-6">
                <div className="flex items-center gap-3">
                  <Settings className="text-purple-400" size={20} />
                  <span className="text-purple-300 font-futuristic tracking-widest text-sm font-bold">
                    COMBAT CONFIGURATION
                  </span>
                  <Shield className="text-purple-400" size={20} />
                </div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-futuristic font-black mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                  Elite Loadouts
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Pro-level weapon configurations for maximum dominance
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Loadout Carousel */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-black/70 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 shadow-2xl">
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Target className="text-purple-400" size={28} />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white font-futuristic">
                    Professional Loadouts
                  </h3>
                  <Award className="text-yellow-400" size={28} />
                </div>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full border border-purple-400/40">
                  <h4 className="text-lg text-purple-300 font-semibold">{loadouts[0].game}</h4>
                </div>
              </div>

              {/* Weapon Showcase */}
              <div className="relative">
                <div className="flex items-center justify-center gap-6 mb-8">
                  <button
                    onClick={prevWeapon}
                    className="group p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110"
                    aria-label="Previous weapon"
                  >
                    <ChevronLeft size={24} className="text-purple-400 group-hover:text-white" />
                  </button>
                  
                  <div className="flex-1 max-w-2xl">
                    <div className="relative bg-gradient-to-br from-black/50 to-purple-900/30 rounded-2xl p-6 border border-purple-400/20 overflow-hidden">
                      {/* Weapon Image */}
                      {weapons[currentIndex].image && (
                        <div className="relative mb-6 rounded-xl overflow-hidden">
                          <img
                            src={weapons[currentIndex].image}
                            alt={weapons[currentIndex].name}
                            className="w-full h-56 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                              <span className="text-purple-300 text-sm font-semibold">{weapons[currentIndex].type}</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Weapon Name */}
                      <h5 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {weapons[currentIndex].name}
                        </span>
                      </h5>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Stats */}
                        <div>
                          <h6 className="text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
                            <Zap size={18} />
                            Performance Stats
                          </h6>
                          <StatBar 
                            label="Damage" 
                            value={weapons[currentIndex].damage} 
                            color="from-red-500 to-orange-500"
                          />
                          <StatBar 
                            label="Range" 
                            value={weapons[currentIndex].range} 
                            color="from-blue-500 to-purple-500"
                          />
                          <StatBar 
                            label="Mobility" 
                            value={weapons[currentIndex].mobility} 
                            color="from-green-500 to-teal-500"
                          />
                        </div>

                        {/* Attachments */}
                        <div>
                          <h6 className="text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
                            <Settings size={18} />
                            Attachments
                          </h6>
                          <div className="space-y-3">
                            {weapons[currentIndex].attachments.map((attachment, idx) => (
                              <div key={idx} className="bg-gradient-to-r from-purple-900/30 to-transparent p-3 rounded-lg border border-purple-500/20">
                                <span className="text-gray-300 text-sm">• {attachment}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={nextWeapon}
                    className="group p-4 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-110"
                    aria-label="Next weapon"
                  >
                    <ChevronRight size={24} className="text-purple-400 group-hover:text-white" />
                  </button>
                </div>
                
                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                  {weapons.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        idx === currentIndex
                          ? "bg-purple-500 border-purple-400 scale-125"
                          : "bg-transparent border-purple-500/40 hover:border-purple-400/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Enhanced CTA */}
              <div className="text-center mt-10">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-30"></div>
                  <a
                    href="https://t.me/sxntostoriaba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <span>Get More Pro Configs</span>
                      <Target size={20} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSettings;
