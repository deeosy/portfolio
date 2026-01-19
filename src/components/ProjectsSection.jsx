import React from 'react'
import GlassProjectCard from './GlassProjectCard'
import projects from '../../data'



export default function ProjectsSection() {
  return (
    <div className="max-w-7xl h-full overflow-y-scroll mx-auto px-8 no-scrollbar">

      <h2 className="text-4xl sm:text-5xl md:text-7xl  font-bold mb-16 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group relative py-2 flex items-center justify-center">
            <GlassProjectCard p={p} />
          </div>
        ))}
      </div>
    </div>
  )
}
