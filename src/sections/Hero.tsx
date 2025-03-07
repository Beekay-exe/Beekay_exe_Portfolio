'use client';

import { MatrixRain } from '../components/MatrixRain';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@/context/ThemeContext';

export const HeroSection = () => {
  const { isDemonMode } = useTheme();
  const [locationData, setLocationData] = useState<{
    ip?: string;
    org?: string;
    asn?: string;
    latitude?: string;
    longitude?: string;
    city?: string;
    region?: string;
    postal?: string;
    country_name?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getLocation = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check if we have cached data
      const cachedData = localStorage.getItem('locationData');
      const cacheTimestamp = localStorage.getItem('locationDataTimestamp');
      const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

      if (cachedData && cacheTimestamp) {
        const timestamp = parseInt(cacheTimestamp);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setLocationData(JSON.parse(cachedData));
          setIsLoading(false);
          return;
        }
      }

      // If no cache or expired, fetch new data with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Normalize the data structure
        const normalizedData = {
          ip: data.ip,
          city: data.city,
          region: data.region,
          country_name: data.country_name,
          latitude: data.latitude,
          longitude: data.longitude,
          org: data.org,
          asn: data.asn
        };

        // Cache the data
        localStorage.setItem('locationData', JSON.stringify(normalizedData));
        localStorage.setItem('locationDataTimestamp', Date.now().toString());

        setLocationData(normalizedData);
      } catch (fetchError) {
        if (fetchError.name === 'AbortError') {
          throw new Error('Request timed out. Using fallback location service...');
        }
        throw fetchError;
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch location data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  const formatLocationData = () => {
    if (error) return `> Error: ${error}`;
    if (isLoading) return '> Scanning...';
    if (!locationData) return '> No location data available.';
    
    return `> Scan complete!\n` +
           `> IP: ${locationData.ip || 'Unknown'}\n` +
           `> Location: ${locationData.city || 'Unknown'}, ${locationData.country_name || 'Unknown'}\n` +
           `> Found you!`;
  };

  return (
    <div id="home" className="relative min-h-screen w-full flex items-center justify-center p-4">
      <MatrixRain />
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-6 md:gap-8 mt-16 md:mt-24">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full">
          {/* Avatar section */}
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] flex-shrink-0">
            <div className="relative rounded-full overflow-hidden">
              <div className={`absolute inset-0 ${isDemonMode ? 'animate-flicker' : 'glitch-effect'}`}></div>
              <Image
                src="/Avatar.jpg"
                alt="Bharath Kumar"
                width={400}
                height={400}
                className={`w-full h-full object-cover relative z-10 ${isDemonMode ? 'hue-rotate-[320deg] contrast-125 brightness-110' : ''}`}
              />
              <div className={`absolute inset-0 ${isDemonMode ? 'animate-flicker-2' : 'glitch-effect-2'}`}></div>
            </div>
          </div>

          {/* Console-like widget */}
          <div className={`backdrop-blur-sm bg-black/40 rounded-lg border ${
            isDemonMode 
              ? 'border-[#ff0000]/20 shadow-[0_0_15px_rgba(255,0,0,0.3)]' 
              : 'border-[#00ff00]/20 shadow-[0_0_10px_rgba(0,255,0,0.2)]'
            } p-4 md:p-6 flex-1 max-w-2xl min-h-[300px] md:min-h-[350px] flex flex-col font-["Share_Tech_Mono"] relative`}>
            
            {/* Scanline effect */}
            <div className={`scanline ${isDemonMode ? 'scanline-red' : ''}`}></div>
            
            {/* Terminal header */}
            <div className={`border-b ${isDemonMode ? 'border-[#ff0000]/20' : 'border-[#00ff00]/20'} pb-3 mb-6`}>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isDemonMode ? 'bg-[#ff0000]/30 ' : 'bg-[#00ff00]/30'}`}></div>
                <div className={`${isDemonMode ? 'text-[#ff0000]/50' : 'text-[#00ff00]/50'} text-xs`}>user@portfolio:~</div>
              </div>
            </div>
            
            {/* Terminal content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className={`flex items-center ${isDemonMode ? 'text-[#ff0000]/80' : 'text-[#00ff00]/80'}`}>
                  <span className="mr-2"></span>
                  <TypeAnimation
                    sequence={[
                      'Hello There!',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className={`text-2xl md:text-3xl font-bold ${isDemonMode ? 'text-shadow-red' : ''}`}
                  />
                </div>
                <div className={`flex items-center ${isDemonMode ? 'text-[#ff0000]/80' : 'text-[#00ff00]/80'}`}>
                  <span className="mr-2"></span>
                  <TypeAnimation
                    sequence={[
                      1000,
                      "I'm Bharath Kumar",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className={`text-xl md:text-2xl font-bold ${isDemonMode ? 'text-shadow-red' : ''}`}
                  />
                </div>
              </div>
              
              <div className={isDemonMode ? 'text-[#ff0000]/70' : 'text-[#00ff00]/70'}>
                <TypeAnimation
                  sequence={[
                    2000,
                    '$ ./display_profile.sh\n',
                    500,
                    '> Initializing...\n',
                    500,
                    '> Loading profile data...\n',
                    500,
                    '> Status: ACTIVE (unemployed)\n',
                    500,
                    '> Wannabe Software Developer, Active Learner, and a bit of a perfectionist.\n',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-sm md:text-base whitespace-pre-line leading-relaxed block"
                />
              </div>

              {/* Location Data */}
              <div className={`${isDemonMode ? 'text-[#ff0000]/60' : 'text-[#00ff00]/60'} border-t ${
                isDemonMode ? 'border-[#ff0000]/20' : 'border-[#00ff00]/20'
              } pt-4`}>
                <TypeAnimation
                  sequence={[
                    1000,
                    '$ ./scan_visitor.sh\n' + formatLocationData(),
                    1000,
                  ]}
                  wrapper="span"
                  speed={99}
                  repeat={0}
                  className="text-xs md:text-sm whitespace-pre-line leading-relaxed block"
                />
              </div>
            </div>

            {/* Blinking cursor */}
            <div className="mt-2">
              
            </div>
          </div>
        </div>

        {/* Scroll down arrow */}
        <div className="animate-bounce mt-4">
          <svg 
            className={`w-6 h-6 ${isDemonMode ? 'text-[#ff0000]/50' : 'text-[#00ff00]/50'}`}
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
