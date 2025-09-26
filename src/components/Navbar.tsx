import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
  const fontSize = 1; // text-sm
  const logoSize = 1.5; // text-xl

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-transparent backdrop-blur-md' : 'bg-wood-medium/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span 
              className={`font-bold transition-all duration-500 ${
                scrolled ? 'text-wood-medium drop-shadow-lg' : 'text-white drop-shadow-lg'
              }`}
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif', 
                fontWeight: '700', 
                letterSpacing: '0.05em',
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
                className={`px-3 py-2 text-sm font-medium transition-all duration-500 relative group ${
                  location.pathname === item.path
                    ? scrolled 
                      ? 'text-wood-medium' 
                      : 'text-white'
                    : scrolled
                      ? 'text-wood-medium hover:text-wood-dark'
                      : 'text-white hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full ${
                  scrolled ? 'bg-wood-accent' : 'bg-white'
                }`}></span>
              </Link>
            ))}
            <div className={`flex items-center space-x-1 transition-all duration-500 text-sm ${
              scrolled ? 'text-wood-medium/80' : 'text-white/90'
            }`}>
              <MapPin className="w-4 h-4" />
              <span>Lloret de Mar</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-all duration-500 p-2 rounded-lg ${
                scrolled 
                  ? 'text-wood-medium hover:text-wood-dark hover:bg-wood-light/20 focus:outline-none focus:text-wood-dark focus:bg-wood-light/20'
                  : 'text-white hover:text-white/90 hover:bg-white/10 focus:outline-none focus:text-white/90 focus:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg shadow-lg mt-2 transition-all duration-500 ${
              scrolled ? 'bg-wood-bg/95 backdrop-blur-md' : 'bg-wood-medium/95 backdrop-blur-md'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-500 relative group ${
                    location.pathname === item.path
                      ? scrolled 
                        ? 'text-wood-medium'
                        : 'text-white'
                      : scrolled
                        ? 'text-wood-medium hover:text-wood-dark'
                        : 'text-white hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full ${
                    scrolled ? 'bg-wood-accent' : 'bg-white'
                  }`}></span>
                </Link>
              ))}
              <div className={`flex items-center space-x-1 px-3 py-2 text-sm transition-all duration-500 ${
                scrolled ? 'text-wood-medium/80' : 'text-white/90'
              }`}>
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
