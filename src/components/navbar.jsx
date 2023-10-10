import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    };
    return (
        <div className='absolute w-full flex justify-between items-center'>
            <h1 className='font-bold text-white text-2xl z-20'>Travel</h1>
            <BiMenuAltRight onClick={handleNav} className='text-white font-bold z-50 cursor-pointer' size={25} />
            <div className={nav
                ? 'ease-in duration-300 fixed left-0 top-0 text-gray-300 bg-black/90 w-full h-screen z-10 flex flex-col px-4 py-7'
                : 'absolute w-full h-screen left-[-100%] ease-in duration-500 z-10 top-0'}>
                <ul className='w-full h-full flex flex-col items-center justify-center'>
                    <li className='font-bold p-8 text-2xl'>Home</li>
                    <li className='font-bold p-8 text-2xl'>Destinations</li>
                    <li className='font-bold p-8 text-2xl'>Reservations</li>
                    <li className='font-bold p-8 text-2xl'>Amenities</li>
                    <li className='font-bold p-8 text-2xl'>Rooms</li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar