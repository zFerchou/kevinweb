import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Hologram effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 hologram-lines" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main title with glitch effect */}
        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl font-bold cyber-font glitch-text mb-4">
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              BIENVENIDO
            </span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold cyber-font text-gray-300 glitch-text-secondary">
            AL FUTURO
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Entra a la <span className="text-fuchsia-400 glow-text">red más exclusiva</span> del ciberespacio.
          Contenido premium, experiencias únicas y acceso VIP al mundo digital.
        </p>

        {/* Video placeholder with hologram effect */}
        <div className="relative mb-12 group">
          <div className="w-80 h-48 mx-auto bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg border border-fuchsia-500/30 overflow-hidden relative hover-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-fuchsia-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-l-8 border-l-fuchsia-400 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs text-fuchsia-400 mb-1">NOW PLAYING</div>
              <div className="text-sm font-semibold">Cyberpunk Experience</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 px-8 py-4 rounded-lg font-bold cyber-font text-lg transition-all duration-300 hover:scale-105 glow-effect shadow-lg shadow-fuchsia-500/25">
          INICIAR CONEXIÓN
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-fuchsia-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;