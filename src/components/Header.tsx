
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-yellow-600">
            Canteiro<span className="text-gray-800">Express</span>
          </h1>
        </div>

        {isMobile ? (
          <>
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 hover:text-yellow-600 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md">
                <nav className="flex flex-col py-2">
                  <a href="#sobre" className="px-4 py-3 hover:bg-gray-100 transition-colors" onClick={toggleMenu}>Sobre</a>
                  <a href="#como-funciona" className="px-4 py-3 hover:bg-gray-100 transition-colors" onClick={toggleMenu}>Como Funciona</a>
                  <a href="#equipamentos" className="px-4 py-3 hover:bg-gray-100 transition-colors" onClick={toggleMenu}>Equipamentos</a>
                  <a href="#orcamento" className="px-4 py-3 hover:bg-gray-100 transition-colors" onClick={toggleMenu}>Orçamento</a>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex space-x-8">
            <a href="#sobre" className="text-gray-800 hover:text-yellow-600 font-medium transition-colors">Sobre</a>
            <a href="#como-funciona" className="text-gray-800 hover:text-yellow-600 font-medium transition-colors">Como Funciona</a>
            <a href="#equipamentos" className="text-gray-800 hover:text-yellow-600 font-medium transition-colors">Equipamentos</a>
            <a href="#orcamento" className="text-gray-800 hover:text-yellow-600 font-medium transition-colors">Orçamento</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
