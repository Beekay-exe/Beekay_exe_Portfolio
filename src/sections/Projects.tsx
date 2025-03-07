'use client';

import { useTheme } from '@/context/ThemeContext';
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';

const portfolioProjects = [
  {
    company: "Winter",
    year: "2025",
    title: "IMbd Movie Review Application",
    results: [
      { title: "Frontend: React, Tailwind CSS, HTML, JavaScript" },
      { title: "Backend: Spring Boot, MongoDB" },
      { title: "with RESTful APIs for managing user movie data and reviews." },
    ],
    link: "https://github.com/Beekay-exe/Full-Stack-Movie-review-Web-App",
    image: darkSaasLandingPage,
  },
  {
    company: "Saveetha Engineering College",
    year: "2024",
    title: "AI Gym Trainer",
    results: [
      { title: "Real-time video analysis for exercise detection" },
      { title: "Object detection using YOLOv5" },
      { title: "Real-time feedback on form and technique" },
    ],
    link: "https://github.com/Beekay-exe/AI-Gym-Trainer",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  const { isDemonMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = useCallback((newIndex: number) => {
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500); // Match this with animation duration
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        const nextIndex = currentIndex === portfolioProjects.length - 1 ? 0 : currentIndex + 1;
        changeSlide(nextIndex);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, currentIndex, changeSlide]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    const nextIndex = currentIndex === portfolioProjects.length - 1 ? 0 : currentIndex + 1;
    changeSlide(nextIndex);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    const prevIndex = currentIndex === 0 ? portfolioProjects.length - 1 : currentIndex - 1;
    changeSlide(prevIndex);
  };

  return (
    <div id="work" className={`min-h-screen bg-black ${isDemonMode ? 'text-[#ff0000]/70' : 'text-[#00ff00]/70'} py-20 px-4 font-["Share_Tech_Mono"] relative`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 grid grid-cols-6 gap-1">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              {Array.from({ length: 20 }).map((_, j) => (
                <div 
                  key={j} 
                  className={`h-4 ${isDemonMode ? 'bg-[#ff0000]' : 'bg-[#00ff00]'} 
                    ${Math.random() > 0.5 ? 'opacity-30' : 'opacity-10'}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex items-center">
          <span className="mr-2"></span>
          <TypeAnimation
            sequence={[
              '> Projects',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className={`text-3xl font-bold ${isDemonMode ? 'text-shadow-red' : ''}`}
          />
        </div>

        {/* Project Carousel */}
        <div className={`backdrop-blur-sm bg-black/40 rounded-lg border ${
          isDemonMode 
            ? 'border-[#ff0000]/20 shadow-[0_0_15px_rgba(255,0,0,0.3)]' 
            : 'border-[#00ff00]/20 shadow-[0_0_10px_rgba(0,255,0,0.2)]'
        } p-8 relative overflow-hidden`}>
          <div className="scanline"></div>
          
          {/* Project Card */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Project Image */}
            <div className={`relative group ${isTransitioning ? 'card-enter' : ''}`}>
              <div className={`absolute inset-0 ${isDemonMode ? 'animate-glitch-red' : 'animate-glitch'}`}></div>
              <div className="rgb-split rounded-lg overflow-hidden">
                <Image
                  src={portfolioProjects[currentIndex].image}
                  alt={portfolioProjects[currentIndex].title}
                  className="relative z-10 w-full h-auto"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className={`space-y-6 ${isTransitioning ? 'text-enter' : ''}`}>
              <div className="space-y-2">
                <div className={`flex items-center ${isDemonMode ? 'text-[#ff0000]/50' : 'text-[#00ff00]/50'}`}>
                  <span className="text-sm">project_info.exe</span>
                </div>
                <h3 className={`text-2xl font-bold ${isDemonMode ? 'text-[#ff0000]' : 'text-[#00ff00]'}`}>
                  {portfolioProjects[currentIndex].title}
                </h3>
                <p className="text-sm opacity-70">{portfolioProjects[currentIndex].company} | {portfolioProjects[currentIndex].year}</p>
              </div>

              <div className="space-y-4">
                
                <ul className="space-y-2 ml-6">
                  {portfolioProjects[currentIndex].results.map((result, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className={`block w-1.5 h-1.5 rounded-full ${
                        isDemonMode ? 'bg-[#ff0000]/60' : 'bg-[#00ff00]/60'
                      }`}></span>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={portfolioProjects[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                  isDemonMode 
                    ? 'border-[#ff0000]/20 hover:border-[#ff0000]/40 hover:bg-[#ff0000]/10' 
                    : 'border-[#00ff00]/20 hover:border-[#00ff00]/40 hover:bg-[#00ff00]/10'
                } transition-all duration-300`}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Github
              </a>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className={`p-2 rounded-lg border ${
                isDemonMode 
                  ? 'border-[#ff0000]/20 hover:border-[#ff0000]/40 hover:bg-[#ff0000]/10' 
                  : 'border-[#00ff00]/20 hover:border-[#00ff00]/40 hover:bg-[#00ff00]/10'
              } transition-all duration-300`}
              aria-label="Previous project"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex gap-2">
              {portfolioProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    changeSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? isDemonMode 
                        ? 'bg-[#ff0000]' 
                        : 'bg-[#00ff00]'
                      : isDemonMode
                        ? 'bg-[#ff0000]/20'
                        : 'bg-[#00ff00]/20'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className={`p-2 rounded-lg border ${
                isDemonMode 
                  ? 'border-[#ff0000]/20 hover:border-[#ff0000]/40 hover:bg-[#ff0000]/10' 
                  : 'border-[#00ff00]/20 hover:border-[#00ff00]/40 hover:bg-[#00ff00]/10'
              } transition-all duration-300`}
              aria-label="Next project"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
