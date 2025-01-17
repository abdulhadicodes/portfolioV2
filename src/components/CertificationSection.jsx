import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CertificationModal } from './CertificationModal';
import Link  from 'next/link';

const certificates = [
  {
    name: "JavaScript Certification",
    issuer: "HackerRank",
    date: "January 2023",
    skills: ["JavaScript", "Web Development"]
  },
  {
    name: "The Fundamentals Of Digital Marketing",
    issuer: "Google",
    date: "February 2023",
    skills: ["Digital Marketing", "Marketing Strategies"]
  },
  {
    name: "The Fundamentals Of Web Development",
    issuer: "SoloLearn",
    date: "February 2023",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Responsive Web Design",
    issuer: "SoloLearn",
    date: "February 2023",
    skills: ["Responsive Design", "Web Development"]
  }
];

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

export function CertificationSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-12 bg-[#0a2816] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            className="text-3xl font-bold text-emerald-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h2>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.slice(0, 3).map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div animate={floatingAnimation} className="h-full">
                <div className="bg-[#0c0c0e] border-emerald-700 rounded-lg overflow-hidden h-full">
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-emerald-100">{cert.name}</h3>
                    <p className="text-slate-100">{cert.issuer} - {cert.date}</p>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} animate={pulseAnimation}>
                          <span className="inline-block bg-[#103d17] text-emerald-100 px-2 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
            </motion.div>
          ))}
        </div>
        
      </div>
      <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex justify-center mt-5'
          >
            <button onClick={() => setIsModalOpen(true)}
        
        className="px-6 py-3 text-[#00ff66] bg-transparent border-2 border-[#00ff66]
          text-lg font-medium transition-all 
          hover:bg-[#00ff66] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]
          focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-black"
          
        
        
      >
        View Work
      </button>
          </motion.div>
      <CertificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificates={certificates}
      />
    </section>
  );
}

