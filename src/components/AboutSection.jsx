import React from 'react'
import SkillsSection from './SkillsSection'

export default function AboutSection() {
  return (
    <div className='max-w-7xl h-full overflow-y-scroll mx-auto px-8 no-scrollbar '>
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-12 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center  md:px-10">
        <div className="space-y-6 text-lg leading-relaxed">
          <p>I'm a passionate developer who loves turning ideas into reality with clean code and elegant design.</p>
          <p>Currently specializing in React, JavaScript, Tailwind CSS, Node.js and Mongo DB. Always learning, always building.</p>
          <p>When I'm not coding, you'll find me using AI to build UIs and automatated videos, fixing laptops mainly installation of new OS and a bit of hardware, or hanging out with friends on discord while playing video games.</p>
        </div>
        <div className="bg-white/10 bg-opacity-50 backdrop-blur rounded-2xl p-8 w-full h-full md:max-w-fit border border-white/20 place-self-start md:place-self-end">
          <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
          <ul className="space-y-4 text-lg text-white/60">
            <li>Based in Accra, Ghana</li>
            <li>Available for freelance</li>
            <li>Love minimal design</li>
            <li>2+ years React experience</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 md:mt-8 lg:mt-20 max-w-7xl mx-auto col-span-2   ">
        <h3 className="text-2xl font-bold mb-6 text-center">Skills and Tools</h3>
        <SkillsSection />
      </div>
    </div>
  )
}
