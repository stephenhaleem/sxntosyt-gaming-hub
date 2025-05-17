
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-hero-pattern bg-cover bg-center py-20 pt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-futuristic font-bold mb-4 glow-text tracking-wider">
              SxntosYT
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Gamer • Streamer • Content Creator
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-10 backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-gaming-purple/30">
            <p className="text-gray-200 mb-4">
              Welcome to my official website! Check out my gaming highlights, join my community, and connect with me on social media.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#highlights" 
              className="btn-gaming flex items-center justify-center gap-2"
            >
              Watch Highlights <ArrowRight size={18} />
            </a>
            <a 
              href="#social" 
              className="border-2 border-gaming-purple text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:bg-gaming-purple/20 hover:-translate-y-1"
            >
              Connect With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
