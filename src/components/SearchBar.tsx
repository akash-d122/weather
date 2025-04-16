import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, X, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import SearchSuggestions from './SearchSuggestions';
import { defaultLocations } from '@/data/mockWeatherData';

// Popular cities list
const popularCities = [
  'New York',
  'London',
  'Tokyo',
  'Paris',
  'Dubai',
  'Singapore',
  'Sydney',
  'Los Angeles',
  'Hong Kong',
  'Toronto'
];

interface SearchBarProps {
  onSearch: (location: string) => void;
  recentSearches: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopularCities, setShowPopularCities] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced search function
  const debouncedSearch = useCallback(
    (query: string) => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      
      // Simulate API call with setTimeout
      setTimeout(() => {
        const filtered = defaultLocations.filter(location =>
          location.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered.slice(0, 5));
        setIsLoading(false);
      }, 300);
    },
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, debouncedSearch]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowPopularCities(false);
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setActiveIndex(-1);
    setShowPopularCities(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => prev > -1 ? prev - 1 : prev);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      onSearch(suggestions[activeIndex]);
      setSearchQuery('');
      setSuggestions([]);
    } else if (e.key === 'Escape') {
      setSuggestions([]);
      setShowPopularCities(false);
    }
  };

  const handleSuggestionSelect = (suggestion: string) => {
    onSearch(suggestion);
    setSearchQuery('');
    setSuggestions([]);
    setShowPopularCities(false);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search for a city..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowPopularCities(true)}
            className="w-full pl-10 pr-10 py-6 bg-white/10 backdrop-blur-md border-none text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Search Suggestions */}
        <div className="absolute w-full mt-2">
          <SearchSuggestions
            suggestions={suggestions}
            onSelect={handleSuggestionSelect}
            activeIndex={activeIndex}
            isLoading={isLoading}
          />
        </div>

        {/* Popular Cities */}
        {showPopularCities && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute w-full mt-2"
          >
            <Card className="bg-white/10 backdrop-blur-md border-none shadow-lg">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3 text-white/70">
                  <TrendingUp className="w-4 h-4" />
                  <h3 className="text-sm font-medium">Popular Cities</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {popularCities.map((city) => (
                    <motion.button
                      key={city}
                      onClick={() => handleSuggestionSelect(city)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-3 py-2 text-left text-white hover:bg-white/20 rounded-md transition-colors duration-200 flex items-center gap-2"
                    >
                      <MapPin className="w-3 h-3 text-white/70" />
                      <span className="truncate">{city}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SearchBar;
