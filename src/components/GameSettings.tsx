import React from "react";
import { Target, Mouse } from "lucide-react";

const GameSettings = () => {
  const loadouts = [
    {
      game: "Call of Duty",
      weapons: [
        {
          name: "M4A1",
          attachments: [
            "Monolithic Suppressor",
            "Commando Foregrip",
            "60 Round Mags",
          ],
          image: "/images/m4a1.png", // Add your weapon image
        },
        // Add more weapons as needed
      ],
    },
  ];

  const sensitivitySettings = [
    {
      game: "Call of Duty",
      settings: {
        dpi: "800",
        inGameSens: "6.5",
        adsMultiplier: "1.0",
        fov: "120",
      },
    },
    {
      game: "Valorant",
      settings: {
        dpi: "800",
        inGameSens: "0.35",
        scopedMultiplier: "1.0",
        fov: "103",
      },
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gaming-dark/90 to-black"></div>
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
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Loadouts Section */}
          <div className="card-gaming p-6">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-gaming-purple" size={24} />
              <h3 className="text-xl font-bold text-white">
                Preferred Loadouts
              </h3>
            </div>
            {loadouts.map((game) => (
              <div key={game.game} className="mb-6">
                <h4 className="text-lg text-gaming-purple mb-4">{game.game}</h4>
                {game.weapons.map((weapon) => (
                  <div
                    key={weapon.name}
                    className="bg-black/30 rounded-lg p-4 mb-4"
                  >
                    <h5 className="text-white font-bold mb-2">{weapon.name}</h5>
                    <ul className="text-gray-400">
                      {weapon.attachments.map((attachment, index) => (
                        <li key={index} className="mb-1">
                          • {attachment}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Sensitivity Settings Section */}
          <div className="card-gaming p-6">
            <div className="flex items-center gap-3 mb-6">
              <Mouse className="text-gaming-purple" size={24} />
              <h3 className="text-xl font-bold text-white">
                Sensitivity Settings
              </h3>
            </div>
            {sensitivitySettings.map((game) => (
              <div key={game.game} className="mb-6">
                <h4 className="text-lg text-gaming-purple mb-4">{game.game}</h4>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(game.settings).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-gray-400 text-sm">{key}</span>
                        <span className="text-white font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSettings;
