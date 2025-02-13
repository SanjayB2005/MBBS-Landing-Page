import React from 'react';
import { advantages } from '../Constants/index';
import AdvantagesCard from '../Components/AdvantagesCard';

const Advantages = () => {
  return (
    <section 
      id='advantages' 
      className='w-full py-16 px-4 bg-gradient-to-b from-blue-50 to-teal-50'
    > 
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            MBBSGlobe <span className='bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent'>Advantages</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {advantages.map((advantage) => (
            <div 
              key={advantage.label} 
              className="group relative"
            >
              <AdvantagesCard {...advantage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;