import React from 'react';
import { MBBS_Landing_Page1, MBBS_Landing_Page2 } from "../assets/images";

const Hero = () => {
  return (
    <section id="home" className='relative w-full min-h-screen bg-gradient-to-b from-blue-50 to-teal-50'>
      
      <div className='absolute inset-0 w-full h-full hidden sm:block'>
        <img 
          src={MBBS_Landing_Page1} 
          alt="MBBS Abroad" 
          className="object-cover w-full h-full opacity-90" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

     
      <div className='sm:hidden w-full h-[300px] relative'>
        <img 
          src={MBBS_Landing_Page2} 
          alt="MBBS Abroad Mobile" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-16 flex flex-col sm:flex-row gap-8">
       
        <div className="w-full sm:w-1/2">
          
          <div className="hidden sm:block sm:pl-8 pt-28">
            <h1 className="text-white font-bold text-4xl lg:text-5xl leading-tight">
              Take a step toward studying <br /> 
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                MBBS ABROAD
              </span>
            </h1>
            <ul className="text-white font-semibold text-xl mt-8 space-y-4">
              <li className="flex items-center gap-3"> 
                <span className="text-teal-400 text-2xl">✓</span> 
                Courses starting from ₹8L
              </li>
              <li className="flex items-center gap-3"> 
                <span className="text-teal-400 text-2xl">✓</span> 
                Admission in top universities
              </li>
              <li className="flex items-center gap-3"> 
                <span className="text-teal-400 text-2xl">✓</span> 
                100% placement assistance
              </li>
            </ul>
          </div>

          
          <div className="sm:hidden bg-white/95 rounded-lg p-6 shadow-lg -mt-10 relative z-10">
            <h1 className="text-gray-800 font-bold text-2xl text-center mb-4">
              Take a step toward studying MBBS ABROAD
            </h1>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700"> 
                <span className="text-teal-500 text-xl">✓</span> 
                Courses starting from ₹8L
              </li>
              <li className="flex items-center gap-2 text-gray-700"> 
                <span className="text-teal-500 text-xl">✓</span> 
                Admission in top universities
              </li>
              <li className="flex items-center gap-2 text-gray-700"> 
                <span className="text-teal-500 text-xl">✓</span> 
                100% placement assistance
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center">
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 sm:p-8 mt-0 sm:mt-28">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Start Your Career With Us
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Full Name..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
              />
              <input
                type="email"
                placeholder="Enter Email Address..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
              />
              <div className="flex">
                <select className="px-3 py-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50">
                  <option value="+91">+91</option>
                  <option value="+91">+79</option>
                  <option value="+91">+20</option>
                  <option value="+91">+63</option>
                  <option value="+91">+70</option>
                  <option value="+91">+77</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter Phone Number..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Your Pin Code..."
                pattern="\d*"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
              />
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  name="terms" 
                  className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" 
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I have read and agreed to the{' '}
                  <span className="text-teal-600 cursor-pointer hover:underline">terms</span> & {' '}
                  <span className="text-teal-600 cursor-pointer hover:underline">privacy policy</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 
                text-white font-semibold rounded-lg transition duration-300 transform hover:scale-[1.02]"
              >
                Book your free consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;