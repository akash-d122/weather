
import React from 'react';
import { WeatherData } from '@/data/mockWeatherData';
import { Card } from '@/components/ui/card';
import { getWeatherIcon } from '@/utils/weatherUtils';
import { Droplets, ArrowDown, ArrowUp } from 'lucide-react';

interface DailyForecastProps {
  weatherData: WeatherData;
}

const DailyForecast: React.FC<DailyForecastProps> = ({ weatherData }) => {
  const dailyData = weatherData.forecast.daily;
  
  // Format date to display day name
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <Card className="glass-card p-4">
      <h3 className="text-lg font-medium mb-3">7-Day Forecast</h3>
      <div className="space-y-2">
        {dailyData.map((day, index) => {
          const WeatherIcon = getWeatherIcon(day.day.condition.text);
          const isToday = index === 0;
          
          return (
            <div 
              key={index} 
              className={`flex items-center justify-between p-3 rounded-lg 
                ${isToday ? 'bg-primary/20' : 'bg-white/10 hover:bg-white/20 hover:shadow-md'} 
                transition-all duration-300 animate-fade-in hover:scale-[1.02]`}
              style={{ animationDelay: `${index * 0.05}s` }}
              tabIndex={0}
            >
              <div className="flex items-center">
                <div className="w-24">
                  <p className="text-sm font-medium">
                    {isToday ? 'Today' : formatDate(day.date)}
                  </p>
                </div>
                <WeatherIcon className="h-6 w-6 mx-3 text-primary" />
                <p className="text-sm hidden md:block">{day.day.condition.text}</p>
              </div>
              
              <div className="flex items-center gap-4">
                {day.day.chance_of_rain > 0 && (
                  <div className="flex items-center text-sm text-blue-500">
                    <Droplets className="h-3 w-3 mr-1" />
                    <span>{day.day.chance_of_rain}%</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-sm text-blue-400">
                    <ArrowDown className="h-3 w-3 mr-1" />
                    <span>{day.day.mintemp_c}°</span>
                  </div>
                  <div className="flex items-center text-sm text-orange-400">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>{day.day.maxtemp_c}°</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default DailyForecast;
