import React, { useEffect, useState } from 'react';

const GlitchOverlay: React.FC = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) { // 15% chance of glitch
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100 + Math.random() * 200);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <>
      {isGlitching && (
        <div className="fixed inset-0 z-30 pointer-events-none">
          {/* Horizontal glitch lines */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent animate-pulse" 
               style={{ 
                 clipPath: `inset(${Math.random() * 80}% 0 ${Math.random() * 80}% 0)`,
                 transform: `translateX(${(Math.random() - 0.5) * 10}px)`
               }} />
          
          {/* Digital noise */}
          <div className="absolute inset-0 opacity-10"
               style={{
                 background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                 animation: 'noise 0.2s infinite'
               }} />
        </div>
      )}
    </>
  );
};

export default GlitchOverlay;