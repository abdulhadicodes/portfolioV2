import Image from 'next/image';
import Link from "next/link";
import { Lightbulb, FileSearch, PenTool, Cpu, TestTube, Rocket, RefreshCw } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';
import heroImage from '../../../public/services.jpg';
import Contact from "../../components/Contact.jsx";
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";

const services = [
  {
    icon: 'Code',
    title: "Web Development",
    description: "Custom websites tailored to your unique business needs, built with the latest technologies for optimal performance.",
  },
  {
    icon: 'ShoppingCart',
    title: "E-Commerce Solutions",
    description: "Robust online stores that provide seamless shopping experiences and drive conversions.",
  },
  {
    icon: 'Search',
    title: "SEO Optimization",
    description: "Improve your website's visibility in search engines and attract more organic traffic.",
  },
  {
    icon: 'Smartphone',
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and extend your digital reach.",
  },
  {
    icon: 'Palette',
    title: "UI/UX Design",
    description: "Intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
  },
  {
    icon: 'Megaphone',
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
  },
];

const sdlcProcess = [
  { icon: 'Lightbulb', title: "Planning", description: "We begin by understanding your requirements, defining project scope, and creating a comprehensive plan." },
  { icon: 'FileSearch', title: "Analysis", description: "Our team conducts thorough research and analysis to identify the best solutions for your project." },
  { icon: 'PenTool', title: "Design", description: "We create detailed designs and prototypes, ensuring a user-friendly and visually appealing solution." },
  { icon: 'Cpu', title: "Implementation", description: "Our developers bring the designs to life, writing clean, efficient, and scalable code." },
  { icon: 'TestTube', title: "Testing & Integration", description: "Rigorous testing and seamless integration ensure your project meets the highest quality standards." },
  { icon: 'Rocket', title: "Deployment", description: "We carefully launch your project, ensuring a smooth transition to the live environment." },
  { icon: 'RefreshCw', title: "Maintenance & Updates", description: "Our team provides ongoing support, updates, and improvements to keep your project running optimally." },
];


export default function ServicesPage() {
  return (
    <>
    <Header />
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center overflow-hidden">
      <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage.src})`, // Dynamically reference the imported image
              backgroundAttachment: 'fixed', // Enable fixed positioning
              backgroundPosition:'bottom'
            }}
          ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex justify-center text-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your online presence
            </p>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* SDLC Process Section */}
      <section className="bg-[#0a2816] py-20 px-4 sm:px-6 lg:px-8 m-5 lg:m-10 md:m-10 rounded-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            My Development Process.
          </h2>
          <div className="space-y-6">
            {sdlcProcess.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} totalSteps={sdlcProcess.length} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#04140b] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold tracking-widest mb-2 uppercase text-[#00ff66]">Ready to get started?</p>
            <h2 className="text-4xl font-bold">Let's discuss your project</h2>
          </div>
          <div>
            <Link href="/contact" className="inline-block px-8 py-4 border-2 border-[#00ff66] text-[#00ff66] uppercase text-sm tracking-wider font-semibold 
              hover:bg-[#00ff66] hover:text-black transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-[#04140b]">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    

    <Footer />

    </>
  );
}

