
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors"
          >
            Daniel
          </button>
          
          <ul className="hidden md:flex space-x-8">
            {[
              { name: 'Servicios', id: 'servicios' },
              { name: 'Sobre Mí', id: 'sobre-mi' },
              { name: 'Testimonios', id: 'testimonios' },
              { name: 'FAQ', id: 'faq' },
              { name: 'Contacto', id: 'contacto' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          
          <a 
            href="https://wa.me/5491131797343"
            className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium hover:bg-foreground/90 transition-all duration-200 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Contacto</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
