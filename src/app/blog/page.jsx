'use client'

import { motion } from 'framer-motion';
import { blogs } from '../data/blog';
import BlogPostCard from '../../components/BlogPostCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import image from '../../../public/blog.jpg';

export default function BlogList() {
  return (
    <>
    <Header/>

    <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[80vh] flex items-center overflow-hidden "
      >
        <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${image.src})`, // Dynamically reference the imported image
                  backgroundAttachment: 'fixed' // Enable fixed positioning
                }}
              ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex justify-center text-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Our Blog
            </h1>
            <p className="text-xl sm:text-2xl">Insights, tips, and trends in web development</p>
          </motion.div>
        </div>
      </motion.header>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center text-white mt-20 mb-20 ">
              Latest Blogs
            </h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 pl-10 pr-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
       
        {blogs.map((blog, index) => (
          <BlogPostCard
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            date={blog.date}
            author={blog.author}
            imageUrl={blog.imageUrl}
            slug={blog.id}
          />
        ))}
      </motion.div>
    
    <Footer/>
    </>
  );
}

