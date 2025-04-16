
import React, { useRef } from 'react';
import { WeatherData } from '@/data/mockWeatherData';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getWeatherIcon } from '@/utils/weatherUtils';
import { Droplets, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HourlyForecastProps {
  weatherData: WeatherData;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ weatherData }) => {
  const hourlyData = weatherData.forecast.hourly;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Card className="glass-card p-4 relative">
      <h3 className="text-lg font-medium mb-3 px-2">24-Hour Forecast</h3>
      
      <div className="relative">
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 backdrop-blur-sm h-8 w-8 -ml-4 hover:bg-white/70 transition-colors"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <ScrollArea className="w-full pb-4">
          <div className="flex gap-4 px-2 pb-2" ref={scrollContainerRef}>
            {hourlyData.map((hour, index) => {
              const WeatherIcon = getWeatherIcon(hour.condition.text);
              
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center min-w-[80px] p-3 rounded-lg transition-all 
                    bg-white/10 hover:bg-white/20 hover:shadow-lg hover:scale-105 
                    animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  tabIndex={0}
                >
                  <p className="text-sm font-medium mb-1">{hour.time}</p>
                  <WeatherIcon className="h-8 w-8 my-2 text-primary" />
                  <p className="font-semibold">{hour.temp_c}°C</p>
                  {hour.chance_of_rain > 0 && (
                    <div className="flex items-center mt-1 text-xs text-blue-500">
                      <Droplets className="h-3 w-3 mr-1" />
                      <span>{hour.chance_of_rain}%</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 backdrop-blur-sm h-8 w-8 -mr-4 hover:bg-white/70 transition-colors"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default HourlyForecast;
