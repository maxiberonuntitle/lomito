import { motion } from 'framer-motion';
import { Heart, Users, MapPin, Clock, Award } from 'lucide-react';

export const Historia = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Nuestros inicios',
      description: 'Lomito nació con la pasión por compartir el auténtico sabor argentino en Lloret de Mar.',
      icon: Heart
    },
    {
      year: '2024',
      title: 'Ubicación estratégica',
      description: 'Nos establecimos en Avinguda Vila de Blanes, 118, en el corazón de Lloret de Mar.',
      icon: MapPin
    },
    {
      year: '2024',
      title: 'Nuestra misión',
      description: 'Compartir la tradición culinaria argentina con los habitantes y visitantes de la Costa Brava.',
      icon: Users
    }
  ];

  const values = [
    {
      title: 'Tradición Familiar',
      description: 'Nuestras recetas han pasado de generación en generación, manteniendo la autenticidad de la cocina argentina.',
      icon: Heart
    },
    {
      title: 'Ingredientes Frescos',
      description: 'Utilizamos solo los mejores ingredientes, muchos importados directamente desde Argentina.',
      icon: Award
    },
    {
      title: 'Pasión por la Cocina',
      description: 'Cada plato se prepara con amor y dedicación, respetando las técnicas tradicionales argentinas.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 wood-gradient text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Nuestra Historia</h1>
            <p className="text-xl text-wood-light max-w-3xl mx-auto">
              Más de una década trayendo el auténtico sabor argentino a Lloret de Mar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-wood-text mb-6">
              El sabor de Argentina en la Costa Brava
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Lomito nació del sueño de compartir la rica tradición gastronómica de Argentina, 
              con los habitantes y visitantes de Lloret de Mar. Nuestra historia es una historia de 
              pasión, tradición y amor por la buena comida.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Equipo de Lomito"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-wood-text">
                Nuestro Equipo
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Somos un equipo apasionado por la gastronomía argentina que decidimos 
                compartir el auténtico sabor de Argentina en España. Cada miembro de nuestro 
                equipo aporta su experiencia y amor por la cocina tradicional argentina.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Nuestro chef principal aprendió los secretos de la 
                cocina tradicional argentina. Hoy, compartimos esos secretos con 
                cada plato que servimos en Lomito.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-wood-text mb-6">
              Nuestra Trayectoria
            </h2>
            <p className="text-xl text-gray-600">
              Un viaje de tradición y sabor desde Argentina hasta Lloret de Mar
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="timeline-item"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 wood-gradient rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-2xl font-bold text-wood-text">{item.year}</span>
                        <h3 className="text-xl font-bold text-wood-text">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-wood-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-300">
              Los principios que nos guían en cada plato que servimos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-8 rounded-xl text-center"
                >
                  <div className="w-16 h-16 wood-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 wood-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Quieres ser parte de nuestra historia?
            </h2>
            <p className="text-xl mb-8 text-wood-light">
              Ven a visitarnos y descubre por qué somos el referente de la gastronomía argentina en Lloret de Mar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="bg-white text-wood-text px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Nuestro Menú
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
