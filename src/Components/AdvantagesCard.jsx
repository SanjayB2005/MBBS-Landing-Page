import React from 'react'

const Services = ({imgURL, label, subtext}) => {
  return (
    <div className=' flex flex-row sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-[inset_0px_2px_4px_0px_rgba(0,_0,_0,_0.3)] px-2 py-2'>
      <div className='w-20 h-20 flex justify-center items-center  rounded-full'>
          <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <p className='mt-3 break-words leading-normal font-montserrat  text-[18px] text-slate-gray'>{subtext}</p>
     
    </div>
  )
}

export default Services