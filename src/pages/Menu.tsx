import { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuList } from '../components/MenuList';
import { Utensils, Coffee, Wine, Salad, Pie, Pizza, Hamburger, Sandwich, CircleDot } from 'lucide-react';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<'bebidas' | 'cervezas' | 'vinos' | 'ensaladas' | 'tartas' | 'lomos' | 'paraCompartir' | 'pizzas' | 'hamburguesas' | 'sandwiches' | 'empanadas'>('bebidas');

  const categories: Array<{ id: 'bebidas' | 'cervezas' | 'vinos' | 'ensaladas' | 'tartas' | 'lomos' | 'paraCompartir' | 'pizzas' | 'hamburguesas' | 'sandwiches' | 'empanadas', name: string, icon: any }> = [
    { id: 'bebidas', name: 'Bebidas', icon: Coffee },
    { id: 'cervezas', name: 'Cervezas', icon: Coffee },
    { id: 'vinos', name: 'Vinos', icon: Wine },
    { id: 'ensaladas', name: 'Ensaladas', icon: Salad },
    { id: 'tartas', name: 'Tartas', icon: Pie },
    { id: 'lomos', name: 'Lomos', icon: Utensils },
    { id: 'paraCompartir', name: 'Para Compartir', icon: CircleDot },
    { id: 'pizzas', name: 'Pizzas', icon: Pizza },
    { id: 'hamburguesas', name: 'Hamburguesas', icon: Hamburger },
    { id: 'sandwiches', name: 'Sandwiches', icon: Sandwich },
    { id: 'empanadas', name: 'Empanadas', icon: CircleDot },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Integrated Menu */}
      <section className="relative py-20 page-bg-wood text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Nuestro Menú</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Descubre nuestra amplia selección de lomitos, pizzas, hamburguesas, empanadas y mucho más
            </p>
          </motion.div>

          {/* Category Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-white/30 text-white shadow-lg backdrop-blur-sm border border-white/30'
                        : 'bg-white/10 text-white hover:bg-white/20 hover:backdrop-blur-sm border border-white/20'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center drop-shadow-lg">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            </div>

            <MenuList category={activeCategory} />
          </motion.div>
        </div>
      </section>


      {/* Special Offers */}
      <section className="py-16 page-bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Ofertas Especiales</h2>
            <p className="text-lg sm:text-xl text-white/90 drop-shadow-md">
              Combos y promociones para disfrutar al máximo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-md p-8 rounded-xl text-center border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/40">
                <Utensils className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-white drop-shadow-md">Combo Lomito</h3>
              <p className="text-white/90 mb-6 drop-shadow-sm">
                Lomito + Papas Fritas + Bebida
              </p>
              <div className="text-3xl font-bold text-wood-light mb-4 drop-shadow-md">
                €15.90
              </div>
              <p className="text-sm text-white/70 line-through drop-shadow-sm">
                Precio normal: €18.50
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-md p-8 rounded-xl text-center border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/40">
                <Utensils className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-white drop-shadow-md">Combo Milanesa</h3>
              <p className="text-white/90 mb-6 drop-shadow-sm">
                Milanesa + Papas Fritas + Bebida
              </p>
              <div className="text-3xl font-bold text-wood-light mb-4 drop-shadow-md">
                €17.90
              </div>
              <p className="text-sm text-white/70 line-through drop-shadow-sm">
                Precio normal: €21.50
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/20 backdrop-blur-md p-8 rounded-xl text-center border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/40">
                <Utensils className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-white drop-shadow-md">Combo Familiar</h3>
              <p className="text-white/90 mb-6 drop-shadow-sm">
                2 Lomitos + 2 Milanesas + Papas + Bebidas
              </p>
              <div className="text-3xl font-bold text-wood-light mb-4 drop-shadow-md">
                €45.90
              </div>
              <p className="text-sm text-white/70 line-through drop-shadow-sm">
                Precio normal: €55.50
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
