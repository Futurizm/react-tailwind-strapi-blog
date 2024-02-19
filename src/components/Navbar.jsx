import React, {useState} from 'react';
import {menu, close, logo} from '../assets';
const Navbar = () => {

    const [toggle, setToggle] = useState(false);



    const handleClick = () => {
        setToggle(!toggle)
    }

    return ( 
        <header className='w-full h-[80px] z-10 bg-white drop-shadow-lg relative'>
            <div className='flex justify-between items-center w-full h-full md: max-w-[1240px] m-auto'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 xs:ml-5 md:ml-3 opacity-[55%] w-full h-[25px]' />
                </div>


                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                
                
                <div className="hidden md:flex md:mr-10">
                    <button className="border-none bg-transparent text-black mr-4">Login</button>
                    <button className="px-8 py-3 ml-4">Sign Up</button>
                </div>

                <div className="md:hidden" onClick={handleClick}>
                    <img src={toggle ? close : menu} alt="burger" className="w-[28px] h-[28px] object-contain mr-10" />
                </div>


            </div>
            <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platform</li>
                <li>Pricing</li>
                <div className='flex flex-col my-4'>
                    <button className="bg-transparent text-black mb-4 py-3">Login</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>
            </ul>
        </header>
     );
}
 
// 4:29

export default Navbar;