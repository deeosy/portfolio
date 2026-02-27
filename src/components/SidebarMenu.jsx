import React, { useState, useEffect } from 'react'
import twitter from "../icons/twitter.svg"
import github from "../icons/github.svg"
import linkedIn from "../icons/linkedin.svg"
import Tooltip from '@mui/material/Tooltip'


export default function SidebarMenu({ sections, currentIndex, setCurrentIndex }) {
  const [isOpen, setIsOpen] = useState(false)

    // current year for footer
  const currentYear = new Date().getFullYear();

  
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && e.target.closest('.sidebar') === null && !e.target.closest('.menu-button')) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])
  
  // Close sidebar when escape key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (isOpen && e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])
  
  const handleNavigate = (index) => {
    setCurrentIndex(index)
    setIsOpen(false)
  }
  
  return (
    <>
      {/* Menu Button */}
      <Tooltip title={isOpen ? 'Close' : 'Menu'} placement="left" >
        <button 
          className="menu-button fixed top-4 md:top-8 right-4 md:right-8 z-50 w-12 h-12 rounded-full border border-white/20 bg-white/20  backdrop-blur-sm flex flex-col items-center justify-center gap-1 cursor-pointer transition-all hover:animate-pulse "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </Tooltip>
      
      
      {/* Sidebar */}
      <div className={ isOpen ? `fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-30` : "" }>
        <div 
          className={`sidebar fixed top-0 right-0 h-full w-64 bg-white/20 bg-opacity-80 backdrop-blur-md z-40 transform transition-all duration-300 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-8 pt-24  flex flex-col h-full w-full overflow-y-auto">
            <h3 className="text-xl font-bold mb-8 text-white uppercase tracking-widest">Menu</h3>
            <div className="flex flex-col flex-1 justify-between">
              <nav className="flex flex-col gap-4">
                {sections.map((section, idx) => (
                  <button
                    key={section}
                    onClick={() => handleNavigate(idx)}
                    className={`text-left py-2 px-4 rounded transition-all capitalize text-lg cursor-pointer ${
                      currentIndex === idx 
                        ? 'text-white  bg-white/20' 
                        : 'text-white '
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </nav>
              <div className="">
                <div className="flex justify-around mb-2" >
                  <Tooltip title='Github' placement="top">
                    <a 
                      href="https://github.com/deeosy" 
                      target='blank' 
                      onClick={() => trackEvent('Social', 'Github Click', 'Github Profile')}
                    >
                      <div className="">
                        <img src={github} alt="Github Link" className='border border-white/20 p-1  h-8 w-8 rounded-md bg-white/10 hover:animate-pulse transition' />
                      </div>
                    </a>
                  </Tooltip>
                  <Tooltip title='LinkedIn' placement="top">
                    <a 
                      href="https://www.linkedin.com/in/derrode-cheale-a45709345/" 
                      target='blank' 
                      onClick={() => trackEvent('Social', 'LinkedIn Click', 'LinkedIn Profile')}
                    >
                      <div className="">
                        <img src={linkedIn} alt="Linked In Link" className='border border-white/20 p-1  h-8 w-8 rounded-md bg-white/10 hover:animate-pulse transition' />
                      </div>
                    </a>
                  </Tooltip>
                  <Tooltip title='Twitter' placement="top">
                    <a href="https://x.com/i_Cheale?t=HN8jF1jqaRTxu45sm7zJUA&s=09" target='blank'>
                      <div className="">
                        <img src={twitter} alt="Twitter Link" className='border border-white/20 p-1  h-8 w-8 rounded-md bg-white/10 hover:animate-pulse transition ' />
                      </div>
                    </a>
                  </Tooltip>
                </div>
                <span className='text-xs md:text-sm text-white text-center'>
                  © {currentYear} Derrode Walter Cheale
                </span>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}