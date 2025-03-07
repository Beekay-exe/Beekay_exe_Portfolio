'use client';

import { useState, useEffect } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import { useTheme } from '@/context/ThemeContext';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDemonMode, toggleDemonMode } = useTheme();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#work', label: 'work' },
    { href: '#contact', label: 'contact' },
  ];

  return (
    <div className={`bg-black ${isDemonMode ? 'text-[#ff0000]/70' : 'text-[#00ff00]/70'}`}>
      {/* Unique Navigation */}
      <nav className="fixed w-full top-0 z-50 px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className={`relative bg-black/40 backdrop-blur-sm rounded-lg ${isDemonMode ? 'border-[#ff0000]/20 shadow-[0_0_10px_rgba(255,0,0,0.2)]' : 'border-[#00ff00]/20 shadow-[0_0_10px_rgba(0,255,0,0.2)]'} border p-4 ${jetbrainsMono.className}`}>
            <div className="flex items-center justify-between">
              {/* Animated Logo */}
              <div className="relative">
                <span className="text-2xl font-bold tracking-tight">&gt; Beekay.exe</span>
                <div className={`absolute -top-1 -right-1 w-2 h-2 ${isDemonMode ? 'bg-[#ff0000]/60 animate-pulse-red' : 'bg-[#00ff00]/60 animate-pulse'} rounded-full`}>
                  <style jsx>{`
                    @keyframes pulse-red {
                      0%, 100% { opacity: 1; }
                      50% { opacity: .5; }
                    }
                    .animate-pulse-red {
                      animation: pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                  `}</style>
                </div>
              </div>
              
              {/* Menu Items - Centered */}
              <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                {menuItems.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className={`group text-sm uppercase tracking-tight transition-all duration-300 ${
                      activeSection === label
                        ? isDemonMode 
                          ? 'text-[#ff0000] font-bold [text-shadow:_0_0_10px_rgba(255,0,0,0.7)]'
                          : 'text-[#00ff00] font-bold [text-shadow:_0_0_10px_rgba(0,255,0,0.7)]'
                        : isDemonMode
                          ? 'hover:text-[#ff0000]/90'
                          : 'hover:text-[#00ff00]/90'
                    }`}
                  >
                    ./{label}
                    <span className={`block h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                      activeSection === label
                        ? isDemonMode ? 'bg-[#ff0000]/30 w-full' : 'bg-[#00ff00]/30 w-full'
                        : isDemonMode ? 'bg-[#ff0000]/30' : 'bg-[#00ff00]/30'
                    }`}></span>
                  </a>
                ))}
              </div>

              {/* Right side controls */}
              <div className="flex items-center space-x-4">
                {/* Demon Mode Switch */}
                <button
                  onClick={toggleDemonMode}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDemonMode ? 'text-[#ff0000] hover:text-[#ff0000]/90' : 'text-[#00ff00] hover:text-[#00ff00]/90'
                  } transition-colors`}
                >
                  <span className="text-sm uppercase tracking-tight">
                    {isDemonMode ? ' RED' : ' GREEN'}
                  </span>
                </button>

                {/* Mobile Menu Button */}
                <button 
                  className={`md:hidden focus:outline-none transition-colors ${
                    isDemonMode ? 'text-[#ff0000]/70 hover:text-[#ff0000]/90' : 'text-[#00ff00]/70 hover:text-[#00ff00]/90'
                  }`}
                  onClick={toggleMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-[80%] h-screen bg-black/80 backdrop-blur-sm ${
              isDemonMode ? 'border-[#ff0000]/20' : 'border-[#00ff00]/20'
            } border-l p-8 md:hidden transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
              <div className="flex justify-end">
                <button onClick={toggleMenu} className={`transition-colors ${
                  isDemonMode ? 'text-[#ff0000]/70 hover:text-[#ff0000]/90' : 'text-[#00ff00]/70 hover:text-[#00ff00]/90'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-8 mt-8">
                {menuItems.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={toggleMenu}
                    className={`text-xl transition-all duration-300 ${
                      activeSection === label
                        ? isDemonMode ? 'text-[#ff0000] font-bold [text-shadow:_0_0_10px_rgba(255,0,0,0.7)]' : 'text-[#00ff00] font-bold [text-shadow:_0_0_10px_rgba(0,255,0,0.7)]'
                        : isDemonMode ? 'hover:text-[#ff0000]/90' : 'hover:text-[#00ff00]/90'
                    }`}
                  >
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
