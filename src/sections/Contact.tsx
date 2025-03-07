'use client';

import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { TypeAnimation } from 'react-type-animation';

export const ContactSection = () => {
  const { isDemonMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('JhnGMU8rTmIAtvh9y');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const result = await emailjs.send(
        'service_tuth7vt',
        'template_nrybezl',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      console.log('Email sent successfully:', result);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div id="contact" className="min-h-[120vh] backdrop-blur-sm bg-black/30 py-20 px-4 font-['Share_Tech_Mono']">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex items-center">
          <h2 className={`text-3xl font-bold ${isDemonMode ? 'text-[#ff0000]' : 'text-[#00ff00]'} ${isDemonMode ? 'text-shadow-red' : ''}`}>
            &gt; Contact
          </h2>
        </div>

        {/* Contact Form */}
        <div className={`backdrop-blur-sm bg-black/40 rounded-lg border ${
          isDemonMode 
            ? 'border-[#ff0000]/20 shadow-[0_0_15px_rgba(255,0,0,0.3)]' 
            : 'border-[#00ff00]/20 shadow-[0_0_10px_rgba(0,255,0,0.2)]'
        } p-8 relative overflow-hidden`}>
          <div className="scanline"></div>

          <form onSubmit={handleSubmit} className={`space-y-6 ${isDemonMode ? 'text-[#ff0000]/70' : 'text-[#00ff00]/70'}`}>
            {/* Name Input */}
            <div className="space-y-2">
              <div className={`flex items-center ${isDemonMode ? 'text-[#ff0000]/50' : 'text-[#00ff00]/50'}`}>
                <span className="mr-2"></span>
                <span className="text-sm">Name</span>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full bg-transparent border ${
                  isDemonMode 
                    ? 'border-[#ff0000]/20 focus:border-[#ff0000]/40' 
                    : 'border-[#00ff00]/20 focus:border-[#00ff00]/40'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  isDemonMode 
                    ? 'focus:ring-[#ff0000]/20' 
                    : 'focus:ring-[#00ff00]/20'
                }`}
                placeholder="Enter your name..."
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <div className={`flex items-center ${isDemonMode ? 'text-[#ff0000]/50' : 'text-[#00ff00]/50'}`}>
                <span className="mr-2"></span>
                <span className="text-sm">Email</span>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full bg-transparent border ${
                  isDemonMode 
                    ? 'border-[#ff0000]/20 focus:border-[#ff0000]/40' 
                    : 'border-[#00ff00]/20 focus:border-[#00ff00]/40'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  isDemonMode 
                    ? 'focus:ring-[#ff0000]/20' 
                    : 'focus:ring-[#00ff00]/20'
                }`}
                placeholder="Enter your email..."
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <div className={`flex items-center ${isDemonMode ? 'text-[#ff0000]/50' : 'text-[#00ff00]/50'}`}>
                <span className="text-sm">Description</span>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full bg-transparent border ${
                  isDemonMode 
                    ? 'border-[#ff0000]/20 focus:border-[#ff0000]/40' 
                    : 'border-[#00ff00]/20 focus:border-[#00ff00]/40'
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  isDemonMode 
                    ? 'focus:ring-[#ff0000]/20' 
                    : 'focus:ring-[#00ff00]/20'
                }`}
                placeholder="Enter your message..."
              />
            </div>

            {/* Status Messages */}
            {status === 'sending' && (
              <div className={`flex items-center ${isDemonMode ? 'text-[#ff0000]/50' : 'text-[#00ff00]/50'}`}>
                <span className="mr-2">$</span>
                <span className="text-sm">{'>'} Sending message...</span>
              </div>
            )}

            {status === 'success' && (
              <div className={`flex items-center ${isDemonMode ? 'text-[#ff0000]' : 'text-[#00ff00]'}`}>
                <span className="mr-2">$</span>
                <span className="text-sm">{'>'} Message sent successfully!</span>
              </div>
            )}

            {status === 'error' && (
              <div className={`flex items-center ${isDemonMode ? 'text-[#ff0000]' : 'text-[#00ff00]'}`}>
                <span className="mr-2">$</span>
                <span className="text-sm">{'>'} Error: {errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3 rounded-lg border ${
                isDemonMode 
                  ? 'border-[#ff0000]/20 hover:border-[#ff0000]/40 hover:bg-[#ff0000]/10' 
                  : 'border-[#00ff00]/20 hover:border-[#00ff00]/40 hover:bg-[#00ff00]/10'
              } transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <div className="flex items-center justify-center">
                <span className="mr-2"></span>
                <span className="text-sm">Send</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
