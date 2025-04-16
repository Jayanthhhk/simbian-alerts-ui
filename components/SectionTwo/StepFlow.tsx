'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const steps = [
  'Triaged & Reported – SOC Agent handled investigation and reporting',
  'Automated Response – Incident automatically contained',
  'Comprehensive Analysis – AI recognized patterns',
  'Accurate Detection – Zero false positives',
  '24/7 Coverage – No analyst fatigue',
];

export default function StepFlow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (activeStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setActiveStep(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  return (
    <div className="flex flex-col items-center space-y-6 mb-10">
      <div className="flex flex-wrap justify-center md:flex-nowrap gap-4 md:gap-6 max-w-5xl">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className={`rounded-2xl p-4 w-64 min-h-[100px] text-center border ${
              idx <= activeStep
                ? 'bg-green-100 text-green-700 border-green-400 shadow-md'
                : 'bg-gray-200 text-gray-500 border-gray-300'
            }`}
            initial={{ opacity: 0.2, scale: 0.9 }}
            animate={{ opacity: idx <= activeStep ? 1 : 0.4, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
          >
            <div className="font-medium">{step}</div>
          </motion.div>
        ))}
      </div>

      {/* Connector line */}
      <div className="w-full flex justify-center">
        <div className="w-[90%] h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-2" />
      </div>
    </div>
  );
}
