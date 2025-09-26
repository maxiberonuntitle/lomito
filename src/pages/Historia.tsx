import { motion } from 'framer-motion';
import { Heart, Users, Award } from 'lucide-react';

export const Historia = () => {

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 page-bg-wood text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="block text-white drop-shadow-lg">Nuestra Historia</span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mt-2 text-wood-light">
                Más de una década de tradición
              </span>
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light mt-4 text-wood-light">
                en Lloret de Mar
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-4">
              El sabor auténtico de Argentina en la Costa Brava. 
              Nuestra historia es una historia de pasión, tradición y amor por la buena comida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 page-bg-grass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              El sabor de Argentina en la Costa Brava
            </h2>
            <p className="text-lg sm:text-xl text-grass-light max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-md">
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
              className="space-y-6 glass-card glass-hover p-8 rounded-xl"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-shadow-lg">
                Nuestro Equipo
              </h3>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg text-shadow-md">
                Somos un equipo apasionado por la gastronomía argentina que decidimos 
                compartir el auténtico sabor de Argentina en España. Cada miembro de nuestro 
                equipo aporta su experiencia y amor por la cocina tradicional argentina.
              </p>
              <p className="text-white/90 leading-relaxed text-base sm:text-lg text-shadow-md">
                Nuestro chef principal aprendió los secretos de la 
                cocina tradicional argentina. Hoy, compartimos esos secretos con 
                cada plato que servimos en Lomito.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 page-bg-wood text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Nuestros Valores</h2>
            <p className="text-lg sm:text-xl text-gray-300 drop-shadow-md">
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
                  className="glass-card glass-hover p-8 rounded-xl text-center"
                >
                  <div className="w-16 h-16 wood-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white text-shadow-lg">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed text-shadow-md">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
