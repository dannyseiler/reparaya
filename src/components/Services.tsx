
import React from 'react';

const Services = () => {
  const services = [
    { icon: '🎮', title: 'Programas & Juegos', description: 'Instalación y configuración de software, juegos y aplicaciones especializadas.' },
    { icon: '🖥️', title: 'Windows & Drivers', description: 'Instalación de sistemas operativos y actualización de controladores.' },
    { icon: '⚡', title: 'Acelerar PC Lenta', description: 'Optimización completa del sistema para mejorar el rendimiento.' },
    { icon: '🛡️', title: 'Anti-Virus & Limpieza', description: 'Eliminación de virus, malware y limpieza profunda del sistema.' },
    { icon: '💾', title: 'Backup & Datos', description: 'Respaldo de información y recuperación de datos perdidos.' },
    { icon: '📡', title: 'WiFi & Redes', description: 'Configuración de redes inalámbricas y solución de problemas de conectividad.' },
    { icon: '🔧', title: 'Armado & Diagnóstico', description: 'Ensamblaje de equipos y diagnóstico completo de problemas de hardware.' },
    { icon: '💬', title: 'Soporte Remoto', description: 'Asistencia técnica a distancia para resolver problemas sin salir de casa.' }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Especializados</h2>
          <p className="text-xl text-gray-600">Soluciones completas para todos tus problemas informáticos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
