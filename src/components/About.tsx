
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const features = [
    '5+ años de experiencia',
    'Soporte disponible',
    'Garantía incluida',
    'Precios justos'
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="w-48 h-48 mx-auto lg:mx-0 bg-muted rounded-2xl flex items-center justify-center text-5xl mb-8 lg:mb-0">
              👨‍💻
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-light text-foreground mb-6">Daniel</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Técnico especializado en reparación y mantenimiento de computadoras con más de 5 años de experiencia. 
              Mi objetivo es ayudarte a resolver tus problemas tecnológicos de manera eficiente.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Trabajo tanto presencial como remotamente, adaptándome a tus necesidades 
              para brindarte un servicio de calidad.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-accent rounded-full p-1">
                    <Check className="w-3 h-3 text-foreground" />
                  </div>
                  <span className="text-muted-foreground text-sm">{feature}</span>
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
