import React, { useState } from "react";
import { Target, ChevronLeft, ChevronRight } from "lucide-react";

const GameSettings = () => {
  const loadouts = [
    {
      game: "Call of Duty",
      weapons: [
        {
          name: "BY15",
          attachments: [
            "Muzzle:Marauder Suppressor",
            "Barrel:RTC Extended Barrel",
            "Perk:Sleight of Hand",
            "Laser:MIP Laser 5mW",
            "Rear Grip:Stipled Grip Tape",
          ],
          image: "/images/by.jpg",
        },
        {
          name: "AK117",
          attachments: [
            "Laser:OWC Tactical Laser",
            "Barrel:OWC Marksman",
            "Underbarrel:Tactical Foregrip B",
            "Rear Grip:Granulated Grip Tape",
            "Ammunition:48 Round Extended Mag",
          ],
          image: "/images/ak.jpg",
        },
        // Add more weapons as needed
      ],
    },
  ];

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const weapons = loadouts[0].weapons;
  const total = weapons.length;

  const prevWeapon = () =>
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextWeapon = () =>
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-cover bg-center opacity-1 pointer-events-none"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gaming-dark/40 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border border-gaming-purple/30 rounded-full bg-black/50 backdrop-blur-sm mb-4">
            <span className="text-gaming-purple font-futuristic tracking-widest text-sm">
              COMBAT SETUP
            </span>
          </div>
          <h2 className="section-title">Loadouts & Settings</h2>
        </div>

        {/* Game Settings Grid */}
        <div className="flex justify-center">
          {/* Loadouts Section as Carousel */}
          <div className="card-gaming p-6 flex flex-col items-center w-full max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-gaming-purple" size={24} />
              <h3 className="text-xl font-bold text-white">
                Preferred Loadouts
              </h3>
            </div>
            <h4 className="text-lg text-gaming-purple mb-4">
              {loadouts[0].game}
            </h4>
            <div className="relative w-full flex flex-col items-center">
              <div className="flex items-center justify-center w-full mb-4">
                <button
                  onClick={prevWeapon}
                  className="p-2 rounded-full bg-black/40 hover:bg-gaming-purple/30 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={28} className="text-gaming-purple" />
                </button>
                <div className="flex-1 mx-4">
                  <div className="bg-black/30 rounded-lg p-4 flex flex-col items-center">
                    {weapons[currentIndex].image && (
                      <img
                        src={weapons[currentIndex].image}
                        alt={weapons[currentIndex].name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h5 className="text-white font-bold mb-2">
                      {weapons[currentIndex].name}
                    </h5>
                    <ul className="text-gray-400">
                      {weapons[currentIndex].attachments.map(
                        (attachment, idx) => (
                          <li key={idx} className="mb-1">
                            • {attachment}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={nextWeapon}
                  className="p-2 rounded-full bg-black/40 hover:bg-gaming-purple/30 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={28} className="text-gaming-purple" />
                </button>
              </div>
              <div className="flex gap-2 mt-2">
                {weapons.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full border border-gaming-purple transition-all ${
                      idx === currentIndex
                        ? "bg-gaming-purple"
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
            <a
              href="https://t.me/sxntostoriaba"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-6 py-2 rounded-full bg-gaming-purple text-white font-bold shadow-lg hover:bg-purple-700 transition"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSettings;
