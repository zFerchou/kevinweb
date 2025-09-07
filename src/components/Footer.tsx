import React, { useEffect, useState } from 'react';
import { Terminal, Cpu, Wifi, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const [codeLines, setCodeLines] = useState([
    '> Iniciando conexión segura...',
    '> Encriptando datos...',
    '> Conectado a la red neural...',
    '> Estado: ONLINE'
  ]);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const hackingTexts = [
    '> Iniciando protocolo de conexión...',
    '> Verificando credenciales de acceso...',
    '> Acceso autorizado. Bienvenido al sistema...',
    '> Cargando matriz de datos...',
    '> Sincronizando con servidores remotos...',
    '> Estableciendo canal seguro...',
    '> Red neural activada...',
    '> Sistema operativo: CYBERNET v3.14',
    '> Estado de la conexión: ESTABLE',
    '> Todos los sistemas funcionando...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % hackingTexts.length);
      setCodeLines(prev => {
        const newLines = [...prev.slice(-3), hackingTexts[currentLineIndex]];
        return newLines;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [currentLineIndex]);

  return (
    <footer className="relative bg-black/80 border-t border-green-500/30 py-12">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Console header */}
        <div className="mb-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden">
            {/* Terminal header */}
            <div className="bg-gray-800/50 px-4 py-2 flex items-center space-x-2 border-b border-green-500/20">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm cyber-font">CYBER_TERMINAL_v2.1</span>
              </div>
            </div>

            {/* Console content */}
            <div className="p-4 h-32 overflow-hidden">
              <div className="space-y-1 text-green-400 cyber-font text-sm">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === codeLines.length - 1 ? 'typing-animation' : ''
                    }`}
                  >
                    {line}
                    {index === codeLines.length - 1 && (
                      <span className="animate-pulse">_</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* System status */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Cpu className="w-6 h-6 text-green-400 mr-2" />
              <span className="cyber-font text-green-400">SISTEMA</span>
            </div>
            <div className="text-sm text-gray-400">
              <div>CPU: 99.7% Optimal</div>
              <div>RAM: 16GB Available</div>
              <div>Uptime: 24/7/365</div>
            </div>
          </div>

          {/* Network status */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Wifi className="w-6 h-6 text-blue-400 mr-2" />
              <span className="cyber-font text-blue-400">CONEXIÓN</span>
            </div>
            <div className="text-sm text-gray-400">
              <div>Velocidad: 10Gb/s</div>
              <div>Latencia: &lt;1ms</div>
              <div>Estado: Activa</div>
            </div>
          </div>

          {/* Security */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-fuchsia-400 mr-2" />
              <span className="cyber-font text-fuchsia-400">SEGURIDAD</span>
            </div>
            <div className="text-sm text-gray-400">
              <div>Encriptación: AES-256</div>
              <div>Firewall: Activo</div>
              <div>Intrusiones: 0</div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Terminal className="w-6 h-6 text-cyan-400 mr-2" />
              <span className="cyber-font text-cyan-400">CONTACTO</span>
            </div>
            <div className="text-sm text-gray-400">
              <div>email@cybernet.com</div>
              <div>+1 (555) 123-4567</div>
              <div>24/7 Support</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-500/20 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 CyberNet. Todos los derechos reservados. | 
            <span className="text-green-400"> Powered by Neural Networks</span>
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-gray-500 cyber-font">
            <span>BUILD: v3.14.159</span>
            <span>•</span>
            <span>PROTOCOL: HTTPS/3</span>
            <span>•</span>
            <span className="text-green-400 animate-pulse">ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;