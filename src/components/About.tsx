
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const features = [
    '5+ años de experiencia',
    'Soporte 24/7',
    'Garantía en todos los trabajos',
    'Precios competitivos'
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="w-64 h-64 mx-auto lg:mx-0 bg-hero-gradient rounded-full flex items-center justify-center text-6xl shadow-2xl mb-8 lg:mb-0">
              👨‍💻
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Conocé a Daniel</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Soy técnico especializado en reparación y mantenimiento de computadoras con más de 5 años de experiencia en el sector. Mi pasión es ayudar a las personas a resolver sus problemas tecnológicos de manera rápida y eficiente.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trabajo tanto de forma presencial como remota, adaptándome a las necesidades de cada cliente. Mi objetivo es brindar un servicio de calidad que supere tus expectativas.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
