
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { WeatherCondition, getRandomQuote } from '@/data/mockWeatherData';
import { Quote } from 'lucide-react';

interface WeatherQuoteProps {
  weatherCondition: WeatherCondition;
}

const WeatherQuote: React.FC<WeatherQuoteProps> = ({ weatherCondition }) => {
  const [quote, setQuote] = useState<string>('');
  const [isTyping, setIsTyping] = useState(true);
  const [displayedQuote, setDisplayedQuote] = useState('');
  
  useEffect(() => {
    setQuote(getRandomQuote(weatherCondition));
    setIsTyping(true);
    setDisplayedQuote('');
  }, [weatherCondition]);

  useEffect(() => {
    if (!quote) return;
    
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < quote.length) {
        setDisplayedQuote(prev => prev + quote.charAt(index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, [quote]);

  return (
    <Card className="glass-card p-4 animate-fade-in">
      <div className="flex items-center mb-2">
        <Quote className="h-5 w-5 mr-2 text-primary" />
        <h3 className="text-lg font-medium">Mood of the Day</h3>
      </div>
      <div className="min-h-[80px] flex items-center">
        <blockquote className="italic text-sm transition-all duration-300 hover:bg-white/10 p-3 rounded-lg w-full">
          "{displayedQuote}
          {isTyping && <span className="animate-pulse">|</span>}
        </blockquote>
      </div>
    </Card>
  );
};

export default WeatherQuote;
