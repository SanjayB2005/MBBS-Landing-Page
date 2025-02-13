import React, { useState } from 'react';

import { content } from '../Constants/index';

const StudyAbroadSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  

  const handleScrollToHero = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-us" className="w-full py-16 px-4 bg-gradient-to-b from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center ${isExpanded ? 'mb-12' : 'mb-6'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Study Abroad with MBBSGlobe
          </h2>
          <div className="relative">
            <p className={`text-gray-600 text-lg leading-relaxed mx-auto max-w-4xl transition-all duration-500 ${
              isExpanded ? '' : 'line-clamp-3'
            }`}>
              {content.introduction}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-300"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
          isExpanded ? 'opacity-100 translate-y-0 mb-12' : 'hidden'
        }`}>
          {content.sections.map((section, index) => (
            <div
              key={section.title}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <section.icon className="w-8 h-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm flex-shrink-0 mr-3">
                      {idx + 1}
                    </span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button  
          onClick={handleScrollToHero}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium 
            hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadSection;