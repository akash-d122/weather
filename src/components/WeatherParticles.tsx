import React from 'react';
import { WeatherCondition } from '@/data/mockWeatherData';

interface WeatherParticlesProps {
  condition: WeatherCondition;
}

const WeatherParticles: React.FC<WeatherParticlesProps> = ({ condition }) => {
  if (condition === 'Sunny') {
    return (
      <>
        {/* Sun rays */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`ray-${i}`}
            className="weather-sun-ray"
            style={{
              left: '50%',
              top: '20%',
              transform: `rotate(${i * 45}deg)`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Sun glow */}
        <div className="weather-sun-glow" />
        {/* Corner effect */}
        <div className="weather-corner-effect" />
      </>
    );
  }

  if (condition === 'Cloudy' || condition === 'Partly Cloudy') {
    return (
      <>
        {/* Cloud particles */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`cloud-${i}`}
            className="weather-cloud-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 20 + 10}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 15}s`,
            }}
          />
        ))}
        {/* Corner effect */}
        <div className="weather-corner-effect" />
      </>
    );
  }

  if (condition === 'Rainy' || condition === 'Stormy') {
    return (
      <>
        {/* Rain particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`rain-${i}`}
            className="weather-rain-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 15 + 10}px`,
              animationDelay: `${Math.random() * 1.5}s`,
              animationDuration: `${Math.random() * 0.8 + 0.7}s`,
            }}
          />
        ))}
        {/* Corner effect */}
        <div className="weather-corner-effect" />
      </>
    );
  }
  
  if (condition === 'Snowy') {
    return (
      <>
        {/* Snow particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`snow-${i}`}
            className="weather-snow-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 8 + 6}s`,
            }}
          />
        ))}
        {/* Corner effect */}
        <div className="weather-corner-effect" />
      </>
    );
  }
  
  return null;
};

export default WeatherParticles;
