import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, CalendarDays } from 'lucide-react';

interface ForecastToggleProps {
  forecastType: 'hourly' | 'daily';
  setForecastType: (type: 'hourly' | 'daily') => void;
}

const ForecastToggle: React.FC<ForecastToggleProps> = ({ forecastType, setForecastType }) => {
  return (
    <Card className="glass-card p-1">
      <div className="flex relative">
        <motion.div
          className="absolute h-full bg-white/20 rounded-md"
          initial={false}
          animate={{
            left: forecastType === 'hourly' ? '0%' : '50%',
            width: '50%',
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <Button
          variant="ghost"
          className={`flex-1 relative z-10 flex items-center justify-center gap-1 sm:gap-2 ${
            forecastType === 'hourly' ? 'text-white' : 'text-white/60'
          }`}
          onClick={() => setForecastType('hourly')}
        >
          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs sm:text-sm"
          >
            Hourly
          </motion.span>
        </Button>
        <Button
          variant="ghost"
          className={`flex-1 relative z-10 flex items-center justify-center gap-1 sm:gap-2 ${
            forecastType === 'daily' ? 'text-white' : 'text-white/60'
          }`}
          onClick={() => setForecastType('daily')}
        >
          <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs sm:text-sm"
          >
            Daily
          </motion.span>
        </Button>
      </div>
    </Card>
  );
};

export default ForecastToggle;
