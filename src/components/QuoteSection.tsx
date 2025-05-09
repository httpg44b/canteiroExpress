
import React from 'react';
import QuoteForm from './QuoteForm';

interface QuoteSectionProps {
  onFormChange: (equipment: string, city: string) => void;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ onFormChange }) => {
  return (
    <section id="orcamento" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Solicitar Orçamento</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Preencha o formulário abaixo para receber um orçamento personalizado 
            com as melhores opções para seu projeto.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <QuoteForm onFormChange={onFormChange} />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
