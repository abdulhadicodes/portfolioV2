'use client'

import React from 'react';
import { projects } from '../../data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useParams } from 'next/navigation';

export default function ProjectDetail() {
  const params = useParams(); // Get the params correctly
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div className="text-center text-2xl mt-10 text-white">Project not found</div>;
  }

  return (
    <>
    <Header/>
    <motion.div 
      className="max-w-4xl mx-auto mt-28  p-5 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/work" className="inline-flex items-center text-[#00ff66] hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all projects
      </Link>
      
      <motion.h1 
        className="text-4xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {project.name}
      </motion.h1>

      <motion.div 
        className="bg-[#04140b] rounded-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#00ff66]">Project Overview</h2>
        <p className="text-white mb-2"><span className="font-semibold">Type:</span> {project.type}</p>
        <p className="text-white mb-4"><span className="font-semibold">Duration:</span> {project.duration}</p>
        <p className="text-white">{project.description}</p>
      </motion.div>

      <div className="flex flex-wrap items-left">
  <motion.div
    className="bg-[#04140b] rounded-lg p-6 mb-8 w-full "
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <h2 className="text-2xl font-semibold mb-4 text-[#00ff66] text-left">
      Technologies Used
    </h2>
    <div className="flex flex-wrap gap-1 justify-left">
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm text-[#00FF66] bg-[#1C1C1C] border border-[#00FF66] rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
</div>


      <motion.div 
        className="bg-[#04140b] rounded-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#00ff66]">Challenges & Solutions</h2>
        <p className="text-white mb-2"><span className="font-semibold">Challenge:</span> {project.challenges}</p>
        <p className="text-white"><span className="font-semibold">Solution:</span> {project.solutions}</p>
      </motion.div>

      <motion.div 
        className="bg-[#04140b] rounded-lg p-10 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#00ff66]">Key Features & Functionality</h2>
        <div className="grid grid-cols-1  gap-6">
          {project.features.map((feature, index) => (
            <div key={index} className="bg-[#010d06] rounded-lg p-4 lg:h-[26rem]">
              <Image 
                src={feature.imageUrl} 
                width={1000} 
                height={100} 
                alt={name}
                className="rounded-lg mb-2"
              />
              <h3 className="text-white font-semibold mb-1">{feature.name}</h3>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="bg-[#04140b] rounded-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#00ff66]">Visuals & Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.visuals.map((visual, index) => (
            <Image 
              key={index}
              src={visual} 
              alt={name} 
              width={400} 
              height={300} 
              className="rounded-lg"
            />
          ))}
        </div>
        <a 
          href={project.demoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-4 text-[#00ff66] hover:underline"
        >
          View Live Demo
        </a>
      </motion.div>

      <motion.div 
        className="bg-[#04140b] rounded-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#00ff66]">Results & Impact</h2>
        <p className="text-white mb-4">{project.results}</p>
        <blockquote className="border-l-4 border-[#00ff66] pl-4 italic text-gray-300">
          "{project.testimonial}"
        </blockquote>
      </motion.div>

      
    </motion.div>
    <section className="bg-[#04140b] text-white px-10 py-20">
       <div className="max-w-7xl mx-auto flex gap-10 items-center flex-col lg:flex-row md:flex-row lg:gap-60">
         {/* Left Text Section */}
         <div>
           <p className="text-sm font-semibold tracking-widest mb-2 uppercase">Get in Touch</p>
           <h1 className="text-4xl font-bold">Want a similar project?</h1>
         </div>
         {/* Button Section */}
         <div>
           <Link href='/contact'
            className="px-6 py-3 border border-white text-white uppercase text-sm tracking-wider font-semibold hover:bg-white hover:text-black transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
}

