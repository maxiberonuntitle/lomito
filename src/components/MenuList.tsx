import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';

const menuData = {
  lomitos: [
    {
      id: 1,
      name: 'Lomito Clásico',
      description: 'Carne de ternera, lechuga, tomate, cebolla y mayonesa casera',
      price: '12.50',
      time: '15 min',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Lomito Completo',
      description: 'Carne de ternera, jamón, queso, huevo, lechuga, tomate y mayonesa',
      price: '15.50',
      time: '18 min',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Lomito Especial',
      description: 'Carne premium, panceta, queso azul, rúcula y salsa especial',
      price: '18.50',
      time: '20 min',
      rating: 4.9
    }
  ],
  milanesas: [
    {
      id: 4,
      name: 'Milanesa de Ternera',
      description: 'Milanesa de ternera empanada, papas fritas y ensalada',
      price: '14.50',
      time: '20 min',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Milanesa Napolitana',
      description: 'Milanesa con jamón, queso, tomate y orégano',
      price: '16.50',
      time: '22 min',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Milanesa a la Suiza',
      description: 'Milanesa con queso fundido y papas fritas',
      price: '17.50',
      time: '25 min',
      rating: 4.9
    }
  ],
  papas: [
    {
      id: 7,
      name: 'Papas Fritas Clásicas',
      description: 'Papas fritas crujientes con sal marina',
      price: '4.50',
      time: '10 min',
      rating: 4.6
    },
    {
      id: 8,
      name: 'Papas con Cheddar',
      description: 'Papas fritas con queso cheddar fundido',
      price: '6.50',
      time: '12 min',
      rating: 4.8
    }
  ],
  bebidas: [
    {
      id: 9,
      name: 'Cerveza Nacional',
      description: 'Cerveza fría de barril',
      price: '3.50',
      time: '2 min',
      rating: 4.5
    },
    {
      id: 10,
      name: 'Refrescos',
      description: 'Coca-Cola, Fanta, Sprite',
      price: '2.50',
      time: '1 min',
      rating: 4.4
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
