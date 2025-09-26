import { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuList } from '../components/MenuList';
import { Utensils, Coffee } from 'lucide-react';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<'lomitos' | 'milanesas' | 'papas' | 'bebidas'>('lomitos');

  const categories: Array<{ id: 'lomitos' | 'milanesas' | 'papas' | 'bebidas', name: string, icon: any }> = [
    { id: 'lomitos', name: 'Lomitos', icon: Utensils },
    { id: 'milanesas', name: 'Milanesas', icon: Utensils },
    { id: 'papas', name: 'Papas Fritas', icon: Utensils },
    { id: 'bebidas', name: 'Bebidas', icon: Coffee },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-lomito-red to-red-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Nuestro Menú</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Descubre nuestra selección de lomitos, milanesas y platos tradicionales argentinos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-lomito-red text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-lomito-black mb-4 text-center">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <div className="w-24 h-1 bg-lomito-red mx-auto rounded-full"></div>
            </div>

            <MenuList category={activeCategory} />
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-lomito-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Ofertas Especiales</h2>
            <p className="text-xl text-gray-300">
              Combos y promociones para disfrutar al máximo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-lomito-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Combo Lomito</h3>
              <p className="text-gray-300 mb-6">
                Lomito + Papas Fritas + Bebida
              </p>
              <div className="text-3xl font-bold text-lomito-red mb-4">
                €15.90
              </div>
              <p className="text-sm text-gray-400 line-through">
                Precio normal: €18.50
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-lomito-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Combo Milanesa</h3>
              <p className="text-gray-300 mb-6">
                Milanesa + Papas Fritas + Bebida
              </p>
              <div className="text-3xl font-bold text-lomito-red mb-4">
                €17.90
              </div>
              <p className="text-sm text-gray-400 line-through">
                Precio normal: €21.50
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-lomito-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Combo Familiar</h3>
              <p className="text-gray-300 mb-6">
                2 Lomitos + 2 Milanesas + Papas + Bebidas
              </p>
              <div className="text-3xl font-bold text-lomito-red mb-4">
                €45.90
              </div>
              <p className="text-sm text-gray-400 line-through">
                Precio normal: €55.50
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-lomito-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ¿Tienes hambre?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Ven a visitarnos y disfruta del auténtico sabor cordobés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-white text-lomito-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Reservar Mesa
              </a>
              <a
                href="tel:+34XXXXXXXXX"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-lomito-red transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
