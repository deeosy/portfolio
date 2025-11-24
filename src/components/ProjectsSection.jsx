import React from 'react'
import GlassProjectCard from './GlassProjectCard'

const projects = [
  {
    title: "KANI Album Launch Web App",
    desc: "Interactive Map covering the journey of KoJo-Cue (Ghanaian Rap Artist).",
    tech: ["React", "JavaScript", "Firebase", "Tailwind", "Zustand"],
    live: "https://ghanamantimes.com/",
    code: "https://github.com/deeosy/KANI-KOJO-CUE-PROJECT"
  },
  {
    title: "RentEasy-GH",
    desc: "A rental online platform, with user authentication.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind", "Zustand", "FireStore", "Render"],
    live: "https://renteasy-gh.netlify.app/",
    code: "https://github.com/deeosy/RentEasy"
  },
    {
    title: "Style-Sync Web App",
    desc: "A digital outfit organizer with AI recommendation.",
    tech: ["React", "FireStore", "Firebase.js", "OpenAI", "Zustand"],
    live: "https://stylesynce-outfit-oganizer.netlify.app/",
    code: "https://github.com/deeosy/StyleSync_an-outfit-organizer"
  },
    {
    title: "CheckBox - ToDo Web App",
    desc: "A ToDo List App with user authentication, filtered task options and a hosted Backend.",
    tech: ["React", "Express.js", "MongoDB", "Zustand", "Render"],
    live: "https://enchanting-kheer-ef03f2.netlify.app/",
    code: "https://github.com/deeosy/Check-Box-todolist-app"
  },
    {
    title: "Lead Manager Web App Feature",
    desc: "Custom restful API for Quovoy to create and retrieve leads from their users. ",
    tech: ["React", "Express.js", "MongoDB", "Zustand", "Render"],
    live: "https://elegant-trifle-92ec82.netlify.app/",
    code: "https://github.com/deeosy/ReSpark-Lead-Manager-API"
  },
    {
    title: "Live Presenter Mention System",
    desc: "Create and Submit your LPMs, track their approvals, and get notified in real-time. ",
    tech: ["React", "Express.js", "Zustand", "Tailwind", ],
    live: "https://lpm-system.netlify.app/",
    code: "https://github.com/deeosy/ReSpark-Lead-Manager-API"
  },

]


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
