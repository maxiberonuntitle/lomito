import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const menuData = {
  bebidas: [
    {
      id: 1,
      name: 'Agua',
      description: 'Agua natural fresca',
      time: '1 min',
    },
    {
      id: 2,
      name: 'Agua con Gas',
      description: 'Agua con gas natural',
      time: '1 min',
    },
    {
      id: 3,
      name: 'Aquarius Limón',
      description: 'Bebida isotónica sabor limón',
      time: '1 min',
    },
    {
      id: 4,
      name: 'Aquarius Naranja',
      description: 'Bebida isotónica sabor naranja',
      time: '1 min',
    },
    {
      id: 5,
      name: 'Coca Cola',
      description: 'Refresco de cola clásico',
      time: '1 min',
    },
    {
      id: 6,
      name: 'Coca Cola Zero',
      description: 'Refresco de cola sin azúcar',
      time: '1 min',
    },
    {
      id: 7,
      name: 'Fanta Limón',
      description: 'Refresco sabor limón',
      time: '1 min',
    },
    {
      id: 8,
      name: 'Fanta Naranja',
      description: 'Refresco sabor naranja',
      time: '1 min',
    },
    {
      id: 9,
      name: 'Sprite',
      description: 'Refresco de lima-limón',
      time: '1 min',
    },
    {
      id: 10,
      name: 'Zumos',
      description: 'Zumos naturales de frutas',
      time: '2 min',
    },
    {
      id: 11,
      name: 'Red Bull',
      description: 'Bebida energética',
      time: '1 min',
    },
    {
      id: 12,
      name: 'Bitter Kas',
      description: 'Bebida amarga refrescante',
      time: '1 min',
    },
    {
      id: 13,
      name: 'Tónica',
      description: 'Bebida tónica con quinina',
      time: '1 min',
    },
    {
      id: 14,
      name: 'Nestea',
      description: 'Té helado sabor limón',
      time: '1 min',
    }
  ],
  cervezas: [
    {
      id: 15,
      name: 'Caña',
      description: 'Cerveza de barril en vaso pequeño',
      time: '2 min',
    },
    {
      id: 16,
      name: 'Clara',
      description: 'Cerveza con limón',
      time: '2 min',
    },
    {
      id: 17,
      name: 'Estrella',
      description: 'Cerveza Estrella Galicia',
      time: '1 min',
    },
    {
      id: 18,
      name: 'Voll Damm',
      description: 'Cerveza Voll Damm',
      time: '1 min',
    },
    {
      id: 19,
      name: 'Damm Lemon',
      description: 'Cerveza Damm con sabor limón',
      time: '1 min',
    },
    {
      id: 20,
      name: 'Desperados',
      description: 'Cerveza con tequila',
      time: '1 min',
    }
  ],
  vinos: [
    {
      id: 21,
      name: 'Sangría',
      description: 'Sangría de la casa con frutas',
      time: '5 min',
    },
    {
      id: 22,
      name: 'Vino de la Casa Blanco',
      description: 'Vino blanco de la casa',
      time: '2 min',
    },
    {
      id: 23,
      name: 'Vino de la Casa Tinto',
      description: 'Vino tinto de la casa',
      time: '2 min',
    }
  ],
  ensaladas: [
    {
      id: 24,
      name: 'César',
      description: 'Lechuga, pollo, queso parmesano, crutones y salsa césar',
      time: '12 min',
    },
    {
      id: 25,
      name: 'Mediterránea',
      description: 'Tomate, pepino, aceitunas, queso feta y aceite de oliva',
      time: '10 min',
    },
    {
      id: 26,
      name: 'Tropical',
      description: 'Lechuga, piña, mango, pollo y salsa tropical',
      time: '15 min',
    },
    {
      id: 27,
      name: 'De la Casa',
      description: 'Mezcla de lechugas, tomate, cebolla, huevo y vinagreta',
      time: '8 min',
    },
    {
      id: 28,
      name: 'Recomendación Nuestra',
      description: 'Tortilla de la casa con ensalada',
      time: '12 min',
    }
  ],
  tartas: [
    {
      id: 29,
      name: 'Tarta de Verdura',
      description: 'Tarta salada con espinaca, acelga y queso',
      time: '8 min'
    },
    {
      id: 30,
      name: 'Tarta de Pollo',
      description: 'Tarta salada con pollo, verduras y especias',
      time: '10 min'
    },
    {
      id: 31,
      name: 'Tarta de Jamón y Queso',
      description: 'Tarta salada con jamón cocido y queso mozzarella',
      time: '8 min'
    }
  ],
  lomos: [
    {
      id: 32,
      name: 'Lomo Completo',
      description: 'Lomo con jamón, queso, huevo, lechuga, tomate y mayonesa',
      time: '18 min',
    },
    {
      id: 33,
      name: 'Lomo Simple',
      description: 'Lomo con lechuga, tomate y mayonesa',
      time: '15 min',
    },
    {
      id: 34,
      name: 'Lomo Vegetariano',
      description: 'Lomo vegetal con verduras frescas y salsa especial',
      time: '16 min',
    },
    {
      id: 35,
      name: 'Lomo de la Casa',
      description: 'Lomo especial con ingredientes de la casa',
      time: '20 min',
    },
    {
      id: 36,
      name: 'Lomo de Pollo',
      description: 'Lomo de pollo con lechuga, tomate y mayonesa',
      time: '17 min',
    },
    {
      id: 37,
      name: 'Lomo Pizza',
      description: 'Lomo con jamón, queso, tomate y orégano',
      time: '18 min',
    }
  ],
  paraCompartir: [
    {
      id: 38,
      name: 'Bravas',
      description: 'Papas bravas con salsa picante',
      time: '12 min',
    },
    {
      id: 39,
      name: 'Nuggets',
      description: 'Nuggets de pollo crujientes',
      time: '15 min',
    },
    {
      id: 40,
      name: 'Fritas',
      description: 'Papas fritas crujientes',
      time: '10 min',
    },
    {
      id: 41,
      name: 'Aros de Cebolla',
      description: 'Aros de cebolla empanados',
      time: '12 min',
    }
  ],
  pizzas: [
    {
      id: 42,
      name: 'Muzza',
      description: 'Pizza con mozzarella y tomate',
      time: '20 min',
    },
    {
      id: 43,
      name: 'Especial',
      description: 'Pizza con jamón, huevo, morrones y aceitunas',
      time: '22 min',
    },
    {
      id: 44,
      name: 'Fugazza',
      description: 'Pizza con cebolla y queso',
      time: '20 min',
    },
    {
      id: 45,
      name: 'Napolitana',
      description: 'Pizza con tomate, mozzarella y albahaca',
      time: '22 min',
    },
    {
      id: 46,
      name: 'Anchoas',
      description: 'Pizza con anchoas y mozzarella',
      time: '20 min',
    },
    {
      id: 47,
      name: 'Champi',
      description: 'Pizza con champiñones y mozzarella',
      time: '20 min',
    },
    {
      id: 48,
      name: 'Rúcula',
      description: 'Pizza con rúcula, tomate y mozzarella',
      time: '20 min',
    },
    {
      id: 49,
      name: '4 Estaciones',
      description: 'Pizza con jamón, champiñones, alcachofas y aceitunas',
      time: '25 min',
    },
    {
      id: 50,
      name: 'Roquefort',
      description: 'Pizza con queso roquefort y mozzarella',
      time: '20 min',
    },
    {
      id: 51,
      name: '3 Quesos',
      description: 'Pizza con mozzarella, parmesano y gorgonzola',
      time: '20 min',
    },
    {
      id: 52,
      name: 'Beycohuevo',
      description: 'Pizza con bechamel, huevo y mozzarella',
      time: '22 min',
    },
    {
      id: 53,
      name: 'De la Casa',
      description: 'Pizza especial de la casa con ingredientes únicos',
      time: '25 min',
    },
    {
      id: 54,
      name: 'Venisima',
      description: 'Pizza con salchicha vienesa y mozzarella',
      time: '20 min',
    }
  ],
  hamburguesas: [
    {
      id: 55,
      name: 'Hamburguesa Completa',
      description: 'Hamburguesa con lechuga, tomate, cebolla, queso y mayonesa',
      time: '15 min',
    },
    {
      id: 56,
      name: 'Hamburguesa Simple',
      description: 'Hamburguesa con lechuga, tomate y mayonesa',
      time: '12 min',
    },
    {
      id: 57,
      name: 'Hamburguesa Doble',
      description: 'Doble hamburguesa con queso, lechuga, tomate y salsa especial',
      time: '18 min',
    },
    {
      id: 58,
      name: 'Hamburguesa de Pollo',
      description: 'Hamburguesa de pollo con lechuga, tomate y mayonesa',
      time: '16 min',
    }
  ],
  sandwiches: [
    {
      id: 59,
      name: 'Sandwich Completo',
      description: 'Sandwich con jamón, queso, lechuga, tomate y mayonesa',
      time: '10 min',
    },
    {
      id: 60,
      name: 'Sandwich Simple',
      description: 'Sandwich con jamón, queso y mayonesa',
      time: '8 min',
    }
  ],
  empanadas: [
    {
      id: 61,
      name: 'Empanadas Árabes',
      description: 'Empanadas con carne, cebolla y especias árabes',
      time: '8 min',
    },
    {
      id: 62,
      name: 'Empanadas Criollas Dulces',
      description: 'Empanadas dulces con membrillo o batata',
      time: '6 min',
    },
    {
      id: 63,
      name: 'Empanadas Criollas Picantes',
      description: 'Empanadas con carne picante y especias',
      time: '8 min',
    },
    {
      id: 64,
      name: 'Empanadas de Jamón y Queso',
      description: 'Empanadas con jamón y queso',
      time: '6 min',
    },
    {
      id: 65,
      name: 'Empanadas de Pollo',
      description: 'Empanadas con pollo y verduras',
      time: '8 min',
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
        </div>
        
        <p className="text-white/90 text-sm mb-4 leading-relaxed drop-shadow-sm">
          {item.description}
        </p>
        
        <div className="flex items-center space-x-1 text-white/80">
          <Clock className="w-4 h-4 drop-shadow-sm" />
          <span className="text-sm drop-shadow-sm">{item.time}</span>
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
