import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

interface SearchSuggestionsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  activeIndex: number;
  isLoading?: boolean;
}

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  onSelect,
  activeIndex,
  isLoading = false
}) => {
  return (
    <AnimatePresence>
      {suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute w-full mt-2 bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden z-50"
        >
          {isLoading ? (
            <div className="p-4 text-center text-white/70">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mx-auto"></div>
            </div>
          ) : (
            <ul className="max-h-60 overflow-y-auto overflow-x-hidden">
              {suggestions.map((suggestion, index) => (
                <motion.li
                  key={suggestion}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => onSelect(suggestion)}
                    className={`w-full px-4 py-3 text-left text-white hover:bg-white/20 transition-colors duration-200 flex items-center gap-3 ${
                      index === activeIndex ? 'bg-white/20' : ''
                    }`}
                  >
                    <Search className="w-4 h-4 text-white/70 flex-shrink-0" />
                    <span className="truncate">{suggestion}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchSuggestions; 