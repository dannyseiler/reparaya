
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md'
    } border-b border-gray-100`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-xl md:text-2xl font-bold text-tech-blue hover:scale-105 transition-transform"
          >
            💻 Servicio Técnico Daniel
          </button>
          
          <ul className="hidden md:flex space-x-8">
            {[
              { name: 'Inicio', id: 'inicio' },
              { name: 'Servicios', id: 'servicios' },
              { name: 'Sobre Mí', id: 'sobre-mi' },
              { name: 'Testimonios', id: 'testimonios' },
              { name: 'FAQ', id: 'faq' },
              { name: 'Contacto', id: 'contacto' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-tech-blue font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          
          <a 
            href="https://wa.me/5491131797343"
            className="bg-whatsapp-gradient text-white px-4 py-2 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
