
import React from 'react';
import { MessageCircle, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-foreground mb-4">Contacto</h2>
          <p className="text-muted-foreground">Estoy aquí para ayudarte</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Clock, title: 'Disponibilidad', desc: 'Lunes a Domingo' },
            { icon: MessageCircle, title: 'WhatsApp', desc: '11-3179-7343' },
            { icon: Phone, title: 'Teléfono', desc: '11-3179-7343' }
          ].map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center border border-border/50">
              <item.icon className="w-6 h-6 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/5491131797343"
            className="bg-foreground text-background px-8 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a 
            href="tel:+5491131797343"
            className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Llamar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
