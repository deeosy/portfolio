import React from 'react'

const projects = [
  {
    title: "KANI Album Launch Web App",
    desc: "Interactive Map covering the journey of KoJo-Cue (Ghanaian Rap Artist)",
    tech: ["React", "JavaScript", "Firebase", "Tailwind"],
    live: "https://ghanamantimes.com/",
    code: "https://github.com/deeosy/KANI-KOJO-CUE-PROJECT"
  },
  {
    title: "RentEasy-GH",
    desc: "A rental online platform, with user authentication",
    tech: ["React", "Express.js", "MongoDB", "Tailwind", "Zustand", "FireStore", "Render"],
    live: "https://renteasy-gh.netlify.app/",
    code: "https://github.com/deeosy/RentEasy"
  },
    {
    title: "Style-Sync Web App",
    desc: "A digital outfit organizer with AI recommendation",
    tech: ["React", "FireStore", "Firebase.js", "OpenAI"],
    live: "https://stylesynce-outfit-oganizer.netlify.app/",
    code: "https://github.com/deeosy/StyleSync_an-outfit-organizer"
  },
    {
    title: "CheckBox - ToDo Web App",
    desc: "A ToDo List App with user authentication, filtered task options and a hosted Backend",
    tech: ["React", "Express.js", "MongoDB", "Zustand", "Render"],
    live: "https://enchanting-kheer-ef03f2.netlify.app/",
    code: "https://github.com/deeosy/Check-Box-todolist-app"
  },
    {
    title: "AI SaaS Dashboard",
    desc: "Real-time analytics dashboard with OpenAI",
    tech: ["React", "Node.js", "Chart.js", "OpenAI"],
    live: "https://ai.example.com",
    code: "https://github.com/yourname/ai-tool"
  },  {
    title: "AI SaaS Dashboard",
    desc: "Real-time analytics dashboard with OpenAI",
    tech: ["React", "Node.js", "Chart.js", "OpenAI"],
    live: "https://ai.example.com",
    code: "https://github.com/yourname/ai-tool"
  },
    {
    title: "AI SaaS Dashboard",
    desc: "Real-time analytics dashboard with OpenAI",
    tech: ["React", "Node.js", "Chart.js", "OpenAI"],
    live: "https://ai.example.com",
    code: "https://github.com/yourname/ai-tool"
  },
  // Add 4–6 total
]


export default function ProjectsSection() {
  return (
    <div className="max-w-7xl h-full overflow-y-scroll mx-auto px-8 no-scrollbar">
      <h2 className="text-4xl sm:text-5xl md:text-7xl  font-bold mb-16 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group relative overflow-hidden bg-gray-800 bg-opacity-50 backdrop-blur rounded-2xl border border-gray-700 hover:border-white transition-all duration-500">
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" /> */}
            <div className="p-8 relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-300 mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-black bg-white bg-opacity-10 rounded-full text-sm backdrop-blur">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={p.live} target="_blank" className="text-pink-400 hover:text-pink-300">Live Demo →</a>
                <a href={p.code} target="_blank" className="text-gray-400 hover:text-white">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
