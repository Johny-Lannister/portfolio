'use client'

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaCopy, FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import LogoCarousel from './components/LogoCarousel';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Education from './components/Education';

const HomePage = () => {

  const email = "juanfragale11@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
  };


  return (

    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-gray-800">
      <Navbar />
      {/* Primera Sección Visual */}
      <section className="relative w-full flex flex-col items-center justify-center py-12 px-4 text-gray-800 md:pb-48">
        {/* Círculo 1 */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-50 rounded-full mix-blend-multiply blur-xl transform -translate-y-1/2 animate-move-slower md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Círculo 2 */}
        <div className="absolute top-1/2 left-2/3 w-32 h-32 bg-lime-50 rounded-full mix-blend-multiply blur-2xl transform -translate-y-1/2 animate-move md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Contenido */}
        <img
          src="/juanma.jpg"
          alt="Avatar"
          className="relative z-10 w-24 h-24 rounded-full mb-4 md:w-32 md:h-32"
        />
        <h1 className="text-4xl center md:text-6xl lg:text-7xl xl:text-6xl font-bold mb-4 relative z-10 align: center">Juan Manuel Fragale Carmona</h1>
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-2xl relative z-10">
          Systems Analist
        </p>
        {/* Sección de Contacto */}
        <div className="flex items-center space-x-4 mt-12 relative z-10 bg-gray-200/40 p-2 rounded-lg">
          <p className="text-lg md:text-xl text-gray-700">{email}</p>
          <a href={`mailto:${email}`} className="text-slate-400 hover:text-slate-500">
            <FaEnvelope size={24} />
          </a>
          <button onClick={handleCopyEmail} className="text-slate-400 hover:text-slate-500">
            {copied ? <FaCheck size={24} /> : <FaCopy size={24} />}
          </button>
        </div>
        <div className="flex space-x-8 mt-8 relative z-10">
          <a href="https://github.com/Johny-Lannister" target='_blank' className="text-slate-900 hover:text-blue-500">
            <FaGithub size={52} />
          </a>
          <a href="https://www.linkedin.com/in/juanmafragalec/" target='_blank' className="text-slate-800 hover:text-blue-500">
            <FaLinkedin size={52} />
          </a>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="w-full py-21 px-4 md:px-8 bg-slate-50" id='tools'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">My Tools</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
          These are the technologies I use recurrently to develop efficient and scalable solutions.
          </p>
        </div>
        <LogoCarousel />
      </section>


      {/* Sección de Proyectos Principales*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Main Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wippass */}
            
            
          </div>
        </div>
      </section>

      {/* Sección de Otros Proyectos*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Other Projects...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Portfolio */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/screenshoot.png" alt="Portfolio Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Portfolio</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              My personal portfolio, built with Next.js and Tailwind CSS, showcases my projects, skills, and experience. It is deployed with Vercel and GitHub.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/next.svg" alt="Next.js Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/typescript.svg" alt="TypeScript Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/tailwind.svg" alt="Tailwind Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/vercel.svg" alt="Vercel Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/Johny-Lannister/portfolio" target="_blank" className="bg-black text-white px-4 py-2 rounded">View Code</a>
              </div>
            </div>
            {/* Dragons */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/dragons.png" alt="Portfolio Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Song of Ice And Fire Dragons</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              The complete list with all the dragons known in the Song of Ice and Fire books and the TV shows, Game of Thrones and House of The Dragon, built with Next.js and Tailwind CSS, executing and consuming my own Dragons Api.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/next.svg" alt="Next.js Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/typescript.svg" alt="TypeScript Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/tailwind.svg" alt="Tailwind Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/vercel.svg" alt="Vercel Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/Johny-Lannister/dragons-web" target="_blank" className="bg-black text-white px-4 py-2 rounded">View Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Experiencia */}
      <section className="w-full py-8 px-4 md:px-8 bg-slate-50" id='experience'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Experience</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
            Here are my professional experiences.
          </p>
          <Experience />
        </div>
      </section>
      <section className="w-full py-12 px-4 md:px-8 bg-slate-50" id='education'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl py-8 font-bold ma:px-10 text-gray-800" id='education'>Education</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
            My education.
          </p>
          <Education />
        </div>
      </section>
     

    </main>
  );
};

export default HomePage;
