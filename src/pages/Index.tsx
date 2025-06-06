
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
};

export default Index;
