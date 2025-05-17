
import React from "react";
import { ArrowUp, Twitch, Youtube, Send, MessageSquare, Phone, Gamepad, Shield } from "lucide-react";
import { useSoundContext } from "@/contexts/SoundContext";

const Footer = () => {
  const { soundEnabled } = useSoundContext();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    if (soundEnabled) {
      const audio = new Audio("/sounds/click.mp3");
      audio.volume = 0.5;
      audio.play();
    }
  };
  
  const playHoverSound = () => {
    if (soundEnabled) {
      const audio = new Audio("/sounds/hover.mp3");
      audio.volume = 0.2;
      audio.play();
    }
  };

  return (
    <footer className="bg-black py-10 relative overflow-hidden">
      {/* Tactical grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      
      {/* Top border with gaming style */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gaming-purple via-gaming-blue to-gaming-purple"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="/lovable-uploads/137cdb32-069d-4cda-99c0-5f6dbda372a7.png" 
                alt="Santos" 
                className="h-10 w-10 rounded-full border border-gaming-purple/50" 
              />
              <h3 className="text-2xl font-futuristic font-bold glow-text">SxntosYT</h3>
            </div>
            <p className="text-gray-400 flex items-center gap-2">
              <Shield size={14} className="text-gaming-purple" />
              Gamer • Streamer • Content Creator
            </p>
          </div>
          
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <button 
              onClick={scrollToTop}
              onMouseEnter={playHoverSound}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gaming-purple/20 border border-gaming-purple/50 hover:border-gaming-purple text-white transition-all hover:-translate-y-1 sound-click"
            >
              <ArrowUp size={18} />
            </button>
            <span className="text-xs text-gray-500 mt-1">Back to top</span>
          </div>
          
          <div className="flex gap-4">
            <SocialButton icon={Youtube} href="https://www.youtube.com/@sxntosyt" onHover={playHoverSound} />
            <SocialButton icon={Twitch} href="https://www.twitch.tv/sxntosyt" onHover={playHoverSound} />
            <SocialButton icon={MessageSquare} href="https://discord.gg/sxntosyt" onHover={playHoverSound} />
            <SocialButton icon={Send} href="https://t.me/sxntosyt" onHover={playHoverSound} />
            <SocialButton icon={Phone} href="https://whatsapp.com/channel/sxntosyt" onHover={playHoverSound} />
          </div>
        </div>
        
        <div className="border-t border-gaming-purple/20 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SxntosYT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon: Icon, href, onHover }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-8 h-8 rounded-full bg-gaming-dark border border-gaming-purple/30 hover:border-gaming-purple/80 hover:bg-gaming-purple/20 transition-all text-gray-300 hover:text-white sound-hover sound-click"
    onMouseEnter={onHover}
  >
    <Icon size={14} />
  </a>
);

export default Footer;
