// Navigation buttons
import React from 'react'
import arrow from '../icons/arrow.svg'
import Tooltip from '@mui/material/Tooltip';


export default function NavButtons({ handlePrevBtn, handleNextBtn, isAnimating  }) {
  return (
    <div className=" flex items-center gap-4 mb-2  ">
      <Tooltip title='Previous' placement="top">
        <button 
          onClick={handlePrevBtn}
          className="w-11 h-11 rounded-full p-1 border border-white/20 bg-white/20 hover:animate-pulse   backdrop-blur-sm flex items-center justify-center cursor-pointer"
          disabled={isAnimating}
        >
          <img src={arrow} alt="Previous Page" className='' />        
        </button>
      </Tooltip>
      <span className='text-xl' >|</span>
      <Tooltip title='Next' placement="top">
        <button 
          onClick={handleNextBtn}
          className="w-11 h-11 rounded-full p-1 border border-white/20 bg-white/20 hover:animate-pulse   backdrop-blur-sm flex items-center justify-center cursor-pointer"
          disabled={isAnimating}
        >
          <img src={arrow} alt="Previous Page" className='rotate-180' />        
        </button>
      </Tooltip>
    </div>
  )  
}



