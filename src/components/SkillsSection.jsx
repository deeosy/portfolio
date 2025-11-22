import React from 'react'

export default function SkillsSection() {
  const skills = ["React", "Node.js", "JavaScript", "Next.js", "Tailwind CSS", "MongoDB", "Zustand", "Git", "Figma", "Expo Go", "Netlify", "Render"]

  return (
    <div className='flex flex-wrap sm:justify-center gap-2 mx-auto'>
      {skills.map(skill => (
        <div key={skill} className="px-4 py-2 bg-gray-800 bg-opacity-50 backdrop-blur rounded-full text-sm font-medium border border-gray-800 hover:border-white hover:scale-110 transition-all duration-300 cursor-pointer ">
          {skill}
        </div>
      ))}
      
    </div>
  )
}
