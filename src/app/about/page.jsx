'use client';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Intro from "../../components/Intro.jsx";
import ExpertiseSection from "../../components/ExpertiseSection.jsx";
import PurposeSection from "../../components/purpose-section.jsx";
import TestimonialSection from "../../components/TestimonialSection.jsx";
import Contact from "../../components/Contact.jsx";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import About from '../../../public/about.jpg'
import ProfilePic from '../../../public/ProfilePic.jpg'
import { CertificationSection } from '../../components/CertificationSection.jsx'
import { Eye, Rocket, Linkedin, CircleCheck,CheckCircle, Star, Quote } from 'lucide-react'




export default function Introduction(){
  return(
    <>
    <Header />
    <header className="relative overflow-hidden h-[90vh]">
    <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${About.src})`, // Dynamically reference the imported image
              backgroundAttachment: 'fixed', // Enable fixed positioning
              backgroundPosition:'bottom'
            }}
          ></div>
      <div className="bg-opacity-65 inset-0 bg-black absolute"/>
      <div className="relative mx-auto p-x4 py-24 z-10 lg:p-20 mt-36 lg:ml-52 ml-7">
      <h1 className="text-5xl font-bold mb-6 animate-fade-in-up text-white">About Us</h1>
        <p className="text-2xl mb-8 max-w-2xl animate-fade-in-up animation-delay-200 text-white">
          Discover our story, mission, and the passion that drives us to create exceptional web experiences.
        </p>
        <Link href='/services'
        
        className="px-6 py-3 text-[#00ff66] bg-transparent border-2 border-[#00ff66]
          text-lg font-medium transition-all 
          hover:bg-[#00ff66] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]
          focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-black"
          
        
        
      >
        View Work
      </Link>
      </div>
    </header>

    <Intro />
    <ExpertiseSection />
    <TestimonialSection />
    <CertificationSection />
    <Contact />
    <Footer />
  
    </>
      

    
    
  );
}
