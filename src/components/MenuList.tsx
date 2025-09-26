import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';

const menuData = {
  bebidas: [
    {
      id: 1,
      name: 'Agua',
      description: 'Agua natural fresca',
      price: '2.00',
      time: '1 min',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Agua con Gas',
      description: 'Agua con gas natural',
      price: '2.50',
      time: '1 min',
      rating: 4.4
    },
    {
      id: 3,
      name: 'Aquarius Limón',
      description: 'Bebida isotónica sabor limón',
      price: '3.50',
      time: '1 min',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Aquarius Naranja',
      description: 'Bebida isotónica sabor naranja',
      price: '3.50',
      time: '1 min',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Coca Cola',
      description: 'Refresco de cola clásico',
      price: '3.00',
      time: '1 min',
      rating: 4.7
    },
    {
      id: 6,
      name: 'Coca Cola Zero',
      description: 'Refresco de cola sin azúcar',
      price: '3.00',
      time: '1 min',
      rating: 4.5
    },
    {
      id: 7,
      name: 'Fanta Limón',
      description: 'Refresco sabor limón',
      price: '3.00',
      time: '1 min',
      rating: 4.4
    },
    {
      id: 8,
      name: 'Fanta Naranja',
      description: 'Refresco sabor naranja',
      price: '3.00',
      time: '1 min',
      rating: 4.5
    },
    {
      id: 9,
      name: 'Sprite',
      description: 'Refresco de lima-limón',
      price: '3.00',
      time: '1 min',
      rating: 4.4
    },
    {
      id: 10,
      name: 'Zumos',
      description: 'Zumos naturales de frutas',
      price: '4.50',
      time: '2 min',
      rating: 4.8
    },
    {
      id: 11,
      name: 'Red Bull',
      description: 'Bebida energética',
      price: '4.50',
      time: '1 min',
      rating: 4.3
    },
    {
      id: 12,
      name: 'Bitter Kas',
      description: 'Bebida amarga refrescante',
      price: '3.50',
      time: '1 min',
      rating: 4.2
    },
    {
      id: 13,
      name: 'Tónica',
      description: 'Bebida tónica con quinina',
      price: '3.50',
      time: '1 min',
      rating: 4.1
    },
    {
      id: 14,
      name: 'Nestea',
      description: 'Té helado sabor limón',
      price: '3.50',
      time: '1 min',
      rating: 4.3
    }
  ],
  cervezas: [
    {
      id: 15,
      name: 'Caña',
      description: 'Cerveza de barril en vaso pequeño',
      price: '2.50',
      time: '2 min',
      rating: 4.6
    },
    {
      id: 16,
      name: 'Clara',
      description: 'Cerveza con limón',
      price: '3.00',
      time: '2 min',
      rating: 4.5
    },
    {
      id: 17,
      name: 'Estrella',
      description: 'Cerveza Estrella Galicia',
      price: '3.50',
      time: '1 min',
      rating: 4.7
    },
    {
      id: 18,
      name: 'Voll Damm',
      description: 'Cerveza Voll Damm',
      price: '4.00',
      time: '1 min',
      rating: 4.8
    },
    {
      id: 19,
      name: 'Damm Lemon',
      description: 'Cerveza Damm con sabor limón',
      price: '4.00',
      time: '1 min',
      rating: 4.4
    },
    {
      id: 20,
      name: 'Desperados',
      description: 'Cerveza con tequila',
      price: '4.50',
      time: '1 min',
      rating: 4.6
    }
  ],
  vinos: [
    {
      id: 21,
      name: 'Sangría',
      description: 'Sangría de la casa con frutas',
      price: '8.50',
      time: '5 min',
      rating: 4.8
    },
    {
      id: 22,
      name: 'Vino de la Casa Blanco',
      description: 'Vino blanco de la casa',
      price: '6.50',
      time: '2 min',
      rating: 4.5
    },
    {
      id: 23,
      name: 'Vino de la Casa Tinto',
      description: 'Vino tinto de la casa',
      price: '6.50',
      time: '2 min',
      rating: 4.6
    }
  ],
  ensaladas: [
    {
      id: 24,
      name: 'César',
      description: 'Lechuga, pollo, queso parmesano, crutones y salsa césar',
      price: '9.50',
      time: '12 min',
      rating: 4.7
    },
    {
      id: 25,
      name: 'Mediterránea',
      description: 'Tomate, pepino, aceitunas, queso feta y aceite de oliva',
      price: '8.50',
      time: '10 min',
      rating: 4.6
    },
    {
      id: 26,
      name: 'Tropical',
      description: 'Lechuga, piña, mango, pollo y salsa tropical',
      price: '10.50',
      time: '15 min',
      rating: 4.8
    },
    {
      id: 27,
      name: 'De la Casa',
      description: 'Mezcla de lechugas, tomate, cebolla, huevo y vinagreta',
      price: '7.50',
      time: '8 min',
      rating: 4.5
    },
    {
      id: 28,
      name: 'Recomendación Nuestra',
      description: 'Tortilla de la casa con ensalada',
      price: '8.50',
      time: '12 min',
      rating: 4.9
    }
  ],
  tartas: [
    {
      id: 29,
      name: 'Tarta de Verdura',
      description: 'Tarta salada con verduras frescas',
      price: '6.50',
      time: '8 min',
      rating: 4.6
    },
    {
      id: 30,
      name: 'Tarta de Pollo',
      description: 'Tarta salada con pollo y verduras',
      price: '7.50',
      time: '10 min',
      rating: 4.7
    },
    {
      id: 31,
      name: 'Tarta de Jamón y Queso',
      description: 'Tarta salada con jamón y queso',
      price: '7.00',
      time: '8 min',
      rating: 4.8
    }
  ],
  lomos: [
    {
      id: 32,
      name: 'Lomo Completo',
      description: 'Lomo con jamón, queso, huevo, lechuga, tomate y mayonesa',
      price: '15.50',
      time: '18 min',
      rating: 4.9
    },
    {
      id: 33,
      name: 'Lomo Simple',
      description: 'Lomo con lechuga, tomate y mayonesa',
      price: '12.50',
      time: '15 min',
      rating: 4.8
    },
    {
      id: 34,
      name: 'Lomo Vegetariano',
      description: 'Lomo vegetal con verduras frescas y salsa especial',
      price: '13.50',
      time: '16 min',
      rating: 4.7
    },
    {
      id: 35,
      name: 'Lomo de la Casa',
      description: 'Lomo especial con ingredientes de la casa',
      price: '16.50',
      time: '20 min',
      rating: 4.9
    },
    {
      id: 36,
      name: 'Lomo de Pollo',
      description: 'Lomo de pollo con lechuga, tomate y mayonesa',
      price: '14.50',
      time: '17 min',
      rating: 4.8
    },
    {
      id: 37,
      name: 'Lomo Pizza',
      description: 'Lomo con jamón, queso, tomate y orégano',
      price: '15.00',
      time: '18 min',
      rating: 4.8
    }
  ],
  paraCompartir: [
    {
      id: 38,
      name: 'Bravas',
      description: 'Papas bravas con salsa picante',
      price: '6.50',
      time: '12 min',
      rating: 4.7
    },
    {
      id: 39,
      name: 'Nuggets',
      description: 'Nuggets de pollo crujientes',
      price: '7.50',
      time: '15 min',
      rating: 4.6
    },
    {
      id: 40,
      name: 'Fritas',
      description: 'Papas fritas crujientes',
      price: '4.50',
      time: '10 min',
      rating: 4.5
    },
    {
      id: 41,
      name: 'Aros de Cebolla',
      description: 'Aros de cebolla empanados',
      price: '6.00',
      time: '12 min',
      rating: 4.6
    }
  ],
  pizzas: [
    {
      id: 42,
      name: 'Muzza',
      description: 'Pizza con mozzarella y tomate',
      price: '12.50',
      time: '20 min',
      rating: 4.7
    },
    {
      id: 43,
      name: 'Especial',
      description: 'Pizza con jamón, huevo, morrones y aceitunas',
      price: '15.50',
      time: '22 min',
      rating: 4.8
    },
    {
      id: 44,
      name: 'Fugazza',
      description: 'Pizza con cebolla y queso',
      price: '13.50',
      time: '20 min',
      rating: 4.6
    },
    {
      id: 45,
      name: 'Napolitana',
      description: 'Pizza con tomate, mozzarella y albahaca',
      price: '14.50',
      time: '22 min',
      rating: 4.8
    },
    {
      id: 46,
      name: 'Anchoas',
      description: 'Pizza con anchoas y mozzarella',
      price: '16.50',
      time: '20 min',
      rating: 4.5
    },
    {
      id: 47,
      name: 'Champi',
      description: 'Pizza con champiñones y mozzarella',
      price: '14.50',
      time: '20 min',
      rating: 4.7
    },
    {
      id: 48,
      name: 'Rúcula',
      description: 'Pizza con rúcula, tomate y mozzarella',
      price: '15.50',
      time: '20 min',
      rating: 4.8
    },
    {
      id: 49,
      name: '4 Estaciones',
      description: 'Pizza con jamón, champiñones, alcachofas y aceitunas',
      price: '17.50',
      time: '25 min',
      rating: 4.9
    },
    {
      id: 50,
      name: 'Roquefort',
      description: 'Pizza con queso roquefort y mozzarella',
      price: '16.50',
      time: '20 min',
      rating: 4.6
    },
    {
      id: 51,
      name: '3 Quesos',
      description: 'Pizza con mozzarella, parmesano y gorgonzola',
      price: '15.50',
      time: '20 min',
      rating: 4.8
    },
    {
      id: 52,
      name: 'Beycohuevo',
      description: 'Pizza con bechamel, huevo y mozzarella',
      price: '16.00',
      time: '22 min',
      rating: 4.7
    },
    {
      id: 53,
      name: 'De la Casa',
      description: 'Pizza especial de la casa con ingredientes únicos',
      price: '18.50',
      time: '25 min',
      rating: 4.9
    },
    {
      id: 54,
      name: 'Venisima',
      description: 'Pizza con salchicha vienesa y mozzarella',
      price: '15.00',
      time: '20 min',
      rating: 4.6
    }
  ],
  hamburguesas: [
    {
      id: 55,
      name: 'Hamburguesa Completa',
      description: 'Hamburguesa con lechuga, tomate, cebolla, queso y mayonesa',
      price: '12.50',
      time: '15 min',
      rating: 4.8
    },
    {
      id: 56,
      name: 'Hamburguesa Simple',
      description: 'Hamburguesa con lechuga, tomate y mayonesa',
      price: '10.50',
      time: '12 min',
      rating: 4.7
    },
    {
      id: 57,
      name: 'Hamburguesa Doble',
      description: 'Doble hamburguesa con queso, lechuga, tomate y salsa especial',
      price: '15.50',
      time: '18 min',
      rating: 4.9
    },
    {
      id: 58,
      name: 'Hamburguesa de Pollo',
      description: 'Hamburguesa de pollo con lechuga, tomate y mayonesa',
      price: '13.50',
      time: '16 min',
      rating: 4.8
    }
  ],
  sandwiches: [
    {
      id: 59,
      name: 'Sandwich Completo',
      description: 'Sandwich con jamón, queso, lechuga, tomate y mayonesa',
      price: '8.50',
      time: '10 min',
      rating: 4.6
    },
    {
      id: 60,
      name: 'Sandwich Simple',
      description: 'Sandwich con jamón, queso y mayonesa',
      price: '6.50',
      time: '8 min',
      rating: 4.5
    }
  ],
  empanadas: [
    {
      id: 61,
      name: 'Empanadas Árabes',
      description: 'Empanadas con carne, cebolla y especias árabes',
      price: '3.50',
      time: '8 min',
      rating: 4.7
    },
    {
      id: 62,
      name: 'Empanadas Criollas Dulces',
      description: 'Empanadas dulces con membrillo o batata',
      price: '3.00',
      time: '6 min',
      rating: 4.6
    },
    {
      id: 63,
      name: 'Empanadas Criollas Picantes',
      description: 'Empanadas con carne picante y especias',
      price: '3.50',
      time: '8 min',
      rating: 4.8
    },
    {
      id: 64,
      name: 'Empanadas de Jamón y Queso',
      description: 'Empanadas con jamón y queso',
      price: '3.00',
      time: '6 min',
      rating: 4.5
    },
    {
      id: 65,
      name: 'Empanadas de Pollo',
      description: 'Empanadas con pollo y verduras',
      price: '3.50',
      time: '8 min',
      rating: 4.7
    }
  ]
};

const MenuCard = ({ item, index }: { item: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="menu-card bg-black/30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/40 hover:bg-black/40"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">{item.name}</h3>
          <div className="flex items-center space-x-2">
            <div className="bg-black/40 backdrop-blur-md rounded-full px-3 py-1 flex items-center space-x-1 border border-white/50">
              <Star className="w-4 h-4 text-yellow-300 fill-current drop-shadow-md" />
              <span className="text-sm font-semibold text-white drop-shadow-md">{item.rating}</span>
            </div>
            <span className="text-2xl font-bold text-wood-light drop-shadow-md">€{item.price}</span>
          </div>
        </div>
        
        <p className="text-white/90 text-sm mb-4 leading-relaxed drop-shadow-sm">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 text-white/80">
            <Clock className="w-4 h-4 drop-shadow-sm" />
            <span className="text-sm drop-shadow-sm">{item.time}</span>
          </div>
          <button className="bg-wood-dark hover:bg-wood-darker text-white border border-wood-light hover:border-wood-light backdrop-blur-md text-sm px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Pedir Ahora
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const MenuList = ({ category }: { category: keyof typeof menuData }) => {
  const items = menuData[category] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item: any, index: number) => (
        <MenuCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};
