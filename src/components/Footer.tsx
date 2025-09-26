import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-bg text-white relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información del bar pizzeria */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white drop-shadow-lg" style={{ fontFamily: 'Suse Mono, Monaco, Consolas, monospace', fontWeight: '700', letterSpacing: '0.02em' }}>
                LOMITO
              </span>
            </div>
            <p className="text-grass-light text-sm leading-relaxed">
              El auténtico sabor argentino en Lloret de Mar. 
              Especialistas en lomitos y milanesas con la tradición argentina.
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-grass-light">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-grass-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-grass-light">
                    Avinguda Vila de Blanes, 118
                  </p>
                  <p className="text-sm text-grass-light">
                    17310 Lloret de Mar, Girona
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-grass-accent" />
                <div>
                  <p className="text-sm text-grass-light">
                    Todos los días: 13:00 - 00:00
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-grass-accent" />
                <p className="text-sm text-grass-light">
                  +34 XXX XXX XXX
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-grass-accent" />
                <p className="text-sm text-grass-light">
                  info@lomito-lloret.com
                </p>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-grass-light">Horarios</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-grass-light">Lunes - Domingo</span>
                <span className="text-grass-light">13:00 - 00:00</span>
              </div>
              <div className="border-t border-grass-accent pt-2">
                <p className="text-xs text-grass-light/70">
                  * Horarios sujetos a cambios en temporada alta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-grass-accent mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-grass-light/80">
              © 2024 Lomito - Bar Pizzeria Argentino. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-grass-light/80 hover:text-grass-accent transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-grass-light/80 hover:text-grass-accent transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
