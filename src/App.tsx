import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialPanel from './components/SocialPanel';
import Featured from './components/Featured';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import GlitchOverlay from './components/GlitchOverlay';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black pointer-events-none" />
      
      {/* Animated particles */}
      <ParticleField />
      
      {/* Glitch overlay */}
      <GlitchOverlay />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <SocialPanel />
        <Featured />
        <Footer />
      </div>
    </div>
  );
}

export default App;