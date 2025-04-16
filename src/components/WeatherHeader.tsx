import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { getWeatherIcon } from '@/utils/weatherUtils';

interface WeatherHeaderProps {
  weatherData: {
    location: {
      name: string;
      country: string;
      lat: number;
      lon: number;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
      feelslike_c: number;
      wind_kph: number;
      humidity: number;
      is_day: number;
    };
  };
}

const WeatherHeader: React.FC<WeatherHeaderProps> = ({ weatherData }) => {
  const WeatherIcon = getWeatherIcon(weatherData.current.condition.text, weatherData.current.is_day === 1);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-card p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center sm:text-left w-full sm:w-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{weatherData.location.name}</h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80">
              {weatherData.location.country}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
              {Math.round(weatherData.current.temp_c)}°
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-4xl sm:text-5xl"
              >
                <WeatherIcon />
              </motion.div>
              <span className="text-sm sm:text-base md:text-lg font-medium text-center sm:text-left">
                {weatherData.current.condition.text}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:gap-4 text-center sm:text-left w-full sm:w-auto"
          >
            <div className="glass-card p-2 rounded-lg">
              <p className="text-xs sm:text-sm text-white/70">Feels Like</p>
              <p className="text-base sm:text-lg font-medium">{Math.round(weatherData.current.feelslike_c)}°</p>
            </div>
            <div className="glass-card p-2 rounded-lg">
              <p className="text-xs sm:text-sm text-white/70">Wind</p>
              <p className="text-base sm:text-lg font-medium">{weatherData.current.wind_kph} km/h</p>
            </div>
            <div className="glass-card p-2 rounded-lg">
              <p className="text-xs sm:text-sm text-white/70">Humidity</p>
              <p className="text-base sm:text-lg font-medium">{weatherData.current.humidity}%</p>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default WeatherHeader;
