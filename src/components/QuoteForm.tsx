
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface FormValues {
  equipmentType: string;
  city: string;
}

interface QuoteFormProps {
  onFormChange: (equipment: string, city: string) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onFormChange }) => {
  const form = useForm<FormValues>({
    defaultValues: {
      equipmentType: '',
      city: '',
    },
  });

  const equipmentOptions = [
    { value: 'betoneira-120', label: 'Betoneira 120 Litros' },
    { value: 'betoneira-400', label: 'Betoneira 400 Litros' },
    { value: 'compactador', label: 'Compactador de Solo' },
    { value: 'andaime', label: 'Andaimes' },
    { value: 'martelete', label: 'Martelete Demolidor' },
    { value: 'serra', label: 'Serra Circular' },
  ];

  const cityOptions = [
    { value: 'sao-paulo', label: 'São Paulo' },
    { value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
    { value: 'belo-horizonte', label: 'Belo Horizonte' },
    { value: 'brasilia', label: 'Brasília' },
    { value: 'curitiba', label: 'Curitiba' },
    { value: 'salvador', label: 'Salvador' },
  ];

  const handleFormChange = (fieldName: keyof FormValues, value: string) => {
    form.setValue(fieldName, value);
    
    const currentValues = form.getValues();
    const equipment = equipmentOptions.find(e => e.value === currentValues.equipmentType)?.label || '';
    const city = cityOptions.find(c => c.value === currentValues.city)?.label || '';
    
    if (equipment && city) {
      onFormChange(equipment, city);
    }
  };

  const onSubmit = (data: FormValues) => {
    const equipment = equipmentOptions.find(e => e.value === data.equipmentType)?.label;
    const city = cityOptions.find(c => c.value === data.city)?.label;
    
    if (equipment && city) {
      toast({
        title: 'Orçamento solicitado!',
        description: `Você solicitou um orçamento para ${equipment} em ${city}`,
      });
      
      // Abrir o WhatsApp com a mensagem pré-preenchida
      const message = `Olá! Preciso de um orçamento para alugar uma ${equipment} em ${city}.`;
      const whatsappUrl = `https://wa.me/5511951338478?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="equipmentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Tipo de Equipamento</FormLabel>
                <FormControl>
                  <Select 
                    onValueChange={(value) => handleFormChange('equipmentType', value)}
                    value={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o equipamento" />
                    </SelectTrigger>
                    <SelectContent>
                      {equipmentOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Cidade</FormLabel>
                <FormControl>
                  <Select 
                    onValueChange={(value) => handleFormChange('city', value)}
                    value={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione a cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      {cityOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-lg"
          >
            Solicitar Orçamento
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QuoteForm;
