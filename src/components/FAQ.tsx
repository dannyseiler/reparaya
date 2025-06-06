
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma una reparación?',
      answer: 'La mayoría de reparaciones se completan en 2-4 horas, dependiendo de la complejidad del problema.'
    },
    {
      question: '¿Hay garantía?',
      answer: 'Sí, todos los trabajos incluyen garantía de 30 días para software y 90 días para hardware.'
    },
    {
      question: '¿Hacés visitas a domicilio?',
      answer: 'Ofrezco servicio a domicilio en CABA y GBA, además de soporte remoto.'
    },
    {
      question: '¿Formas de pago?',
      answer: 'Acepto efectivo, transferencia, MercadoPago y tarjetas de débito/crédito.'
    },
    {
      question: '¿Recuperación de archivos?',
      answer: 'Sí, utilizo herramientas especializadas para recuperar documentos, fotos y archivos importantes.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-foreground mb-4">Preguntas frecuentes</h2>
          <p className="text-muted-foreground">Resuelve tus dudas</p>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border/50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-card hover:bg-accent transition-colors duration-200 flex justify-between items-center"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Plus className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border/50">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
