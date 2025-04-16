import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    {
      title: "Welcome to ClimaSphere",
      description: "Your personalized weather companion with a beautiful, intuitive interface.",
      icon: "🌤️"
    },
    {
      title: "Real-time Weather Updates",
      description: "Get instant access to current conditions, hourly forecasts, and detailed weather insights.",
      icon: "⏱️"
    },
    {
      title: "Smart Recommendations",
      description: "Receive personalized clothing suggestions and weather-based activity recommendations.",
      icon: "👕"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md p-6"
          >
            <Card className="p-6 space-y-6">
              <motion.div
                key={step}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="text-center space-y-4"
              >
                <div className="text-6xl mb-4">{steps[step].icon}</div>
                <h2 className="text-2xl font-bold">{steps[step].title}</h2>
                <p className="text-muted-foreground">{steps[step].description}</p>
              </motion.div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === step ? 'bg-primary' : 'bg-muted'
                      }`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: index === step ? 1.2 : 1 }}
                    />
                  ))}
                </div>
                <Button onClick={handleNext}>
                  {step === steps.length - 1 ? "Get Started" : "Next"}
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Onboarding; 