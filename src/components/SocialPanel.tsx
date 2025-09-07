import React from 'react';
import { 
  Youtube, 
  Instagram, 
  Twitter, 
  Twitch, 
  Github, 
  Linkedin,
  MessageCircle,
  Music
} from 'lucide-react';

const SocialPanel: React.FC = () => {
  const socialLinks = [
    { 
      icon: Youtube, 
      name: 'YouTube', 
      followers: '1.2M',
      color: 'from-red-500 to-red-600',
      glowColor: 'red-500'
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      followers: '890K',
      color: 'from-pink-500 to-purple-600',
      glowColor: 'pink-500'
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      followers: '654K',
      color: 'from-blue-400 to-blue-600',
      glowColor: 'blue-400'
    },
    { 
      icon: Twitch, 
      name: 'Twitch', 
      followers: '423K',
      color: 'from-purple-500 to-purple-700',
      glowColor: 'purple-500'
    },
    { 
      icon: Github, 
      name: 'GitHub', 
      followers: '234K',
      color: 'from-gray-600 to-gray-800',
      glowColor: 'gray-400'
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      followers: '178K',
      color: 'from-blue-600 to-blue-800',
      glowColor: 'blue-600'
    },
    { 
      icon: MessageCircle, 
      name: 'Discord', 
      followers: '567K',
      color: 'from-indigo-500 to-indigo-700',
      glowColor: 'indigo-500'
    },
    { 
      icon: Music, 
      name: 'Spotify', 
      followers: '89K',
      color: 'from-green-500 to-green-700',
      glowColor: 'green-500'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cyber-font mb-4">
            <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent glitch-text">
              CONEXIONES
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conecta conmigo en todas las plataformas del ciberespacio
          </p>
        </div>

        {/* Social grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-fuchsia-500/50 transition-all duration-300 hover:scale-105 cursor-pointer social-card"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Neon glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`} />
                <div className={`absolute inset-0 bg-${social.glowColor} blur-xl opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Platform name */}
                  <h3 className="font-bold cyber-font mb-2 group-hover:text-fuchsia-400 transition-colors duration-300">
                    {social.name}
                  </h3>
                  
                  {/* Followers count */}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <span className="font-semibold">{social.followers}</span>
                    <br />
                    <span className="text-xs">seguidores</span>
                  </div>
                </div>

                {/* Hover effect lines */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        {/* Stats summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-900/30 backdrop-blur-sm border border-fuchsia-500/30 rounded-full px-8 py-4">
            <div>
              <div className="text-2xl font-bold text-fuchsia-400">4.2M+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Total Seguidores</div>
            </div>
            <div className="w-px h-8 bg-gray-600" />
            <div>
              <div className="text-2xl font-bold text-cyan-400">98%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Engagement</div>
            </div>
            <div className="w-px h-8 bg-gray-600" />
            <div>
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Conexión</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialPanel;