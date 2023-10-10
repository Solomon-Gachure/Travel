import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
              <img className='row-span-3 p-2 w-full object-cover h-full'  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBieSUyMHRoZSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="/"  />
              <img className='row-span-2 p-2 w-full object-cover h-full' src="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2UlMjBieSUyMHRoZSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="/" />
              <img className='row-span-2 p-2 w-full object-cover h-full' src="https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlJTIwYnklMjB0aGUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
              <img className='row-span-3 p-2 w-full object-cover h-full' src="https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlJTIwYnklMjB0aGUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
              <img className='row-span-3 p-2 w-full object-cover h-full' src="https://images.unsplash.com/photo-1476129718124-c0494399ab1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlJTIwYnklMjB0aGUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="/" />

        </div>
        <div className='flex flex-col h-full justify-center'>
            <p className='text-5xl md:text-6xl font-bold text-orange-500 border-b-2'>Plan Your Next Trip</p>
            <p className='text-2xl py-6'>Allow us to help you embark in a sweet home away from home experience</p>
            <p className='pb-6'>Expensive services doesn't come this cheap!!</p>
            <div>
                <button className='mr-4 border-black hover:shadow-lg'>Learn More</button>
                <button className='border-black bg-black text-white hover:bg-white hover:text-black hover:shadow-xl'>Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default Plan