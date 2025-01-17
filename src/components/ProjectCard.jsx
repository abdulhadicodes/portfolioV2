'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const ProjectCard = ({ id, name, description, technologies, imageUrl }) => {
  return (
    <motion.div 
      className="bg-[#0F0F0F] rounded-xl overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-[220px] bg-white rounded-t-xl overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={600}
            height={400}
            className="object-cover"
          />
        ) : (
          <div className="flex justify-center items-center h-full">
            <ImageIcon className="h-12 w-12 text-[#00ff66]" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-zinc-800 text-[#00ff66] text-xs font-medium px-3 py-1 rounded-lg shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/work/${id}`}>
          <motion.div
            className="inline-flex items-center text-[#00ff66] text-sm font-medium"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Learn more
            <svg 
              className="ml-2 w-4 h-4"
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.div>
        </Link>
      </div>  
    </motion.div>
  );
};

export default ProjectCard;

