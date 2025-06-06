
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5491131797343?text=Hola%20Daniel!%20Necesito%20ayuda%20con%20mi%20PC"
      className="fixed bottom-6 right-6 w-12 h-12 bg-foreground rounded-xl flex items-center justify-center text-background shadow-lg hover:scale-105 transition-all duration-300 z-50"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
    </a>
  );
};

export default FloatingWhatsApp;
