'use client';

import { useTheme } from '@/context/ThemeContext';
import { TypeAnimation } from 'react-type-animation';

export const AboutSection = () => {
  const { isDemonMode } = useTheme();
  
  return <div id="about">   
    <div className={`min-h-screen bg-black ${isDemonMode ? 'text-[#ff0000]/70' : 'text-[#00ff00]/70'} py-20 px-4 font-["Share_Tech_Mono"]`}>
      {/* Main container */}
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Introduction */}
        <div className={`backdrop-blur-sm bg-black/40 rounded-lg border ${
          isDemonMode 
            ? 'border-[#ff0000]/20 shadow-[0_0_15px_rgba(255,0,0,0.3)]' 
            : 'border-[#00ff00]/20 shadow-[0_0_10px_rgba(0,255,0,0.2)]'
        } p-8`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDemonMode ? 'text-shadow-red' : ''}`}>&gt; About Me </h2>

          <TypeAnimation
            sequence={[
              "I'm a software developer who loves coding, hitting the gym, diving into self-help books, and, of course, scrolling through memes. I'm passionate about building efficient and scalable solutions, automating workflows, and solving real-world problems with technology. Always learning, always improving—whether it's in code, fitness, or life!",
              1000
            ]}
            wrapper="p"
            speed={50}
            className="text-lg leading-relaxed"
          />
        </div>

        {/* Skills and Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <div className={`backdrop-blur-sm bg-black/40 rounded-lg border ${
            isDemonMode 
              ? 'border-[#ff0000]/20 shadow-[0_0_15px_rgba(255,0,0,0.3)]' 
              : 'border-[#00ff00]/20 shadow-[0_0_10px_rgba(0,255,0,0.2)]'
          } p-8`}>
            <h2 className={`text-3xl font-bold mb-8 ${isDemonMode ? 'text-shadow-red' : ''}`}>&gt; Skills</h2>
            
            <div className="space-y-8">
              {/* Programming Languages */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDemonMode ? 'text-shadow-red' : ''}`}>Programming Languages</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: 'devicon-java-plain', name: 'Java', proficiency: 5 },
                    { icon: 'devicon-python-plain', name: 'Python', proficiency: 3 },
                    { icon: 'devicon-c-plain', name: 'C', proficiency: 3 },
                    { icon: 'devicon-javascript-plain', name: 'JavaScript', proficiency: 3 },
                    { icon: 'devicon-html5-plain', name: 'HTML & CSS', proficiency: 4 },
                    { icon: 'devicon-react-original', name: 'ReactJs', proficiency: 2 }
                  ].map((skill) => (
                    <div key={skill.name} className="group flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <i className={`${skill.icon} colored text-2xl ${isDemonMode ? 'animate-flicker' : ''}`}></i>
                        <span className={`transition-colors ${
                          isDemonMode 
                            ? 'group-hover:text-[#ff0000] text-shadow-red' 
                            : 'group-hover:text-[#00ff00]'
                        }`}>{skill.name}</span>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, index) => (
                          <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full ${
                              index < skill.proficiency
                                ? isDemonMode 
                                  ? 'bg-[#ff0000]/60 group-hover:bg-[#ff0000]' 
                                  : 'bg-[#00ff00]/60 group-hover:bg-[#00ff00]'
                                : isDemonMode
                                  ? 'bg-[#ff0000]/20'
                                  : 'bg-[#00ff00]/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Platforms */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${isDemonMode ? 'text-shadow-red' : ''}`}>Tools & Platforms</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: 'devicon-git-plain', name: 'Git & GitHub', proficiency: 5 },
                    { icon: 'devicon-amazonwebservices-original', name: 'AWS', proficiency: 3 },
                    { icon: 'devicon-vscode-plain', name: 'VS Code', proficiency: 5 },
                    { icon: 'devicon-intellij-plain', name: 'IntelliJ', proficiency: 3 },
                    { icon: 'devicon-docker-plain', name: 'Docker', proficiency: 2 },
                    { icon: 'devicon-apache-plain', name: 'Kafka', proficiency: 1 }
                  ].map((tool) => (
                    <div key={tool.name} className="group flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <i className={`${tool.icon} colored text-2xl ${isDemonMode ? 'animate-flicker' : ''}`}></i>
                        <span className={`transition-colors ${
                          isDemonMode 
                            ? 'group-hover:text-[#ff0000] text-shadow-red' 
                            : 'group-hover:text-[#00ff00]'
                        }`}>{tool.name}</span>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, index) => (
                          <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full ${
                              index < tool.proficiency
                                ? isDemonMode 
                                  ? 'bg-[#ff0000]/60 group-hover:bg-[#ff0000]' 
                                  : 'bg-[#00ff00]/60 group-hover:bg-[#00ff00]'
                                : isDemonMode
                                  ? 'bg-[#ff0000]/20'
                                  : 'bg-[#00ff00]/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Databases */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${isDemonMode ? 'text-shadow-red' : ''}`}>Frameworks</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Spring - Springboot', proficiency: 3 },
                      { name: 'Spring MVC', proficiency: 2 },
                      { name: 'Spring JPA', proficiency: 2 },
                      { name: 'Hibernate', proficiency: 1 }
                    ].map((skill) => (
                      <div key={skill.name} className="group flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isDemonMode 
                              ? 'bg-[#ff0000]/60 group-hover:bg-[#ff0000]' 
                              : 'bg-[#00ff00]/60 group-hover:bg-[#00ff00]'
                          }`}></span>
                          <span className={`transition-colors ${
                            isDemonMode 
                              ? 'group-hover:text-[#ff0000] text-shadow-red' 
                              : 'group-hover:text-[#00ff00]'
                          }`}>{skill.name}</span>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, index) => (
                            <div
                              key={index}
                              className={`w-1.5 h-1.5 rounded-full ${
                                index < skill.proficiency
                                  ? isDemonMode 
                                    ? 'bg-[#ff0000]/60 group-hover:bg-[#ff0000]' 
                                    : 'bg-[#00ff00]/60 group-hover:bg-[#00ff00]'
                                  : isDemonMode
                                    ? 'bg-[#ff0000]/20'
                                    : 'bg-[#00ff00]/20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${isDemonMode ? 'text-shadow-red' : ''}`}>Databases</h3>
                  <div className="space-y-2">
                    {[
                      { icon: 'devicon-mysql-plain', name: 'MySQL', proficiency: 4 },
                      { icon: 'devicon-mongodb-plain', name: 'MongoDB', proficiency: 3 }
                    ].map((db) => (
                      <div key={db.name} className="group flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <i className={`${db.icon} colored text-2xl ${isDemonMode ? 'animate-flicker' : ''}`}></i>
                          <span className={`transition-colors ${
                            isDemonMode 
                              ? 'group-hover:text-[#ff0000] text-shadow-red' 
                              : 'group-hover:text-[#00ff00]'
                          }`}>{db.name}</span>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, index) => (
                            <div
                              key={index}
                              className={`w-1.5 h-1.5 rounded-full ${
                                index < db.proficiency
                                  ? isDemonMode 
                                    ? 'bg-[#ff0000]/60 group-hover:bg-[#ff0000]' 
                                    : 'bg-[#00ff00]/60 group-hover:bg-[#00ff00]'
                                  : isDemonMode
                                    ? 'bg-[#ff0000]/20'
                                    : 'bg-[#00ff00]/20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className={`backdrop-blur-sm bg-black/40 rounded-lg border ${
            isDemonMode 
              ? 'border-[#ff0000]/20 shadow-[0_0_15px_rgba(255,0,0,0.3)]' 
              : 'border-[#00ff00]/20 shadow-[0_0_10px_rgba(0,255,0,0.2)]'
          } p-8 relative overflow-hidden`}>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <h2 className={`text-3xl font-bold inline-block ${isDemonMode ? 'text-shadow-red' : ''}`}>&gt; Education</h2>
              </div>
              
              {/* Timeline container with continuous line */}
              <div className="relative">
                {/* Continuous vertical line */}
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${
                  isDemonMode
                    ? 'bg-gradient-to-b from-[#ff0000]/30 via-[#ff0000]/50 to-[#ff0000]/30'
                    : 'bg-gradient-to-b from-[#00ff00]/30 via-[#00ff00]/50 to-[#00ff00]/30'
                }`}></div>
                
                <div className="space-y-12">
                  {/* Education items */}
                  {[
                    {
                      title: 'B.E Computer Science & Engineering',
                      institution: 'Saveetha Engineering College',
                      period: '2020 - 2024'
                    },
                    {
                      title: 'Higher Secondary Education',
                      period: '2019 - 2020'
                    },
                    {
                      title: 'Secondary Education',
                      period: '2017 - 2018'
                    }
                  ].map((edu, index) => (
                    <div key={index} className="relative pl-8">
                      {/* Timeline node */}
                      <div className={`absolute w-4 h-4 bg-black border-2 ${
                        isDemonMode 
                          ? 'border-[#ff0000]/60' 
                          : 'border-[#00ff00]/60'
                      } rounded-full -left-[7px] top-0`}></div>
                      
                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className={`text-xl font-semibold ${isDemonMode ? 'text-shadow-red' : ''}`}>{edu.title}</h3>
                        {edu.institution && <p>{edu.institution}</p>}
                        <p className={isDemonMode ? 'text-[#ff0000]/50' : 'text-[#00ff00]/50'}>{edu.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .text-shadow-red {
        text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      }

      @keyframes flicker {
        0% { opacity: .86139 }
        5% { opacity: .12793 }
        10% { opacity: .36759 }
        15% { opacity: .9766 }
        20% { opacity: .61364 }
        25% { opacity: .94477 }
        30% { opacity: .57811 }
        35% { opacity: .03416 }
        40% { opacity: .21835 }
        45% { opacity: .62054 }
        50% { opacity: .89452 }
        55% { opacity: .89997 }
        60% { opacity: .37872 }
        65% { opacity: .04929 }
        70% { opacity: .14477 }
        75% { opacity: .27512 }
        80% { opacity: .84701 }
        85% { opacity: .85952 }
        90% { opacity: .76553 }
        95% { opacity: .91372 }
        100% { opacity: .05536 }
      }

      .animate-flicker {
        animation: flicker 2s infinite;
      }

      @keyframes scanline {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }

      :global(.scanline)::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: ${isDemonMode ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)'};
        animation: scanline 6s linear infinite;
      }
    `}</style>
  </div>;
};
