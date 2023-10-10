import React from 'react'

const Rooms = () => {
    return (
        <div className='max-w-[1400px] h-[500px] mx-auto bg-orange-200 my-20 pt-16 px-4 lg:mb-[20%] md:mb-[35%] grid lg:grid-cols-3 gap-4'>
            <div className='relative lg:top-20 lg:col-span-1 col-span-2'>
                <h3 className='text-4xl font-bold'>Fine Interior Rooms</h3>
                <p>Get to stay at our prestigious rooms with beautiful decors and interior designs out of this world!</p>
            </div>
            <div className='grid grid-cols-2 col-span-2 gap-3'>
                <img className='w-full h-full object-cover' src="https://media.istockphoto.com/id/612403380/photo/beach-house-interior-at-seashore.webp?b=1&s=170667a&w=0&k=20&c=Hz-Wu5bkoAiFCAzeEdqNKWytwWhJEb5Io2SjQFkaBb4=" 
                 alt="/" />
                <img className='w-full h-full object-cover row-span-2' src="https://media.istockphoto.com/id/157403495/photo/beach-house-sun-room.webp?b=1&s=170667a&w=0&k=20&c=P4NGTWYowIzZ1OBQU4dCfGDZxb5zXtBqXnKuCTfc_uI=" 
                alt="/" />
                <img className='w-full h-full object-cover' src="https://media.istockphoto.com/id/842374074/photo/modern-minimalist-living-room-with-panoramic-ocean-view.webp?b=1&s=170667a&w=0&k=20&c=uWmc7JebA7uA9bKbpa2OHj7DtzXfOU0VtKJtWvEmFdM="
                 alt="/" />

            </div>
        </div>
    )
}

export default Rooms