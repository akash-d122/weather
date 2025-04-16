
import {
  Sun,
  Cloud,
  CloudSun,
  CloudMoon,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Moon,
  LucideIcon,
} from 'lucide-react';
import { WeatherCondition } from '@/data/mockWeatherData';

export const getWeatherIcon = (condition: WeatherCondition, isDay: boolean = true): LucideIcon => {
  switch (condition) {
    case 'Sunny':
      return Sun;
    case 'Partly Cloudy':
      return isDay ? CloudSun : CloudMoon;
    case 'Cloudy':
      return Cloud;
    case 'Rainy':
      return CloudRain;
    case 'Stormy':
      return CloudLightning;
    case 'Snowy':
      return CloudSnow;
    case 'Clear':
      return isDay ? Sun : Moon;
    default:
      return Sun;
  }
};
