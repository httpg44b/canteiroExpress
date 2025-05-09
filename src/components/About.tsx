
import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Sobre a Canteiro Express</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 text-center">
            A <strong>Canteiro Express</strong> nasceu para revolucionar o mercado de aluguel de equipamentos para construção civil, 
            com foco especial em betoneiras e soluções completas para canteiros de obras.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Nossa Missão</h3>
              <p className="text-gray-600">
                Otimizar o processo de aluguel de equipamentos, oferecendo soluções personalizadas e os melhores preços do mercado.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tecnologia</h3>
              <p className="text-gray-600">
                Utilizamos inteligência artificial para encontrar o equipamento ideal para sua obra, no melhor preço possível.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compromisso</h3>
              <p className="text-gray-600">
                Garantimos equipamentos de qualidade, bem mantidos e entregues pontualmente para não atrasar sua obra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
