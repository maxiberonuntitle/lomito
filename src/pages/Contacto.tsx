import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Send, Navigation } from 'lucide-react';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Avinguda Vila de Blanes, 118\n17310 Lloret de Mar, Girona',
      action: 'Ver en Google Maps'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Todos los días: 13:00 - 00:00',
      action: 'Horarios extendidos'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+34 XXX XXX XXX',
      action: 'Llamar ahora'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@lomito-lloret.com',
      action: 'Enviar email'
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
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 wood-gradient rounded-full flex items-center justify-center shadow-2xl">
                <MapPin className="w-10 h-10 text-white drop-shadow-md" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="block text-white drop-shadow-lg">Contacto</span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mt-2 text-wood-light">
                Estamos aquí para atenderte
              </span>
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light mt-4 text-wood-light">
                en Lloret de Mar
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-4">
              Ven a visitarnos o contáctanos para cualquier consulta. 
              Estamos en el corazón de Lloret de Mar para servirte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
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
              Información de Contacto
            </h2>
            <p className="text-lg sm:text-xl text-grass-light drop-shadow-md">
              Encuéntranos en el corazón de Lloret de Mar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card glass-hover p-8 rounded-xl text-center"
                >
                  <div className="w-16 h-16 bg-wood-dark rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-shadow-lg">{info.title}</h3>
                  <p className="text-white/90 mb-4 whitespace-pre-line text-shadow-md">{info.content}</p>
                  <button className="text-white font-semibold hover:text-wood-light transition-colors text-shadow-md hover:text-shadow-lg">
                    {info.action}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-20 page-bg-wood">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 drop-shadow-lg">
                Nuestra Ubicación
              </h3>
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.123456789!2d2.123456!3d41.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAvinguda%20Vila%20de%20Blanes%2C%20118%2C%2017310%20Lloret%20de%20Mar%2C%20Girona!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Lomito"
                ></iframe>
              </div>
              <div className="flex items-center space-x-2 text-wood-light drop-shadow-md">
                <Navigation className="w-5 h-5" />
                <span>Fácil acceso en transporte público y privado</span>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card glass-hover p-8 rounded-xl"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-shadow-lg">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 text-shadow-md">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-input rounded-lg"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 text-shadow-md">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-input rounded-lg"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2 text-shadow-md">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-input rounded-lg"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 text-shadow-md">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass-input rounded-lg resize-none"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-4 text-lg font-semibold"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 page-bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">¿Por qué elegirnos?</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Más de 10 años de experiencia en Lloret de Mar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-black/20 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-black/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-wood-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Horarios Extendidos</h3>
              <p className="text-gray-300">
                Abiertos todos los días de 13:00 a 00:00 para que puedas disfrutar 
                de nuestros platos en cualquier momento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-black/20 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-black/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-wood-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Ubicación Céntrica</h3>
              <p className="text-gray-300">
                En el corazón de Lloret de Mar, con fácil acceso en transporte 
                público y estacionamiento disponible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-black/20 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-black/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-wood-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Atención Personalizada</h3>
              <p className="text-gray-300">
                Nuestro equipo está siempre disponible para atenderte y 
                hacer que tu experiencia sea inolvidable.
              </p>
            </motion.div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para probar nuestros lomitos?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-wood-light">
              Ven a visitarnos en Avinguda Vila de Blanes, 118 - Lloret de Mar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="bg-white text-wood-dark px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Ver Nuestro Menú
              </a>
              <a
                href="tel:+34XXXXXXXXX"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-wood-dark transition-colors shadow-lg"
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
