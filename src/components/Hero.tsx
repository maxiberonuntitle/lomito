import { Link } from 'react-router-dom';
import { ChevronDown, Utensils, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 wood-gradient rounded-full flex items-center justify-center shadow-2xl">
              <Utensils className="w-10 h-10 text-white drop-shadow-md" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-white drop-shadow-lg">LOMITO</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-2 text-wood-light">
              El auténtico sabor argentino
            </span>
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-light mt-4 text-wood-light">
              en Lloret de Mar
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-4">
            Especialistas en lomitos y milanesas con la tradición argentina. 
            El sabor auténtico de Argentina en la Costa Brava.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center pt-6 sm:pt-8 px-4">
            <Link
              to="/menu"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 w-full sm:w-auto"
            >
              Ver Menú
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 wood-gradient rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Utensils className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <h3 className="font-semibold text-white mb-2">Lomitos Auténticos</h3>
              <p className="text-sm text-gray-300">Receta tradicional argentina</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-12 h-12 wood-gradient rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Utensils className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <h3 className="font-semibold text-white mb-2">Milanesas Argentinas</h3>
              <p className="text-sm text-gray-300">El sabor de Argentina en España</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-12 h-12 wood-gradient rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Coffee className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <h3 className="font-semibold text-white mb-2">Bebidas</h3>
              <p className="text-sm text-gray-300">Refrescantes y variadas</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
