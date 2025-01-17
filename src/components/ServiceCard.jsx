'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, ShoppingCart, Search, Smartphone, Palette, Megaphone } from 'lucide-react';

const iconMap = {
  Code,
  ShoppingCart,
  Search,
  Smartphone,
  Palette,
  Megaphone,
};

const ServiceCard = ({ icon, title, description }) => {
  const Icon = iconMap[icon] || Code; // Default to Code if icon not found

  return (
    <motion.div 
      className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-[#00ff66] hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]"
      whileHover={{ scale: 1.03 }}
      // transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {/* Render Icon Dynamically */}
      <Icon className="h-12 w-12 text-[#00ff66] mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>
      {/* <motion.a
        href="#"
        className="inline-flex items-center text-[#00ff66] hover:text-[#00ff66]/80 text-sm font-medium transition-colors duration-200"
        whileHover={{ x: 5 }}
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4" />
      </motion.a> */}
    </motion.div>
  );
};

export default ServiceCard;
