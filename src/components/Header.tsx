import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Inicio', 'Sobre mí', 'Videos', 'Tienda', 'Contacto'];

  return (
    <header className="relative z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-lg flex items-center justify-center glow-effect animate-pulse-glow">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent cyber-font glitch-text">
            CyberNet
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative group cyber-font text-sm font-medium transition-colors duration-300 hover:text-fuchsia-400"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-900/50 border border-fuchsia-500/30 hover:border-fuchsia-400 transition-colors duration-300"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-fuchsia-500/30">
          <nav className="p-6 space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 cyber-font text-sm font-medium hover:text-fuchsia-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;