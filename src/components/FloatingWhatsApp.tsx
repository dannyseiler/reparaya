
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5491131797343?text=Hola%20Daniel!%20Necesito%20ayuda%20con%20mi%20PC"
      className="fixed bottom-6 right-6 w-14 h-14 bg-whatsapp-gradient rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 z-50 animate-pulse-glow"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsApp;
