
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Equipment from '../components/Equipment';
import QuoteSection from '../components/QuoteSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleFormChange = (equipment: string, city: string) => {
    setSelectedEquipment(equipment);
    setSelectedCity(city);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Equipment />
      <QuoteSection onFormChange={handleFormChange} />
      <Footer />
      <WhatsAppButton equipment={selectedEquipment} city={selectedCity} />
    </div>
  );
};

export default Index;
