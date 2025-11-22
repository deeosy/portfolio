// Navigation buttons
import React from 'react'

export default function NavButtons({ handlePrevBtn, handleNextBtn, isAnimating  }) {
  return (
    <div className=" flex items-center gap-4">
      <button 
        onClick={handlePrevBtn}
        className="w-12 h-12 rounded-full  backdrop-blur-sm flex items-center justify-center cursor-pointer transition-colors"
        disabled={isAnimating}
      >
        <span className=" text-gray-400 hover:text-white ">PEV</span>
      </button>
      <span className='text-xl' >|</span>
      <button 
        onClick={handleNextBtn}
        className="w-12 h-12 rounded-full  backdrop-blur-sm flex items-center justify-center cursor-pointer transition-colors"
        disabled={isAnimating}
      >
        <span className=" text-gray-400 hover:text-white">NEXT</span>
      </button>
    </div>
  )  
}



