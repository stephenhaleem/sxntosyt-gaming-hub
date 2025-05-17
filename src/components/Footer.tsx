
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-black py-10 border-t border-gaming-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-futuristic font-bold glow-text mb-2">SxntosYT</h3>
            <p className="text-gray-400">Gamer • Streamer • Content Creator</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary border border-gaming-purple/50 hover:border-gaming-purple text-white transition-all"
            >
              <ArrowUp size={20} />
            </button>
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

export default Footer;
