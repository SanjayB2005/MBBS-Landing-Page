import React, { useState } from 'react';
import { 
  Heart,
  Activity,
  Stethoscope,
  Award,
  BookOpen,
  Globe 
} from "lucide-react";
import { stories } from '../Constants/index';

const SuccessStories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Rest of the stories array remains the same...
  

  // Animated medical icons component
  const AnimatedIcons = () => (
    <div className="flex justify-center gap-8 mb-8 text-blue-600">
      <Heart className="w-8 h-8 animate-pulse" />
      <Activity className="w-8 h-8 animate-bounce" />
      <Stethoscope className="w-8 h-8 animate-pulse" />
    </div>
  );

  // Stats animation component
  const AnimatedStats = ({ stats }) => (
    <div className="grid grid-cols-3 gap-2 mt-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-600">{stats.clinicalHours}</p>
        <p className="text-xs text-gray-500">Clinical Hours</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-teal-600">{stats.surgeries}</p>
        <p className="text-xs text-gray-500">Surgeries</p>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-600">{stats.research}</p>
        <p className="text-xs text-gray-500">Research Papers</p>
      </div>
    </div>
  );

  const filters = [
    { key: 'all', label: 'All', icon: Globe },
    { key: 'Cardiology', label: 'Cardiology', icon: Heart },
    { key: 'Surgery', label: 'Surgery', icon: Activity },
    { key: 'Research', label: 'Research', icon: BookOpen }
  ];

  const filteredStories = activeFilter === 'all' 
    ? stories 
    : stories.filter(story => story.specialty === activeFilter);

    const handleScrollToHero = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div className="w-full py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <AnimatedIcons />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Countless Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Our students are making their mark in the medical field worldwide
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                ${activeFilter === key 
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.map((story, index) => (
            <div 
              key={story.name}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                    <img
                      src={`https://placehold.co/160x160`}
                      alt={story.name}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{story.name}</h3>
                    <p className="text-sm text-gray-500">Batch of {story.year}</p>
                    <p className="text-sm text-teal-600">{story.specialty}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-800">
                  "{story.quote}"
                </blockquote>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-800">{story.university}</p>
                  <p className="text-sm text-teal-600">{story.country}</p>
                  <AnimatedStats stats={story.stats} />
                </div>

                {/* Achievement badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive footer */}
        <div className="mt-12 text-center">
          <button 
          onClick={handleScrollToHero}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium 
            hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Explore More Success Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;