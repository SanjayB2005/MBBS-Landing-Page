import React from 'react';
import { copyrightSign } from "../assets/icons";
import { logo1 } from '../assets/images';
import { footerLinks, socialMedia } from "../Constants/index";

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-16 lg:gap-24 max-lg:flex-col">
          {/* Logo and Company Info Section */}
          <div className="flex flex-col flex-shrink-0 max-w-sm">
            <a href="/" className="inline-block">
              <img 
                src={logo1} 
                alt="Logo" 
                className="w-[130px] h-auto"
              />
            </a>
            <p className="mt-6 text-gray-400 text-base leading-relaxed">
              Secure your seat in your favorite college and start your successful medical career today.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8">
              {socialMedia.map((icon, index) => (
                <a 
                  key={index}
                  href={icon.href || '#'}
                  className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 
                    hover:to-teal-600 transition-all duration-300 transform 
                    hover:scale-110"
                >
                  <img 
                    src={icon.src} 
                    alt={icon.alt} 
                    className="w-5 h-5 filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          <div className="flex flex-1 justify-between flex-wrap gap-12">
            {footerLinks.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h4 className="text-white text-lg font-medium mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href || '#'} 
                        className="text-gray-400 hover:text-teal-400 
                          transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap justify-between gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <img 
              src={copyrightSign} 
              alt="copyright" 
              className="w-5 h-5 opacity-80"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-teal-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors duration-300">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;