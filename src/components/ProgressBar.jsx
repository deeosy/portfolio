  // Progress bar
  import React from 'react'
  
  export default function ProgressBar({currentIndex, sections}) {
      const progress = ((currentIndex + 1) / sections.length) * 100

    return (
      <div className=" flex flex-col gap-2 w-[35%]">
        <div className="flex justify-between text-white text-sm">
          {/* <span>01</span> */}
          <span className="uppercase tracking-widest">{sections[currentIndex]}</span>
          {/* <span>0{sections.length}</span> */}
        </div>
        <div className="w-full h-1 bg-gray-600 rounded-full">
          <div 
            className="h-full bg-white rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    )
  }
  