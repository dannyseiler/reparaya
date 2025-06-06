
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen bg-hero-gradient relative overflow-hidden">
      <div className="bg-pattern"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tu PC <span className="text-gradient">Como Nueva</span> en Tiempo Récord
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Servicio técnico especializado con más de 5 años de experiencia. 
              Soporte remoto y presencial para todos tus problemas informáticos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5491131797343"
                className="bg-whatsapp-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar Ahora
              </a>
              <button
                onClick={scrollToServices}
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 border-2 border-white/30"
              >
                Ver Servicios
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-8 text-white">
              {[
                { number: '500+', label: 'PC Reparadas' },
                { number: '24/7', label: 'Soporte' },
                { number: '5★', label: 'Calificación' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-tech-amber">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="text-8xl lg:text-9xl animate-bounce-slow">
              💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
