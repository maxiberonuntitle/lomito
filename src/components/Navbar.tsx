import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Utensils } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Menú', path: '/menu' },
    { name: 'Historia', path: '/historia' },
    { name: 'Contacto', path: '/contacto' },
  ];

  // Mantener tamaños fijos
  const logoSize = 1.5; // text-xl

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-transparent backdrop-blur-md' : 'bg-wood-bg/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span 
              className="font-bold transition-all duration-300 text-white drop-shadow-lg"
              style={{ 
                fontFamily: 'Suse Mono, Monaco, Consolas, monospace', 
                fontWeight: '700', 
                letterSpacing: '0.02em',
                fontSize: `${logoSize}rem`
              }}
            >
              LOMITO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? 'text-white bg-white/20' 
                    : 'text-white hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white"></span>
              </Link>
            ))}
            <div className="flex items-center space-x-1 transition-all duration-300 text-sm text-white/80">
              <MapPin className="w-4 h-4" />
              <span>Lloret de Mar</span>
            </div>
          </div>

          {/* Mobile menu buttons */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Quick menu access */}
            <Link
              to="/menu"
              className="transition-all duration-300 text-white hover:text-white/80 focus:outline-none focus:text-white/80"
            >
              <Utensils className="w-5 h-5" />
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-all duration-300 text-white hover:text-white/80 focus:outline-none focus:text-white/80"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg shadow-lg mt-2 transition-all duration-300 bg-wood-bg backdrop-blur-md">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-white bg-white/20'
                      : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-1 px-3 py-2 text-sm transition-all duration-300 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Lloret de Mar</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
