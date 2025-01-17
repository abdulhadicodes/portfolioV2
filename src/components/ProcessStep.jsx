'use client'
import { motion } from 'framer-motion';

import React from 'react';
import { Lightbulb, FileSearch, PenTool, Cpu, TestTube, Rocket, RefreshCw } from 'lucide-react';

const iconMap = {
  Lightbulb,
  FileSearch,
  PenTool,
  Cpu,
  TestTube,
  Rocket,
  RefreshCw,
};

const ProcessStep = ({ icon, title, description, index, totalSteps }) => {
  const Icon = iconMap[icon] || Lightbulb;

  return (
    <motion.div 
    className="flex items-start space-x-4 bg-zinc-800/50 p-6 rounded-xl relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
        <div
          className="h-full bg-[#00ff66] transition-all duration-500"
          style={{ width: `${((index + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>

      {/* Content */}
      <div className="flex items-center gap-4 ">
        {/* Circular Icon */}
        <div className="bg-[#00ff66] p-3 rounded-full flex items-center justify-center">
          <Icon className="h-8 w-8 text-black" />
        </div>

        {/* Text */}
        <div> 
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      </motion.div>
 
  );
};

export default ProcessStep;
