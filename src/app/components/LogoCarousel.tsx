import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'

const technologies = [
    'mysql-original-wordmark.svg',
    '/react.svg', 
    '/tailwind.svg',   
    '/vscode.svg',
    '/vs.svg',
    '/figma.svg',
    '/sublime-merge.png',
    '/next.svg',
    'javascript.svg',
    '/github.svg',
    '/chatgpt.svg',
];

const LogoCarousel = () => {
    return (
      <div className="relative overflow-hidden mx-auto max-w-7xl">
        {/* Fondo de gradiente para desvanecer en los bordes */}
        <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-slate-50 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-slate-50 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Contenedor del carrusel */}
        <div className="flex animate-slide-infinite space-x-4">
          {technologies.concat(technologies).map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-[2%] lg:w-[11%]">
             <motion.div>
              <Image src="/my-image.png" alt="my-image" width={500} height={500} />
            </motion.div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LogoCarousel;