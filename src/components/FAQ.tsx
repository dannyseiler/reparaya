
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma reparar una PC?',
      answer: 'Depende del problema, pero la mayoría de reparaciones se completan en 2-4 horas. Los diagnósticos simples pueden resolverse en 30 minutos, mientras que reinstalaciones completas pueden tomar hasta 24 horas.'
    },
    {
      question: '¿Ofrecés garantía en tus trabajos?',
      answer: 'Sí, todos mis trabajos incluyen garantía. Para reparaciones de software ofrezco 30 días de garantía, y para trabajos de hardware 90 días. Si el problema persiste, lo soluciono sin costo adicional.'
    },
    {
      question: '¿Hacés visitas a domicilio?',
      answer: 'Sí, ofrezco servicio a domicilio en CABA y GBA. También trabajo de forma remota para muchos problemas, lo que es más rápido y económico. Consultame por tu zona específica.'
    },
    {
      question: '¿Cuáles son tus formas de pago?',
      answer: 'Acepto efectivo, transferencia bancaria, MercadoPago y tarjetas de débito/crédito. Para servicios remotos, el pago se puede hacer antes o después del trabajo según prefieras.'
    },
    {
      question: '¿Podés recuperar archivos borrados?',
      answer: 'En la mayoría de casos sí. La recuperación depende del tiempo transcurrido y el uso que se le haya dado al disco. Tengo herramientas especializadas para recuperar fotos, documentos y archivos importantes.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600">Resuelve tus dudas antes de contactarme</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 py-5 bg-white">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
