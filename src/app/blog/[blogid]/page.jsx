'use client';

import { blogs } from '../../data/blog';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPost() {
  const { blogid } = useParams(); // Corrected param name

  console.log("Params from useParams:", blogid); // Debugging

  // Convert blogid to a string to match both string and number IDs
  const blog = blogs.find((b) => String(b.id) === String(blogid));

  if (!blog) {
    return <div className="text-center text-2xl mt-10 text-white">Blog post not found</div>;
  }

  return (
    <>
      <Header />
      <motion.div
        className="max-w-3xl mx-auto mt-36 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/blog" className="inline-flex items-center text-[#00ff66] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all posts
        </Link>

        <motion.h1
          className="text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {blog.title}
        </motion.h1>

        <motion.div
          className="flex items-center text-sm text-[#00ff66] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <User className="h-4 w-4 mr-1" />
          <span className="mr-4">{blog.author}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span className="mr-4">{blog.readTime}</span>
          <span>{blog.date}</span>
        </motion.div>

        <motion.div
          className="relative h-64 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          className="prose prose-invert max-w-none text-white mb-36"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {blog.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-2xl font-semibold text-[#00ff66] mt-6">{paragraph.replace('### ', '')}</h3>;
            } else if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-3xl font-bold mt-8">{paragraph.replace('## ', '')}</h2>;
            } else if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-4xl font-bold mt-10">{paragraph.replace('# ', '')}</h1>;
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
}
