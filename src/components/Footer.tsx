
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-yellow-500">Canteiro</span>Express
            </h3>
            <p className="text-gray-400">
              Soluções inteligentes para aluguel de equipamentos de construção
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                <span>(11) 95133-8478</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-yellow-500" />
                <span>contato@canteiroexpress.com.br</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="hover:text-yellow-500 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-yellow-500 transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#equipamentos" className="hover:text-yellow-500 transition-colors">Equipamentos</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-yellow-500 transition-colors">Solicitar Orçamento</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Canteiro Express. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
