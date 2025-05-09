
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-yellow-50 to-white py-20 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aluguel de Equipamentos para Construção Civil
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Encontre o melhor orçamento para <span className="font-semibold text-yellow-600">betoneiras</span> e outros equipamentos usando nossa tecnologia de inteligência artificial.
            </p>
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-md text-lg shadow-lg transition-all"
              onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar orçamento
            </Button>
          </div>
          
          <div className="hidden lg:block">
            <div className="w-full h-72 bg-gray-200 rounded-lg shadow-lg relative overflow-hidden">
              {/* Placeholder para imagem de uma betoneira */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Imagem ilustrativa de uma betoneira</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
