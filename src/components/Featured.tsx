import React from 'react';
import { Play, ShoppingBag, Star, Lock } from 'lucide-react';

const Featured: React.FC = () => {
  const featuredContent = [
    {
      type: 'video',
      title: 'Cyberpunk Tutorial Series',
      description: 'Domina el arte del diseño futurista',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      icon: Play,
      color: 'from-red-500 to-pink-500',
      stats: '1.2M views'
    },
    {
      type: 'product',
      title: 'Neon Merchandise',
      description: 'Ropa y accesorios cyberpunk exclusivos',
      image: 'https://images.pexels.com/photos/1972464/pexels-photo-1972464.jpeg',
      icon: ShoppingBag,
      color: 'from-purple-500 to-indigo-500',
      stats: '$49.99'
    },
    {
      type: 'exclusive',
      title: 'Premium Content',
      description: 'Acceso VIP a contenido exclusivo',
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg',
      icon: Lock,
      color: 'from-fuchsia-500 to-cyan-500',
      stats: 'VIP Only'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cyber-font mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent glitch-text">
              DESTACADOS
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contenido premium y experiencias únicas del ciberespacio
          </p>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredContent.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-fuchsia-500/50 transition-all duration-500 hover:scale-105 cursor-pointer featured-card"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Glitch overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Corner badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${item.color} px-3 py-1 rounded-full text-xs font-bold cyber-font uppercase`}>
                      {item.type}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold cyber-font mb-2 group-hover:text-fuchsia-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Stats and action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">{item.stats}</span>
                    </div>
                    <button className={`bg-gradient-to-r ${item.color} px-4 py-2 rounded-lg text-xs font-bold cyber-font uppercase hover:scale-105 transition-transform duration-300`}>
                      Ver más
                    </button>
                  </div>
                </div>

                {/* Neon border effect */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
                  <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-200" />
                  <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;