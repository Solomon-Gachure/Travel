import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
          <img className='w-full h-screen top-0 left-0 object-cover' src="https://images.unsplash.com/photo-1482955903579-70929ba3a509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlJTIwYnklMjB0aGUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
    <div className=' absolute w-full h-screen bg-black/20 top-0 left-0'/>
    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] absolute p-4 max-w-[1100px] m-auto'>
            <p className='text-xl'>Planning for a getaway</p>
            <p className='text-5xl md:text-7xl font-bold drop-shadow-2xl text-orange-500'>EXCLUSIVE BEACH HOTELS & RESORTS</p>
            <p className='max-w-[600px] drop-shadow-2xl text-xl'>At a cheap price, you get to book and accomodation at one of our prestigious locations, Home Away From Home!</p>
            <button className='bg-white text-black cursor-pointer mt-4 font-bold'>Reserve Now</button>
        </div>
    </div>
    </div>
  )
}

export default Hero