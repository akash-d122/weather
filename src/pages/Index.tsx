import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import WeatherHeader from '@/components/WeatherHeader';
import WeatherDetails from '@/components/WeatherDetails';
import ForecastToggle from '@/components/ForecastToggle';
import HourlyForecast from '@/components/HourlyForecast';
import DailyForecast from '@/components/DailyForecast';
import ClothingRecommendation from '@/components/ClothingRecommendation';
import WeatherQuote from '@/components/WeatherQuote';
import WeatherParticles from '@/components/WeatherParticles';
import Onboarding from '@/components/Onboarding';
import { mockWeatherData, defaultLocations, getWeatherBackgroundClass, shouldShowWeatherParticles } from '@/data/mockWeatherData';
import { toast } from "@/components/ui/use-toast";

// Weather condition to background class mapping
const weatherBackgrounds = {
  'clear': 'bg-gradient-to-br from-blue-400 to-blue-600',
  'cloudy': 'bg-gradient-to-br from-gray-400 to-gray-600',
  'rainy': 'bg-gradient-to-br from-gray-600 to-blue-800',
  'snowy': 'bg-gradient-to-br from-blue-100 to-blue-300',
  'stormy': 'bg-gradient-to-br from-gray-800 to-blue-900',
  'foggy': 'bg-gradient-to-br from-gray-300 to-gray-500',
  'default': 'bg-gradient-to-br from-blue-500 to-blue-700'
};

const getWeatherBackground = (condition: string, isDay: number) => {
  const conditionLower = condition.toLowerCase();
  
  if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
    return isDay ? weatherBackgrounds.clear : 'bg-gradient-to-br from-blue-900 to-indigo-900';
  } else if (conditionLower.includes('cloud') || conditionLower.includes('overcast')) {
    return isDay ? weatherBackgrounds.cloudy : 'bg-gradient-to-br from-gray-700 to-gray-900';
  } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return weatherBackgrounds.rainy;
  } else if (conditionLower.includes('snow') || conditionLower.includes('sleet')) {
    return weatherBackgrounds.snowy;
  } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
    return weatherBackgrounds.stormy;
  } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
    return weatherBackgrounds.foggy;
  }
  
  return isDay ? weatherBackgrounds.default : 'bg-gradient-to-br from-blue-900 to-indigo-900';
};

const Index = () => {
  const [currentLocation, setCurrentLocation] = useState<string>(defaultLocations[0]);
  const [forecastType, setForecastType] = useState<'hourly' | 'daily'>('hourly');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [backgroundClass, setBackgroundClass] = useState(weatherBackgrounds.default);
  
  // Get the current weather data for the selected location
  const currentWeatherData = mockWeatherData[currentLocation] || mockWeatherData[defaultLocations[0]];
  
  // Update background when weather changes
  useEffect(() => {
    const newBackground = getWeatherBackground(
      currentWeatherData.current.condition.text,
      currentWeatherData.current.is_day
    );
    setBackgroundClass(newBackground);
  }, [currentWeatherData.current.condition.text, currentWeatherData.current.is_day]);
  
  // Whether to show weather particles (rain, snow) based on condition
  const showParticles = shouldShowWeatherParticles(currentWeatherData.current.condition.text);

  useEffect(() => {
    // Load recent searches from localStorage on initial render
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }

    // Check if user has seen onboarding before
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (hasSeenOnboarding) {
      setShowOnboarding(false);
    }
  }, []);

  const handleSearch = (location: string) => {
    if (mockWeatherData[location]) {
      setCurrentLocation(location);
      
      // Update recent searches
      const updatedSearches = [
        location,
        ...recentSearches.filter(search => search !== location)
      ].slice(0, 5);
      
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    } else {
      toast({
        title: "Location not found",
        description: `Weather data for "${location}" is not available.`,
        variant: "destructive",
      });
    }
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  return (
    <div className={`min-h-screen overflow-hidden relative text-white transition-colors duration-500 ${backgroundClass}`}>
      {/* Weather particles animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {showParticles && <WeatherParticles condition={currentWeatherData.current.condition.text} />}
      </div>
      
      {/* Main content wrapper */}
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 relative z-10">
        {/* Search Bar Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={handleSearch} recentSearches={recentSearches} />
          </div>
        </motion.div>

        {/* Weather Content Section */}
        <div className="max-w-5xl mx-auto">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 sm:mb-8"
          >
            <WeatherHeader weatherData={currentWeatherData} />
          </motion.header>

          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-8"
          >
            <WeatherDetails weatherData={currentWeatherData} />
            
            <motion.div 
              className="space-y-2 sm:space-y-4"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ForecastToggle forecastType={forecastType} setForecastType={setForecastType} />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={forecastType}
                  initial={{ opacity: 0, x: forecastType === 'hourly' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: forecastType === 'hourly' ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {forecastType === 'hourly' ? (
                    <HourlyForecast weatherData={currentWeatherData} />
                  ) : (
                    <DailyForecast weatherData={currentWeatherData} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ClothingRecommendation 
                  weatherCondition={currentWeatherData.current.condition.text} 
                  temperature={currentWeatherData.current.temp_c} 
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <WeatherQuote weatherCondition={currentWeatherData.current.condition.text} />
              </motion.div>
            </div>
          </motion.main>
        </div>
        
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-white/70"
        >
          <p className="animate-fade-in">ClimaSphere - Your Personalized Weather Companion © 2025</p>
        </motion.footer>
      </div>

      {/* Onboarding */}
      <AnimatePresence>
        {showOnboarding && (
          <Onboarding onComplete={handleOnboardingComplete} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
