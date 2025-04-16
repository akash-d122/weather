
import React from 'react';
import { Card } from '@/components/ui/card';
import { WeatherCondition, clothingRecommendations } from '@/data/mockWeatherData';
import { Shirt, Umbrella, Thermometer, Sun, Wind } from 'lucide-react';

interface ClothingRecommendationProps {
  weatherCondition: WeatherCondition;
  temperature: number;
}

const ClothingRecommendation: React.FC<ClothingRecommendationProps> = ({ weatherCondition, temperature }) => {
  const recommendation = clothingRecommendations[weatherCondition];

  const getTemperatureSpecificAdvice = (temp: number): string => {
    if (temp >= 30) {
      return "It's very hot! Wear lightweight, breathable fabrics and stay hydrated.";
    } else if (temp >= 25) {
      return "It's quite warm. Light clothing is recommended, and don't forget sun protection.";
    } else if (temp >= 20) {
      return "Pleasant temperature. Short sleeves should be comfortable for most activities.";
    } else if (temp >= 15) {
      return "It's mild. Consider a light sweater or long sleeves, especially in the evening.";
    } else if (temp >= 10) {
      return "It's cool. A jacket or light coat would be appropriate.";
    } else if (temp >= 5) {
      return "It's cold. Wear layers, a warm coat, and consider a hat and gloves.";
    } else {
      return "It's very cold! Bundle up with a heavy coat, layers, hat, gloves, and a scarf.";
    }
  };

  const getClothingIcon = () => {
    if (weatherCondition === 'Rainy' || weatherCondition === 'Stormy') {
      return <Umbrella className="h-5 w-5 mr-2 text-primary" />;
    } else if (temperature >= 25) {
      return <Sun className="h-5 w-5 mr-2 text-primary" />;
    } else if (temperature <= 10) {
      return <Thermometer className="h-5 w-5 mr-2 text-primary" />;
    } else if (weatherCondition === 'Windy') {
      return <Wind className="h-5 w-5 mr-2 text-primary" />;
    } else {
      return <Shirt className="h-5 w-5 mr-2 text-primary" />;
    }
  };

  return (
    <Card className="glass-card p-4 animate-fade-in">
      <div className="flex items-center mb-2">
        {getClothingIcon()}
        <h3 className="text-lg font-medium">Clothing Recommendation</h3>
      </div>
      <div className="space-y-2">
        <p className="animate-fade-in transition-all duration-300 hover:bg-white/10 p-2 rounded-lg">{recommendation}</p>
        <p className="text-sm text-muted-foreground animate-fade-in transition-all duration-300 hover:bg-white/10 p-2 rounded-lg" style={{ animationDelay: "0.2s" }}>
          {getTemperatureSpecificAdvice(temperature)}
        </p>
      </div>
    </Card>
  );
};

export default ClothingRecommendation;
