import Link from 'next/link'
import Image from 'next/image'
import websitedevelopment from '../../public/website-development.jpeg'

function WebsiteCard(){
  return(
    



<div>
      <div className="group relative w-80 bg-[#0c0c0e] shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cu">
        <Image
          src={websitedevelopment}
          alt="Placeholder"
          className="w-full h-60 object-cover"
        />
        <div className="p-4 ">
          <Link href="#" className="text-white no-underline group-hover:text-[#00FF7F] text-xl transition-colors duration-300 block text-left font-bold  ">
            Website Development
          </Link>
          <p className="text-slate-400 font-normal text-lg mt-2 text-left pb-3">
            Carfting stunning user-friendly websites.
          </p>
        </div>
      </div>
    </div>


  );

}

export default WebsiteCard