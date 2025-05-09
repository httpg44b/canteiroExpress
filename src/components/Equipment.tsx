
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface EquipmentCardProps {
  name: string;
  description: string;
  isHighlighted?: boolean;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ name, description, isHighlighted }) => {
  return (
    <Card className={`h-full transition-transform duration-300 hover:scale-105 ${
      isHighlighted ? 'border-yellow-500 border-2' : ''
    }`}>
      <CardContent className="p-6">
        <div className="h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Imagem do equipamento</span>
        </div>
        <h3 className={`text-xl font-semibold mb-2 ${isHighlighted ? 'text-yellow-600' : 'text-gray-800'}`}>
          {name}
          {isHighlighted && (
            <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full">
              Destaque
            </span>
          )}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const Equipment = () => {
  const equipments = [
    {
      name: "Betoneira 120 Litros",
      description: "Ideal para obras pequenas e médias, com alta produtividade e baixo consumo de energia.",
      isHighlighted: true
    },
    {
      name: "Betoneira 400 Litros",
      description: "Para obras de grande porte, com capacidade para produzir grandes volumes de concreto.",
      isHighlighted: true
    },
    {
      name: "Compactador de Solo",
      description: "Perfeito para compactação de solos em fundações e obras de pavimentação."
    },
    {
      name: "Andaimes",
      description: "Estruturas seguras e versáteis para trabalhos em altura com diversas configurações."
    },
    {
      name: "Martelete Demolidor",
      description: "Equipamento potente para demolições e perfurações em concreto e alvenaria."
    },
    {
      name: "Serra Circular",
      description: "Precisão e potência para cortes em madeira, ideal para carpintaria em obras."
    }
  ];

  return (
    <section id="equipamentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Principais Equipamentos</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Oferecemos uma ampla variedade de equipamentos para sua obra, com destaque para nossa linha completa de betoneiras.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {equipments.map((equipment, index) => (
            <EquipmentCard
              key={index}
              name={equipment.name}
              description={equipment.description}
              isHighlighted={equipment.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
