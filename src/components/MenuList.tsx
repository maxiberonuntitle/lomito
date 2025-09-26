import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';

const menuData = {
  lomitos: [
    {
      id: 1,
      name: 'Lomito Clásico',
      description: 'Carne de ternera, lechuga, tomate, cebolla y mayonesa casera',
      price: '12.50',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      time: '15 min',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Lomito Completo',
      description: 'Carne de ternera, jamón, queso, huevo, lechuga, tomate y mayonesa',
      price: '15.50',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      time: '18 min',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Lomito Especial',
      description: 'Carne premium, panceta, queso azul, rúcula y salsa especial',
      price: '18.50',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      time: '20 min',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Milanesa Napolitana',
      description: 'Milanesa con jamón, queso, tomate y orégano',
      price: '16.50',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      time: '22 min',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Milanesa a la Suiza',
      description: 'Milanesa con queso fundido y papas fritas',
      price: '17.50',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      time: '10 min',
      rating: 4.6
    },
    {
      id: 8,
      name: 'Papas con Cheddar',
      description: 'Papas fritas con queso cheddar fundido',
      price: '6.50',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      time: '2 min',
      rating: 4.5
    },
    {
      id: 10,
      name: 'Refrescos',
      description: 'Coca-Cola, Fanta, Sprite',
      price: '2.50',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
      className="menu-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold text-gray-800">{item.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-lomito-black">{item.name}</h3>
          <span className="text-2xl font-bold text-lomito-red">€{item.price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-500">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{item.time}</span>
          </div>
          <button className="btn-primary text-sm px-4 py-2">
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
