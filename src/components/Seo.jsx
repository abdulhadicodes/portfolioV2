import Image from 'next/image'
import Link from 'next/link'
import seo from '../../public/seo.jpeg'


function Seo(){
  return(
    



<div>
      <div className="group relative w-80 bg-[#0c0c0e] shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cu">
        <Image
          src={seo}
          alt="Placeholder"
          className="w-full h-60 object-cover"
        />
        <div className="p-4 pb-1 pt-3">
          <Link href="#" className="text-white no-underline group-hover:text-[#00FF7F] text-[1.2rem] transition-colors duration-300 block text-left font-bold">
            Serach Engine Optimization (SEO)
          </Link>
          <p className="text-slate-400 font-normal text-lg mt-2 text-left">
          Boosting your website's visibility on search engines.
          </p>
        </div>
      </div>
    </div>


  );

}

export default Seo