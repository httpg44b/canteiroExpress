import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface EquipmentCardProps {
  name: string;
  description: string;
  imageUrl: string;
  isHighlighted?: boolean;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ name, description, imageUrl, isHighlighted }) => {
  return (
    <Card className={`h-full transition-transform duration-300 hover:scale-105 ${
      isHighlighted ? 'border-yellow-500 border-2' : ''
    }`}>
      <CardContent className="p-6">
        <div className="h-32 mb-4 flex items-center justify-center overflow-hidden rounded-md">
          <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
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
      imageUrl: "https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-4524-61fb-a785-81c3e97d161e/raw?se=2025-05-09T20%3A08%3A38Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-09T09%3A38%3A42Z&ske=2025-05-10T09%3A38%3A42Z&sks=b&skv=2024-08-04&sig=NzL8QN6SEkW5EZNlIhfMeDUtEWle7x1DcRHen8hHscA%3D",
      isHighlighted: true
    },
    {
      name: "Betoneira 400 Litros",
      description: "Para obras de grande porte, com capacidade para produzir grandes volumes de concreto.",
      imageUrl: "https://th.bing.com/th/id/OIP.u6RwiDegvOkVGeWZgyKkTwHaH1?cb=iwc1&pid=ImgDet&w=179&h=189&c=7&dpr=1,3",
      isHighlighted: true
    },
    {
      name: "Compactador de Solo",
      description: "Perfeito para compactação de solos em fundações e obras de pavimentação.",
      imageUrl: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-be5c-622f-a2ae-2c89747cf3eb/raw?se=2025-05-09T20%3A20%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-09T11%3A16%3A21Z&ske=2025-05-10T11%3A16%3A21Z&sks=b&skv=2024-08-04&sig=utXw/vzEocc/tsA7q9pjOn69XrBeHzK9%2BXtCogcF6so%3D"
    },
    {
      name: "Andaimes",
      description: "Estruturas seguras e versáteis para trabalhos em altura com diversas configurações.",
      imageUrl: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-5204-61f5-aabe-42236bb4c97b/raw?se=2025-05-09T20%3A26%3A28Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-09T09%3A36%3A01Z&ske=2025-05-10T09%3A36%3A01Z&sks=b&skv=2024-08-04&sig=iXEEBj/XnME6xmq5V/8mRMjdHVTUvRqMxzJdzQO1PWw%3D"
    },
    {
      name: "Martelete Demolidor",
      description: "Equipamento potente para demolições e perfurações em concreto e alvenaria.",
      imageUrl: "https://sdmntprcentralus.oaiusercontent.com/files/00000000-5ee4-61f5-92ed-ef81d5c7dddb/raw?se=2025-05-09T20%3A31%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-09T09%3A22%3A49Z&ske=2025-05-10T09%3A22%3A49Z&sks=b&skv=2024-08-04&sig=wIWNGfXF5zY8pegiPkvOADkRZDc3HSEu7jtAsCC31Jg%3D"
    },
    {
      name: "Serra Circular",
      description: "Precisão e potência para cortes em madeira, ideal para carpintaria em obras.",
      imageUrl: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-c1c8-622f-9a56-5dfd94491a14/raw?se=2025-05-09T20%3A41%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-09T10%3A32%3A47Z&ske=2025-05-10T10%3A32%3A47Z&sks=b&skv=2024-08-04&sig=YVFmBd6ykAOSr8mab32YuTZlbXXkLadgTLul1Kb2hso%3D"
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
              imageUrl={equipment.imageUrl}
              isHighlighted={equipment.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
