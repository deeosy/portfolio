import React from 'react'
import dp from "../images/displayImage.png"

export default function HomeSection() {
  return (
    <div className='text-center max-w-7xl h-full overflow-y-scroll mx-auto px-8 py-2 no-scrollbar'>
      <div className="mb-2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-xl opacity-50 scale-110 animate-pulse ">
          </div>
            {/* Display Image Pending */}
            <img src={dp} alt="Derrode Walter Cheale" className='w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl relative z-10' />
        </div>
      </div>
      <h1 className='text-4xl sm:text-5xl md:text-7xl xl:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from -pink-300 via-purple-300 to-indigo-300 animate-pulse'>
        Hi, I am Derrode
      </h1>
      <p className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light mb-8 text-gray-200'>
        Full-Stack Developer & UI/UX Enthusiast
      </p>
      <p className="text-md sm:text-xl max-w-2xl mx-auto text-gray-400">
        I build beautiful, fast, and meaningful digital experiences.
      </p>
      <div className="mt-8 flex gap-6 justify-center items-center">
        <a href="#projects" className="px-4 py-2 sm:px-8 sm:py-4 bg-white text-sm sm:text-md text-black rounded-full font-semibold hover:scale-105 transition">
          View My Work
        </a>
        <a href="#contact" className="px-4 py-2 sm:px-8 sm:py-4 border-2 border-white text-sm sm:text-md rounded-full font-semibold hover:bg-white hover:text-black transition">
          Hire Me
        </a>
      </div>
    </div>
  )
}
