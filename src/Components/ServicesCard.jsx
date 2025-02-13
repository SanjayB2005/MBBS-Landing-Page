import React from 'react'

const Services = ({imgURL, label, subtext}) => {
  return (
    <div className=' flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-5 py-5'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
          <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 leading-normal font-palanquin text-3xl font-bold '>{label}</h3>
      <p className='mt-3 break-words leading-normal font-montserrat  text-[18px] text-slate-gray'>{subtext}</p>
     
    </div>
  )
}

export default Services