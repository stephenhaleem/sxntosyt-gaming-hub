
import React, { useEffect, useRef } from "react";
import { Play, Trophy, Star, Users, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  
  const highlights = [
    {
      id: 1,
      title: "20 Kill Victory Royale",
      game: "Call of Duty Mobile",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      videoLink: "#",
      views: "24.5K",
      likes: "1.2K",
      date: "3 days ago"
    },
    {
      id: 2,
      title: "Insane Clutch Play",
      game: "Call of Duty Mobile",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      videoLink: "#",
      views: "18.7K",
      likes: "956",
      date: "1 week ago"
    },
    {
      id: 3,
      title: "Epic Sniper Montage",
      game: "Call of Duty Mobile",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      videoLink: "#",
      views: "32.2K",
      likes: "2.4K",
      date: "2 weeks ago"
    },
  ];

  useEffect(() => {
    // GSAP animations
    const cards = cardsRef.current;
    
    // Stagger animation for cards
    gsap.fromTo(cards,
      { 
        y: 100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );
    
    // Card hover effects (GSAP isn't needed for this, using CSS)
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="highlights" 
      className="py-20 relative overflow-hidden"
    >
      {/* Tactical background with diagonal lines */}
      <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_40%,rgba(139,92,246,0.1)_40%,rgba(139,92,246,0.1)_60%,transparent_60%)] bg-[length:200px_200px]"></div>
      
      {/* Hexagon pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b')] bg-cover opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with military-style design */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-1/2 h-px w-16 bg-gaming-purple/50 hidden md:block"></div>
          <div className="absolute right-0 top-1/2 h-px w-16 bg-gaming-purple/50 hidden md:block"></div>
          
          <div className="text-center">
            <div className="inline-block px-6 py-2 border border-gaming-purple/30 rounded-full bg-black/50 backdrop-blur-sm mb-4">
              <span className="text-gaming-purple font-futuristic tracking-widest text-sm">GAMEPLAY SHOWCASE</span>
            </div>
            <h2 className="section-title">Top Highlights</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={highlight.id} 
              ref={el => cardsRef.current[index] = el}
              className="card-gaming overflow-hidden group transform hover:translate-y-[-5px] hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative">
                {/* Video thumbnail */}
                <img 
                  src={highlight.image} 
                  alt={highlight.title} 
                  className="highlight-image"
                />
                
                {/* Play overlay */}
                <a 
                  href={highlight.videoLink}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-gaming-purple/80 flex items-center justify-center animate-pulse-glow transform group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-white" />
                  </div>
                </a>
                
                {/* Video stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 flex justify-between text-xs">
                  <div className="flex items-center">
                    <Eye size={12} className="mr-1 text-gaming-purple" />
                    <span>{highlight.views}</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={12} className="mr-1 text-gaming-purple" />
                    <span>{highlight.likes}</span>
                  </div>
                  <span className="text-gray-400">{highlight.date}</span>
                </div>
                
                {/* Tactical corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gaming-purple/50"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gaming-purple/50"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gaming-purple/50"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gaming-purple/50"></div>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-gaming-dark/90 to-black">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gaming-purple transition-colors">{highlight.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gaming-purple flex items-center">
                    <Trophy size={14} className="mr-1" />
                    {highlight.game}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <Users size={12} className="mr-1" />
                    <span>Squad Match</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gaming-purple via-gaming-blue to-gaming-purple rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <a 
              href="https://www.youtube.com/@sxntosyt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative btn-gaming group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-gaming-purple to-gaming-blue rounded-md blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
              <span className="relative">View More on YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
