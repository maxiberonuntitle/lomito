import { Hero } from '../components/Hero';
import { motion } from 'framer-motion';
import { Utensils, Clock, MapPin } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 page-bg-wood">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              ¿Por qué elegir Lomito?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 sm:p-8 bg-black/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/30 hover:bg-black/30 transition-all duration-300"
            >
              <div className="w-16 h-16 wood-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Utensils className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                Recetas Auténticas
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-md">
                Nuestras recetas provienen directamente de Argentina. 
                Mantenemos la tradición familiar de generación en generación.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-black/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/30 hover:bg-black/30 transition-all duration-300"
            >
              <div className="w-16 h-16 wood-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                Horarios Extendidos
              </h3>
              <p className="text-white/90 leading-relaxed drop-shadow-md">
                Abiertos todos los días de 13:00 a 00:00. 
                Perfecto para el almuerzo, merienda o cena.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-black/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/30 hover:bg-black/30 transition-all duration-300"
            >
              <div className="w-16 h-16 wood-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                Ubicación Céntrica
              </h3>
              <p className="text-white/90 leading-relaxed drop-shadow-md">
                En el corazón de Lloret de Mar, en Avinguda Vila de Blanes. 
                Fácil acceso y estacionamiento disponible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};
