import React, { useState } from 'react';
import { navLinks } from '../Constants/index';
import { hamburger } from '../assets/icons';
import { logo1 } from '../assets/images';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    const offset = 80; // Height of navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setIsMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md shadow-lg"></div>

      <nav className='relative max-w-7xl mx-auto px-4 py-4'>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href='/' className="relative z-10">
            <img 
              src={logo1} 
              alt='Logo' 
              className="w-[130px] h-auto" 
            />
          </a>

          {/* Desktop Navigation */}
          <ul className='hidden lg:flex items-center gap-8'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  onClick={(e) => handleScroll(e, item.href)}
                  className='font-medium text-gray-600 hover:text-teal-600 transition-colors duration-300'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Join Us Button - Desktop */}
          <div className='hidden lg:block'>
            <a 
              href='#sign-in'
              className='px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full 
                font-medium hover:from-blue-600 hover:to-teal-600 transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg'
            >
              Join Us Now
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            className='lg:hidden relative z-10 p-2 hover:bg-gray-100 rounded-lg transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <img src={hamburger} alt='Menu' className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col pt-20 px-4">
            <ul className='space-y-4'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleScroll(e, item.href)}
                    className='block text-lg font-medium text-gray-600 hover:text-teal-600 
                      py-2 border-b border-gray-100 transition-colors duration-300'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Join Us Button - Mobile */}
            <div className='mt-8'>
              <a 
                href='#sign-in'
                className='block w-full py-3 bg-gradient-to-r from-blue-500 to-teal-500 
                  text-white text-center rounded-lg font-medium hover:from-blue-600 
                  hover:to-teal-600 transition-all duration-300'
              >
                Join Us Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;