import { Hero } from '../components/Hero';
import { motion } from 'framer-motion';
import { Utensils, Clock, MapPin } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-wood-text mb-4">
              ¿Por qué elegir Lomito?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Más de 10 años trayendo el auténtico sabor argentino a Lloret de Mar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 sm:p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 wood-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Utensils className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-wood-text mb-4">
                Recetas Auténticas
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Nuestras recetas provienen directamente de Argentina. 
                Mantenemos la tradición familiar de generación en generación.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 wood-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-2xl font-bold text-wood-text mb-4">
                Horarios Extendidos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Abiertos todos los días de 13:00 a 00:00. 
                Perfecto para el almuerzo, merienda o cena.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 wood-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-2xl font-bold text-wood-text mb-4">
                Ubicación Céntrica
              </h3>
              <p className="text-gray-600 leading-relaxed">
                En el corazón de Lloret de Mar, en Avinguda Vila de Blanes. 
                Fácil acceso y estacionamiento disponible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 wood-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Listo para probar el auténtico sabor argentino?
            </h2>
            <p className="text-xl mb-8 text-wood-light">
              Visítanos en Avinguda Vila de Blanes, 118 - Lloret de Mar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="bg-white text-wood-text px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Menú Completo
              </a>
              <a
                href="/contacto"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-wood-text transition-colors"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
