
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      service: 'Optimización',
      text: 'Solucionó mi problema rápidamente. Mi PC funciona como nueva.',
      avatar: '👩'
    },
    {
      name: 'Carlos Rodríguez',
      service: 'Soporte Remoto',
      text: 'Excelente servicio remoto. Muy profesional y eficiente.',
      avatar: '👨'
    },
    {
      name: 'Ana Martínez',
      service: 'Recuperación',
      text: 'Recuperó todos mis archivos importantes. Muy recomendable.',
      avatar: '👵'
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-foreground mb-4">Testimonios</h2>
          <p className="text-muted-foreground">Lo que dicen mis clientes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border/50"
            >
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.service}</p>
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
