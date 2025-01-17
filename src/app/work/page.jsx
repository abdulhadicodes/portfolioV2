// import Header from "../../components/Header.jsx";
// import Hero from "../../components/Hero.jsx";
// import Intro from "../../components/Intro.jsx";
// import Services from "../../components/Services.jsx";
// import Contact from "../../components/Contact.jsx";
// import Footer from "../../components/Footer.jsx";
// import React from 'react';
// import Link from "next/link";
// import { projects } from '../data/projects.js';
// import work from '../../../public/work.jpg';
// import {CardComponent} from '../../components/CardComponent.jsx'
// import { motion } from "framer-motion";
// import { ArrowRight } from 'lucide-react';


// export default function Work() {
//   return (
//     <>
//     <Header />
//     {/* Hero Section */}
//     <header className="relative h-[90vh] flex items-center overflow-hidden">
//       {/* Fixed Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${work.src})`, // Dynamically reference the imported image
//           backgroundAttachment: 'fixed' // Enable fixed positioning
//         }}
//       ></div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-70" />

//       {/* Content */}
//       <div className="container relative z-10 mx-auto flex justify-center text-center align-middle">
//         <div className="text-white ">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
//             Unlock your digital potential
//           </h1>
//           <p className="text-xl sm:text-2xl mb-5">Transform your ideas into reality</p>
//           <Link href='#' className="px-6 py-3 text-[#00ff66] bg-transparent border-2 border-[#00ff66]
//           text-lg font-medium transition-all duration-300
//           hover:bg-[#00ff66] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]
//           focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-black">
//         View Work
//       </Link>
//         </div>
//       </div>
//     </header>

//     <section className="grid grid-cols-1 bg-black md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-6 px-14 py-5 lg:px-28 pt-32 pb-32">
//     <motion.div 
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         {projects.map((project) => (
//           <CardComponent
//             key={project.id}
//             id={project.id}
//             name={project.name}
//             description={project.description}
//             technologies={project.technologies}
//           />
//         ))}
//       </motion.div>
// </section>




// <section className="bg-[#04140b] text-white px-10 py-20">
//       <div className="max-w-7xl mx-auto flex gap-10 items-center flex-col lg:flex-row md:flex-row lg:gap-60">
//         {/* Left Text Section */}
//         <div>
//           <p className="text-sm font-semibold tracking-widest mb-2 uppercase">Get in Touch</p>
//           <h1 className="text-4xl font-bold">Let&apos;s bring your vision to life!</h1>
//         </div>
//         {/* Button Section */}
//         <div>
//           <Link href='/contact'
//             className="px-6 py-3 border border-white text-white uppercase text-sm tracking-wider font-semibold hover:bg-white hover:text-black transition"
//           >
//             Get in Touch
//           </Link>
//         </div>
//       </div>
//     </section>



//     <Footer />
//     </>
    
//   );
// }

'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../../components/ProjectCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import work from '../../../public/work.jpg'
import Link from 'next/link'

export default function WorkPage() {
  return (
    <>
    <Header/>
    {/* Hero Section */}
//     <header className="relative h-[90vh] flex items-center overflow-hidden -mt-6">
       {/* Fixed Background Image */}
       <div
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${work.src})`, // Dynamically reference the imported image
           backgroundAttachment: 'fixed' // Enable fixed positioning
         }}
       ></div>

       {/* Dark Overlay */}
       <div className="absolute inset-0 bg-black bg-opacity-70" />

       {/* Content */}
       <div className="container relative z-10 mx-auto flex justify-center text-center align-middle">
         <div className="text-white ">
           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
             Unlock your digital potential
           </h1>
           <p className="text-xl sm:text-2xl mb-5">Transform your ideas into reality</p>
           <Link href='#' className="px-6 py-3 text-[#00ff66] bg-transparent border-2 border-[#00ff66]
           text-lg font-medium transition-all duration-300
           hover:bg-[#00ff66] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]
           focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-black">
         View Work
       </Link>
         </div>
       </div>
     </header>
    <div className="max-w-6xl mx-auto mt-20 mb-20">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Work
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Projects Section */}
      <div id="projects" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
      </motion.div>
    </div>
    <section className="bg-[#04140b] text-white px-10 py-20">
       <div className="max-w-7xl mx-auto flex gap-10 items-center flex-col lg:flex-row md:flex-row lg:gap-60">
         {/* Left Text Section */}
         <div>
           <p className="text-sm font-semibold tracking-widest mb-2 uppercase">Get in Touch</p>
           <h1 className="text-4xl font-bold">Let&apos;s bring your vision to life!</h1>
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

