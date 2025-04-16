
import React from 'react';
import { WeatherData } from '@/data/mockWeatherData';
import { Card } from '@/components/ui/card';
import {
  ArrowDownRight,
  ArrowUpRight,
  Droplets,
  Thermometer,
  Wind,
  Compass,
  Sun,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface WeatherDetailsProps {
  weatherData: WeatherData;
  className?: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData, className }) => {
  return (
    <Card className={cn("glass-card p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in", className)}>
      <div className="flex items-center gap-3 group hover:bg-white/10 p-2 rounded-lg transition-colors">
        <div className="bg-primary/20 p-2 rounded-full text-primary group-hover:scale-110 transition-transform">
          <Thermometer className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground/70">Feels Like</p>
          <p className="text-xl font-semibold">
            {weatherData.current.feelslike_c}°C / {weatherData.current.feelslike_f}°F
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 group hover:bg-white/10 p-2 rounded-lg transition-colors">
        <div className="bg-primary/20 p-2 rounded-full text-primary group-hover:scale-110 transition-transform">
          <Wind className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground/70">Wind</p>
          <p className="text-xl font-semibold">
            {weatherData.current.wind_kph} km/h
          </p>
          <p className="text-xs text-foreground/60">Direction: {weatherData.current.wind_dir}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 group hover:bg-white/10 p-2 rounded-lg transition-colors">
        <div className="bg-primary/20 p-2 rounded-full text-primary group-hover:scale-110 transition-transform">
          <Droplets className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground/70">Humidity</p>
          <p className="text-xl font-semibold">{weatherData.current.humidity}%</p>
        </div>
      </div>

      <div className="flex items-center gap-3 group hover:bg-white/10 p-2 rounded-lg transition-colors">
        <div className="bg-primary/20 p-2 rounded-full text-primary group-hover:scale-110 transition-transform">
          <ArrowUpRight className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground/70">Max Temperature</p>
          <p className="text-xl font-semibold">
            {weatherData.forecast.daily[0].day.maxtemp_c}°C / {weatherData.forecast.daily[0].day.maxtemp_f}°F
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 group hover:bg-white/10 p-2 rounded-lg transition-colors">
        <div className="bg-primary/20 p-2 rounded-full text-primary group-hover:scale-110 transition-transform">
          <ArrowDownRight className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground/70">Min Temperature</p>
          <p className="text-xl font-semibold">
            {weatherData.forecast.daily[0].day.mintemp_c}°C / {weatherData.forecast.daily[0].day.mintemp_f}°F
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 group hover:bg-white/10 p-2 rounded-lg transition-colors">
        <div className="bg-primary/20 p-2 rounded-full text-primary group-hover:scale-110 transition-transform">
          <Sun className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground/70">UV Index</p>
          <p className="text-xl font-semibold">{weatherData.current.uv}</p>
          <p className="text-xs text-foreground/60">
            {weatherData.current.uv <= 2 ? 'Low' : 
             weatherData.current.uv <= 5 ? 'Moderate' : 
             weatherData.current.uv <= 7 ? 'High' : 
             weatherData.current.uv <= 10 ? 'Very High' : 'Extreme'}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default WeatherDetails;
