
import React from "react";
import { Play } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      id: 1,
      title: "20 Kill Victory Royale",
      game: "Fortnite",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      videoLink: "#"
    },
    {
      id: 2,
      title: "Insane Clutch Play",
      game: "Call of Duty",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      videoLink: "#"
    },
    {
      id: 3,
      title: "Epic Boss Fight",
      game: "Elden Ring",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      videoLink: "#"
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-gaming-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Gaming Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="card-gaming overflow-hidden group">
              <div className="relative">
                <img 
                  src={highlight.image} 
                  alt={highlight.title} 
                  className="highlight-image"
                />
                <a 
                  href={highlight.videoLink}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-gaming-purple/80 flex items-center justify-center animate-pulse-glow">
                    <Play size={24} className="text-white" />
                  </div>
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{highlight.title}</h3>
                <p className="text-gaming-purple">{highlight.game}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@sxntosyt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-gaming"
          >
            View More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
