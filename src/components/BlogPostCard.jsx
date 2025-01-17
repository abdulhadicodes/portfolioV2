import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogPostCard = ({ title, excerpt, date, author, imageUrl, slug }) => {
  return (
    <motion.div 
      className="bg-[#04140b] rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <p className="text-[#00ff66] text-sm mb-2">{date} • {author}</p>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <Link href={`/blog/${slug}`} passHref>
          <motion.span
            className="text-[#00ff66] font-medium hover:underline cursor-pointer"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Read More →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;

