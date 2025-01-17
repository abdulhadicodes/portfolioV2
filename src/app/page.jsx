import Image from "next/image";
import "./globals.css";
import Header from "../../components/Header.jsx";
import Hero from "../../components/Hero.jsx";
import Intro from "../../components/Intro.jsx";
import Services from "../../components/Services.jsx";
import Contact from "../../components/Contact.jsx";
import Footer from "../../components/Footer.jsx";
import TestimonialSection from "../../components/TestimonialSection.jsx";
import React from 'react';


function Home(){
  return(
    <>
    <Header />
    <Hero />
    <Intro />
    <Services/>
    <TestimonialSection />
    <Contact/>
    <Footer/>
    </>
    
  );
}
export default Home