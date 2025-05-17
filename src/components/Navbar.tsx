
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl font-futuristic font-bold flex items-center gap-2 sound-hover"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
          >
            <Gamepad size={24} className="text-gaming-purple" />
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavItem href="#home" icon={Trophy} label="Home" onHover={playHoverSound} onClick={playClickSound} />
            <NavItem href="#highlights" icon={Gamepad} label="Highlights" onHover={playHoverSound} onClick={playClickSound} />
            <NavItem href="#social" icon={Users} label="Social" onHover={playHoverSound} onClick={playClickSound} />
            <NavItem href="#contact" icon={MessageSquare} label="Contact" onHover={playHoverSound} onClick={playClickSound} />
            <NavItem href="#cod-points" icon={CreditCard} label="COD Points" onHover={playHoverSound} onClick={playClickSound} highlight />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gaming-purple/20 md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <MobileNavItem href="#home" icon={Trophy} label="Home" onClick={() => {setIsMenuOpen(false); playClickSound();}} />
              <MobileNavItem href="#highlights" icon={Gamepad} label="Highlights" onClick={() => {setIsMenuOpen(false); playClickSound();}} />
              <MobileNavItem href="#social" icon={Users} label="Social" onClick={() => {setIsMenuOpen(false); playClickSound();}} />
              <MobileNavItem href="#contact" icon={MessageSquare} label="Contact" onClick={() => {setIsMenuOpen(false); playClickSound();}} />
              <MobileNavItem 
                href="#cod-points" 
                icon={CreditCard} 
                label="COD Points" 
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

const NavItem = ({ href, icon: Icon, label, onHover, onClick, highlight = false }) => (
  <a 
    href={href} 
    className={`flex items-center px-4 py-2 rounded-md transition-colors sound-hover sound-click ${
      highlight 
        ? "text-white bg-gaming-purple hover:bg-gaming-purple/80" 
        : "text-gray-300 hover:text-white hover:bg-white/10"
    }`}
    onMouseEnter={onHover}
    onClick={onClick}
  >
    <Icon size={16} className="mr-1" />
    {label}
  </a>
);

const MobileNavItem = ({ href, icon: Icon, label, onClick, highlight = false }) => (
  <a 
    href={href} 
    className={`flex items-center gap-2 p-3 rounded-md transition-all ${
      highlight 
        ? "text-white bg-gaming-purple hover:bg-gaming-purple/80" 
        : "text-gray-300 hover:text-white hover:bg-white/10"
    }`}
    onClick={onClick}
  >
    <Icon size={18} />
    {label}
  </a>
);

export default Navbar;
