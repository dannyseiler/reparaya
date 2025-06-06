
import React from 'react';

const Services = () => {
  const services = [
    { icon: '🎮', title: 'Software & Juegos', description: 'Instalación y configuración de programas y aplicaciones.' },
    { icon: '🖥️', title: 'Sistema Operativo', description: 'Instalación de Windows y actualización de drivers.' },
    { icon: '⚡', title: 'Optimización', description: 'Mejora del rendimiento y velocidad del equipo.' },
    { icon: '🛡️', title: 'Seguridad', description: 'Eliminación de virus y protección del sistema.' },
    { icon: '💾', title: 'Datos', description: 'Backup y recuperación de información.' },
    { icon: '📡', title: 'Conectividad', description: 'Configuración de redes y WiFi.' },
    { icon: '🔧', title: 'Hardware', description: 'Diagnóstico y reparación de componentes.' },
    { icon: '💬', title: 'Soporte Remoto', description: 'Asistencia técnica a distancia.' }
  ];

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-foreground mb-4">Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas para todos tus problemas informáticos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border/50 hover:border-border transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
