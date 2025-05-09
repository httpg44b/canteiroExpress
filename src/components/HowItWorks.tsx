
import React from 'react';
import { Search, Map, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-yellow-500" />,
      title: "Escolha o Equipamento",
      description: "Selecione o tipo de equipamento que você precisa para sua obra, com destaque para nossas betoneiras de diversos tamanhos."
    },
    {
      icon: <Map className="w-12 h-12 text-yellow-500" />,
      title: "Indique a Cidade",
      description: "Informe onde será sua obra para que possamos encontrar os equipamentos disponíveis mais próximos de você."
    },
    {
      icon: <ArrowRight className="w-12 h-12 text-yellow-500" />,
      title: "Receba o Melhor Orçamento",
      description: "Nossa inteligência artificial encontra as melhores opções de preço e disponibilidade para atender sua necessidade."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Como Funciona</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Encontre o equipamento perfeito para sua obra em apenas três passos simples.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg shadow-md text-center h-full flex flex-col items-center">
                <div className="mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-yellow-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
