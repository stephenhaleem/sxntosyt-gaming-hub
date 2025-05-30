import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Gamepad,
  Trophy,
  Users,
  MessageSquare,
  CreditCard,
} from "lucide-react";
import { useSoundContext } from "@/contexts/SoundContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      className={`fixed w-full top-0 z-50 transition-all duration-300 flex justify-center pt-4 px-4`}
    >
      <div
        className={`max-w-5xl w-full rounded-xl px-4 py-3 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-black/80 border border-gaming-purple/30 shadow-lg shadow-gaming-purple/10"
            : "bg-black/40 backdrop-blur-sm border border-white/10"
        }`}
      >
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
              <NavItem
                href="#home"
                label="HOME"
                onHover={playHoverSound}
                onClick={playClickSound}
              />
              <NavItem
                href="#highlights"
                label="HIGHLIGHTS"
                onHover={playHoverSound}
                onClick={playClickSound}
              />

              {/* Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="uppercase tracking-wider font-futuristic px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  MORE <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/90 border border-gaming-purple/30 text-white backdrop-blur-md">
                  <DropdownMenuItem
                    className="hover:bg-gaming-purple/20 focus:bg-gaming-purple/20 cursor-pointer flex items-center gap-2"
                    onSelect={() => {
                      window.location.href = "#social";
                      playClickSound();
                    }}
                  >
                    <Users size={16} />
                    SOCIAL
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gaming-purple/20 focus:bg-gaming-purple/20 cursor-pointer flex items-center gap-2"
                    onSelect={() => {
                      window.location.href = "#contact";
                      playClickSound();
                    }}
                  >
                    <MessageSquare size={16} />
                    CONTACT
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-black/95 backdrop-blur-md border border-gaming-purple/20 rounded-lg md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <MobileNavItem
                href="#home"
                label="HOME"
                onClick={() => {
                  setIsMenuOpen(false);
                  playClickSound();
                }}
              />
              <MobileNavItem
                href="#highlights"
                label="HIGHLIGHTS"
                onClick={() => {
                  setIsMenuOpen(false);
                  playClickSound();
                }}
              />
              <MobileNavItem
                href="#social"
                label="SOCIAL"
                onClick={() => {
                  setIsMenuOpen(false);
                  playClickSound();
                }}
              />
              <MobileNavItem
                href="#contact"
                label="CONTACT"
                onClick={() => {
                  setIsMenuOpen(false);
                  playClickSound();
                }}
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
