'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Abdul Hadi has been an exceptional experience. He is a highly skilled web developer with an impressive ability to bring ideas to life.",
    name: "Justin Carter",
    title: "Entrepreneur, Aussworks"
  },
  {
    quote: "Working with Abdul Hadi has been an exceptional experience. He is a highly skilled web developer with an impressive ability to bring ideas to life.",
    name: "Yunmin Shin",
    title: "Founder, Lyting"
  },
  {
    quote: "Abdul Hadi's expertise in web development transformed our online presence. Highly recommended!",
    name: "Asad Khan",
    title: "Business Owner, Import Export"
  },
  {
    quote: "Your work is truly impressive. You have created an excellent website. Great job, keep up the good work!",
    name: "Shaheer Ayaz",
    title: "Gym Owner"
  }
];

const TestimonialCard = ({ quote, name, title }) => ( 
  <motion.div 
    className='bg-[#0c0c0e] rounded-lg m-5 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,102,0.15)] hover:scale-105'
    whileHover={{ scale: 1.05 }}
    // transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Quote className="h-8 w-8 text-[#00ff66] mb-4" />
    <blockquote className="text-lg italic mb-4 text-slate-200">
      {quote}
    </blockquote>
    <div className='flex items-center'>
      <div className='border border-[#00ff66] h-10 w-10 bg-[#103d17] rounded-full mr-2'></div>
      <div className='flex flex-col'>
        <h3 className='font-bold text-white'>{name}</h3>
        <p className='text-sm text-slate-300 italic'>{title}</p>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialSection() {
  return (
    <section className='flex flex-col justify-center items-center pt-8 pb-8 bg-[#0a2816] rounded-lg mb-10 mx-4 md:mx-18 lg:mx-28 pl-10 pr-10'>
      <motion.h2 
        className='text-4xl font-bold text-white mb-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 w-full'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>
      <motion.p 
        className='text-xl font-bold text-white text-center mt-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        With over 4 years of experience, we've helped 50+ clients achieve their goals.
      </motion.p>
      <motion.div 
        className="flex justify-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-400 h-6 w-6 fill-current" />
        ))}
      </motion.div>
    </section>
  );
}

