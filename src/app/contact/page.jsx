import Header from "../../components/Header.jsx";
import Hero from "../../components/Hero.jsx";
import Intro from "../../components/Intro.jsx";
import Services from "../../components/Services.jsx";
import Contact from "../../components/Contact.jsx";
import Footer from "../../components/Footer.jsx";
import React from 'react';
import work from '../../../public/contactHero.jpg'
import Link from 'next/link'

function Form(){
  return(
    <>
    <Header />
    <header className="relative h-[95vh] flex items-center overflow-hidden -mt-6">
       {/* Fixed Background Image */}
       <div
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${work.src})`, // Dynamically reference the imported image
           backgroundAttachment: 'fixed' // Enable fixed positioning
         }}
       ></div>

       {/* Dark Overlay */}
       <div className="absolute inset-0 bg-black bg-opacity-50" />

       {/* Content */}
       <div className="container relative z-10 mx-auto flex justify-center text-center align-middle">
         <div className="text-white ">
           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
           Get in Touch with Abdul Hadi
           </h1>
           <p className="text-xl sm:text-2xl mb-5">Reach Out for Expert Web Development Solutions.</p>
           <Link href='#' className="px-6 py-3 text-[#00ff66] bg-transparent border-2 border-[#00ff66]
           text-lg font-medium transition-all duration-300
           hover:bg-[#00ff66] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]
           focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-black">
         View Work
       </Link>
         </div>
       </div>
     </header>
    <section className="pt-10 bg-[#001a0e]">
    <Contact/>

    </section>
    <Footer/>
    </>
    
  );
}
export default Form