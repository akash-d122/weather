
import React from 'react';
import { WeatherCondition } from '@/data/mockWeatherData';

interface WeatherParticlesProps {
  condition: WeatherCondition;
}

const WeatherParticles: React.FC<WeatherParticlesProps> = ({ condition }) => {
  if (condition === 'Rainy' || condition === 'Stormy') {
    return (
      <>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`rain-${i}`}
            className="weather-rain-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 10 + 10}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 0.5 + 1}s`,
            }}
          />
        ))}
      </>
    );
  }
  
  if (condition === 'Snowy') {
    return (
      <>
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`snow-${i}`}
            className="weather-snow-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          />
        ))}
      </>
    );
  }
  
  return null;
};

export default WeatherParticles;
