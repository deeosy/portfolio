import './App.css'
import React, { useEffect, useRef, useState } from 'react';
import ProgressBar from './components/ProgressBar';
import NavButtons from './components/NavButtons';
import SidebarMenu from './components/SidebarMenu';
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactForm from './components/ContactForm';

const HorizontalScrollApp = () => {
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sections = ['home', 'about', 'projects', 'contact']
  const backgrounds = [
    'bg-gradient-to-br from-blue-900 via-sky-900 to-purple-900',
    'bg-gradient-to-br from-sky-900 via-purple-800 to-pink-800',
    'bg-gradient-to-br from-pink-700 via-rose-800 to-red-800',
    'bg-gradient-to-br from-red-700 via-rose-900 to-gray-800',
    // 'bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900', was going to use this for the skill section but i am thinking i will just create the component and add it to the about section

  ]

  const sectionComponents = [
    <HomeSection />,
    <AboutSection />,
    <ProjectsSection />,
    <ContactForm />
  ]


  const isScrollingInsideSection = (target) => {
    let el =target;

    //climb up DOM tree until you reach the section
    while(el && el !== containerRef.current) {
      const isScrollable = el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;

      const hasOverflow = window.getComputedStyle(el).overflow === "auto" || window.getComputedStyle(el).overflowY === "scroll";

      if (isScrollable && hasOverflow) return true;

      el = el.parentElement;
    }
    return false;
  }

  
  // Smooth scroll to the current section with animation
  const scrollToSection = (index) => {
    setIsAnimating(true)
    const container = containerRef.current
    if (!container) return
    
    const sectionEl = container.children[index]
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth', inline: 'start' })
      
      // Reset animation state after transition completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 800)
    }
  }
  
  // Handle section change
  useEffect(() => {
    scrollToSection(currentIndex)
  }, [currentIndex])
  
  // Handle mouse wheel to scroll horizontally in a loop
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    const handleWheel = (e) => {
      const target = e.target;

      // If scrolling inside a scrollable div, DO NOT horizontal-scroll
      if(isScrollingInsideSection(target)) {
        return; // allow normal scrolling
      }

      // Otherwise, handle horizontal navigation
      e.preventDefault(); // Prevent default scroll behavior
      
      if (isAnimating) return;
      
      const direction = e.deltaY > 0 ? 1 : -1 // Scroll down = right, Scroll up = left
      const newIndex = (currentIndex + direction + sections.length) % sections.length;
      setCurrentIndex(newIndex)
    }
    
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [currentIndex, sections.length, isAnimating])
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isAnimating) return
      
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % sections.length)
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sections.length, isAnimating])

  const handlePrevBtn = () => !isAnimating && setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length)

  const handleNextBtn = () => !isAnimating && setCurrentIndex((prev) => (prev + 1) % sections.length)
  

  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden bg-black text-white">
      {/* Header */}
      <div className="">
        {/* Section counter */}
        <div className=" fixed top-4 md:top-8 left-4 md:left-8 text-5xl font-bold">
          0{currentIndex + 1}
        </div>
        
        {/* Sidebar Menu */}
        <SidebarMenu 
          sections={sections} 
          currentIndex={currentIndex} 
          setCurrentIndex={setCurrentIndex} 
        />
      </div>
      
      {/* Main container */}
      <div
        ref={containerRef}
        className="flex h-full w-full overflow-x-hidden snap-x snap-mandatory"
      >
        {sectionComponents.map((component, idx) => (
          <section key={idx} className={`flex-shrink-0 w-screen h-screen snap-start ${backgrounds[idx]} flex flex-col `} >
            <div className="flex-1 overflow-y-auto px-8 pt-18 pb-18 ">
                  <div className="max-w-7xl h-full mx-auto ">
                    {component}
                  </div>
                </div>
          </section>
        ))}
      </div>
      
      {/* Footer */}
      <div className="relative w-[100%] ">
        <div className="absolute bottom-2 px-3 md:px-10 w-full flex justify-between">
          <ProgressBar currentIndex={currentIndex} sections={sections}  />
          <NavButtons isAnimating={isAnimating} handleNextBtn={handleNextBtn} handlePrevBtn={handlePrevBtn} />
        </div>
      </div>
    </div>
  )
}

// Touch support for mobile devices
const TouchHandler = ({ children }) => {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  
  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe) {
      children.props.onSwipeLeft()
    }
    if (isRightSwipe) {
      children.props.onSwipeRight()
    }
    
    setTouchStart(null)
    setTouchEnd(null)
  }
  
  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="h-full w-full"
    >
      {children}
    </div>
  )
}

// Main App wrapped with touch handler
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sections = ['home', 'about', 'projects', 'contact']
  const backgrounds = [
    'bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900',
    'bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800',
    'bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900',
    'bg-gradient-to-br from-pink-900 via-rose-900 to-red-900',
    // 'bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900',



  ]
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length)
  }
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length)
  }
  
  return (
    <TouchHandler>
      <HorizontalScrollApp 
        onSwipeLeft={handleNext}
        onSwipeRight={handlePrev}
      />
    </TouchHandler>
  )
}

export default App