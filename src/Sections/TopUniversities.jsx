import { useState } from 'react';
import { universities } from '../Constants/index'; 

const TopUniversities = () => {
  const [activeCountry, setActiveCountry] = useState('Russia');

  
  return (
    <section id="universities" className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Top Universities
          </h2>
          <p className="text-lg text-gray-600">
            Explore Leading Medical Universities by Country
          </p>
        </div>
        
        {/* Country tabs - Horizontal scrollable on mobile */}
        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 mb-10">
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 min-w-max sm:min-w-0">
            {Object.keys(universities).map((country) => (
              <button
                key={country}
                onClick={() => setActiveCountry(country)}
                className={`px-4 py-2 text-sm md:text-base rounded-full whitespace-nowrap transition-all duration-300 
                  ${activeCountry === country 
                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg transform hover:scale-105' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-teal-200'}
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* Universities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities[activeCountry].map((university, index) => (
            <div 
              key={university}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-full text-white font-bold text-lg shadow-md">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {university}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {activeCountry}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Learn more
                </button>
                <span className="text-sm text-gray-500 font-medium">
                  MBBS Program
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view - "Show more" button */}
        <div className="mt-8 text-center sm:hidden">
          <button className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Show more universities
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopUniversities;