'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const expertiseData = [
  { title: 'React', description: 'Modern, interactive UIs' },
  { title: 'Next.js', description: 'Server-side rendering and static generation' },
  { title: 'Tailwind CSS', description: 'Responsive, utility-first designs' },
  { title: 'JavaScript', description: 'Dynamic, client-side functionality' },
  { title: 'Website Development', description: 'Crafting stunning user-friendly websites' },
  { title: 'SEO Optimization', description: 'Boost website visibility and traffic' },
  { title: 'HTML And CSS', description: 'Responsive, structured, and visually appealing.' },
  { title: 'Adobe XD', description: 'Designing interactive and user-friendly prototypes.' },
  { title: 'Digital Marketing', description: 'Driving online growth and engagement.' },
];

const ExpertiseCard = ({ title, description }) => (
  <motion.div
    className="group relative bg-[#0c0c0e] shadow-lg transform transition-all duration-100 hover:scale-102 border border-[#00ff66]/20 rounded-lg p-6 hover:border-[#00ff66] hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]"
    whileHover={{ scale: 1.05 }}
    // transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="flex flex-col h-full text-left">
      <p className="text-white group-hover:text-[#00ff66] text-xl font-bold mb-3 flex items-center">
        <CheckCircle className="w-6 h-6 mr-2" />
        {title}
      </p>
      <p className="text-slate-300 font-normal text-lg">
        {description}
      </p>
    </div>
  </motion.div>
);

export default function ExpertiseSection() {
  return (
    <div className="bg-[#04140b] lg:px-20 md:px-10 px-4 py-20 mb-10">
      <section className="text-center mb-20">
        <motion.h1 
          className="font-bold text-4xl mb-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Expertise
        </motion.h1>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExpertiseCard {...item} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

