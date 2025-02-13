import React from 'react';
import { services } from '../Constants/index';
import ServiceCard from '../Components/ServicesCard';

const Services = () => {
  return (
    <section 
      id='services' 
      className='w-full py-16 px-4 bg-gradient-to-b from-teal-50 to-blue-50'
    > 
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Should 
            <span className='bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent'> Choose </span>
            Us?
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {services.map((service) => (
            <div 
              key={service.label} 
              className="w-full group transform hover:-translate-y-2 transition-all duration-300"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;