
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      service: 'Optimización de PC',
      text: 'Daniel solucionó mi problema en menos de 2 horas. Mi PC que tardaba 10 minutos en encender ahora funciona como nueva. Súper recomendado!',
      avatar: '👩'
    },
    {
      name: 'Carlos Rodríguez',
      service: 'Soporte Remoto',
      text: 'Excelente servicio remoto. Me ayudó a instalar todos los programas que necesitaba para mi trabajo desde casa. Muy profesional.',
      avatar: '👨'
    },
    {
      name: 'Ana Martínez',
      service: 'Recuperación de Datos',
      text: 'Pensé que había perdido todas mis fotos familiares. Daniel logró recuperar todo. Un genio! Precios súper accesibles.',
      avatar: '👵'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Mis Clientes</h2>
          <p className="text-xl text-gray-600">Testimonios reales de personas que confiaron en mi servicio</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
