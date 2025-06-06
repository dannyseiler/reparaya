
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen bg-background relative overflow-hidden pt-16">
      <div className="bg-subtle-pattern"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight">
              Servicio técnico
              <span className="block font-medium text-gradient">profesional</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 lg:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Soluciones rápidas y efectivas para todos tus problemas informáticos. 
              Soporte remoto y presencial con más de 5 años de experiencia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16 items-center lg:items-start">
              <a 
                href="https://wa.me/5491131797343"
                className="btn-mobile card-mobile bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar ahora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={scrollToServices}
                className="btn-mobile card-mobile border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent transition-all duration-300 w-full sm:w-auto"
              >
                Ver servicios
              </button>
            </div>
            
            <div className="flex gap-8 lg:gap-12 text-muted-foreground justify-center lg:justify-start">
              {[
                { number: '500+', label: 'Reparaciones' },
                { number: '24/7', label: 'Disponible' },
                { number: '5★', label: 'Valoración' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl font-semibold text-foreground">{stat.number}</div>
                  <div className="text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center lg:justify-end order-first lg:order-last">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-muted rounded-2xl flex items-center justify-center animate-subtle-float">
              <div className="text-6xl sm:text-8xl">💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
