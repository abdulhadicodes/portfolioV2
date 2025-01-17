'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import black from '../../public/black.png'
import ProfilePic from '../../public/ProfilePic.jpg'

function Intro() {
  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      <Image
        src={black}
        alt=""
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="pointer-events-none"
      />
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 pl-5"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-green-600 uppercase bg-green-600/10 rounded-full">
              Crafting digital solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Innovative web development
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              At Abdul Hadi, we specialize in creating stunning and functional
              websites tailored to your business needs. Based in Karachi, PK, our
              expert team combines creativity with the latest technology to
              deliver digital solutions that elevate your brand. Whether you're a
              startup or an established business, we are dedicated to helping you
              succeed online with our comprehensive web development services.
            </p>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-[#00ff66] bg-green-600 rounded-full hover:bg-green-500 transition-colors duration-300 px-6 py-3 text-[#00ff66] bg-transparent border-2 border-[#00ff66]
          text-lg font-medium transition-all duration-300
          hover:bg-[#00ff66] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]
          focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src={ProfilePic}
              alt="Abdul Hadi"
              
              width={400}
              objectFit="contain"
              className="rounded-lg shadow-2xl"
              
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

