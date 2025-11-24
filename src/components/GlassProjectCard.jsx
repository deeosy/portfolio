export default function GlassProjectCard({p}) {
  return (
    <div className="">

      {/* Pink Blob */}
      {/* <div className="absolute w-56 h-56 bg-pink-500 rounded-full blur-3xl opacity-60 -left-10 bottom-0"></div> */}

      {/* Purple Blob */}
      {/* <div className="absolute w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-60 right-0 top-5"></div> */}

      {/* Glass Card */}
      <div className="
        relative max-w-92 md:w-full  min-h-82
        bg-white/10 
        backdrop-blur-xl 
        rounded-2xl 
        border border-white/20 
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        flex flex-col justify-end p-6
      ">
        <h3 className="text-xl md:text-3xl font-bold mt-2  ">{p.title}</h3>
        <p className="text-white/60 text-sm md:text-[16px] mb-2 trancate line-clamp-2">{p.desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tech.map(t => (
            <span key={t} className="px-3 py-1 text-white/60 border border-white/20 rounded-full text-xs backdrop-blur">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={p.live} target="_blank" className=" hover:text-white/60 cursor-pointer">Live Demo →</a>
          <a href={p.code} target="_blank" className="text-white/60 hover:text-white cursor-pointer">Source Code</a>
        </div>

        {/* tiny icon top-right like the example */}
        <div className="
          absolute top-3 right-3 
          w-6 h-6 rounded-full 
          bg-white/20 border border-white/20 
          flex items-center justify-center
        ">
          <span className="text-xs text-white/70">✦</span>
        </div>
      </div>

    </div>
  );
}
