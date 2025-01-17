import Link from "next/link";
import heroImg from '../../public/image.jpg';

function Hero() {
  return (
    <header className="relative overflow-hidden h-[90vh]">
    <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImg.src})`, // Dynamically reference the imported image
              backgroundAttachment: 'fixed', // Enable fixed positioning
              backgroundPosition:'bottom'
            }}
          ></div>
      <div className="bg-opacity-65 inset-0 bg-black absolute"/>
      <div className="relative mx-auto pb-10 p-x4 py-24 z-10 lg:p-20 mt-36 lg:ml-52 ml-7">
      <h1 className="text-6xl font-bold mb-6 animate-fade-in-up text-white">Transform your ideas into reality</h1>
        <p className="text-3xl mb-8 max-w-2xl animate-fade-in-up animation-delay-200 text-white">
        Transform your ideas into reality.
        </p>
        <Link href='/services'
        
        className=
          "px-6 py-3 text-[#00ff66] bg-transparent border-2 border-[#00ff66]
          text-lg font-medium transition-all duration-300
          hover:bg-[#00ff66] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]
          focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-black"
          
        
        
      >
        View Work
      </Link>
      </div>
    </header>
  );
}

export default Hero;
