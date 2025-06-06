
import React from 'react';
import { MessageCircle, Phone, Clock, User, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/serviciotecnicodaniel', color: 'bg-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/serviciotecnicodaniel', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { icon: Youtube, href: 'https://www.youtube.com/c/serviciotecnicodaniel', color: 'bg-red-600' }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🚀 ¡Contactame Ahora! 🚀</h2>
          <p className="text-xl text-gray-300">Estoy aquí para ayudarte con cualquier problema técnico que tengas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: User, title: 'Técnico Especializado', desc: 'Daniel - Servicio Técnico' },
            { icon: MessageCircle, title: 'WhatsApp', desc: '11-3179-7343' },
            { icon: Clock, title: 'Horarios', desc: 'Lunes a Domingo 24hs' }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <item.icon className="w-8 h-8 mx-auto mb-4 text-tech-amber" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="https://wa.me/5491131797343"
            className="bg-whatsapp-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            Escribir por WhatsApp
          </a>
          <a 
            href="tel:+5491131797343"
            className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5" />
            Llamar Ahora
          </a>
        </div>
        
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300`}
            >
              <link.icon className="w-6 h-6 text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
