
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Gamepad, Trophy, Users, MessageSquare, CreditCard } from "lucide-react";
import { useSoundContext } from "@/contexts/SoundContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { soundEnabled } = useSoundContext();
  
  const playHoverSound = () => {
    if (soundEnabled) {
      const audio = new Audio("/sounds/hover.mp3");
      audio.volume = 0.2;
      audio.play();
    }
  };
  
  const playClickSound = () => {
    if (soundEnabled) {
      const audio = new Audio("/sounds/click.mp3");
      audio.volume = 0.5;
      audio.play();
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-md bg-black/80 border-b border-gaming-purple/30" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl font-futuristic font-bold flex items-center gap-2 sound-hover"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <img 
              src="/lovable-uploads/137cdb32-069d-4cda-99c0-5f6dbda372a7.png" 
              alt="Santos" 
              className="h-10 w-10 rounded-full border border-gaming-purple/50" 
            />
            <span className="glow-text">SxntosYT</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white sound-click p-2 border border-gaming-purple/30 rounded-md bg-black/50"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              playClickSound();
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation - COD style */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1">
              <NavItem href="#home" label="HOME" onHover={playHoverSound} onClick={playClickSound} />
              <NavItem href="#highlights" label="HIGHLIGHTS" onHover={playHoverSound} onClick={playClickSound} />
              <NavItem href="#social" label="SOCIAL" onHover={playHoverSound} onClick={playClickSound} />
              <NavItem href="#contact" label="CONTACT" onHover={playHoverSound} onClick={playClickSound} />
            </div>
            
            {/* COD Points button styled like the COD store button */}
            <NavItemHighlight 
              href="#cod-points" 
              label="COD-M STORE" 
              onHover={playHoverSound} 
              onClick={playClickSound} 
            />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gaming-purple/20 md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <MobileNavItem href="#home" label="HOME" onClick={() => {setIsMenuOpen(false); playClickSound();}} />
              <MobileNavItem href="#highlights" label="HIGHLIGHTS" onClick={() => {setIsMenuOpen(false); playClickSound();}} />
              <MobileNavItem href="#social" label="SOCIAL" onClick={() => {setIsMenuOpen(false); playClickSound();}} />
              <MobileNavItem href="#contact" label="CONTACT" onClick={() => {setIsMenuOpen(false); playClickSound();}} />
              <MobileNavItem 
                href="#cod-points" 
                label="COD-M STORE" 
                onClick={() => {setIsMenuOpen(false); playClickSound();}}
                highlight
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ href, label, onHover, onClick }) => (
  <a 
    href={href} 
    className="uppercase tracking-wider font-futuristic px-4 py-2 text-gray-300 hover:text-white transition-colors sound-hover sound-click"
    onMouseEnter={onHover}
    onClick={onClick}
  >
    {label}
  </a>
);

const NavItemHighlight = ({ href, label, onHover, onClick }) => (
  <a 
    href={href} 
    className="ml-4 uppercase tracking-wider font-futuristic px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold transition-colors sound-hover sound-click"
    onMouseEnter={onHover}
    onClick={onClick}
  >
    {label}
  </a>
);

const MobileNavItem = ({ href, label, onClick, highlight = false }) => (
  <a 
    href={href} 
    className={`uppercase tracking-wider font-futuristic p-3 rounded-md transition-all ${
      highlight 
        ? "text-black bg-yellow-400 hover:bg-yellow-500 font-bold" 
        : "text-gray-300 hover:text-white hover:bg-white/10"
    }`}
    onClick={onClick}
  >
    {label}
  </a>
);

export default Navbar;
