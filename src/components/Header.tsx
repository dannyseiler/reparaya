
import React, { useState, useEffect } from 'react';
import { MessageCircle, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { name: 'Servicios', id: 'servicios' },
    { name: 'Sobre Mí', id: 'sobre-mi' },
    { name: 'Testimonios', id: 'testimonios' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contacto', id: 'contacto' }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      }`}>
        <nav className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors"
            >
              ReparaYa
            </button>
            
            <ul className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
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
            
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-lg border border-border bg-background hover:bg-accent transition-colors flex items-center justify-center"
                aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>
              
              <a 
                href="https://wa.me/5491131797343"
                className="hidden sm:flex bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium hover:bg-foreground/90 transition-all duration-200 items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Contacto
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-lg border border-border bg-background hover:bg-accent transition-colors flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 w-64 h-full bg-background border-l border-border transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-muted-foreground transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="https://wa.me/5491131797343"
                className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium mt-6"
              >
                <MessageCircle className="w-4 h-4" />
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
