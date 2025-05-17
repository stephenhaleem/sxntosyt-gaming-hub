
import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/50 border-b border-gaming-purple/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-futuristic font-bold glow-text tracking-wider">
          SxntosYT
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-gaming-purple transition-colors">
            Home
          </a>
          <a href="#highlights" className="text-white hover:text-gaming-purple transition-colors">
            Highlights
          </a>
          <a href="#social" className="text-white hover:text-gaming-purple transition-colors">
            Social
          </a>
          <a href="#contact" className="text-white hover:text-gaming-purple transition-colors">
            Contact
          </a>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gaming-purple/20 md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <a 
                href="#home" 
                className="text-white hover:text-gaming-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#highlights" 
                className="text-white hover:text-gaming-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Highlights
              </a>
              <a 
                href="#social" 
                className="text-white hover:text-gaming-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Social
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-gaming-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
