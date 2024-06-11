import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { MdOutlineLocalDining } from "react-icons/md";

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className='border-b md:px-12 bg-[var(--secondary)] text-white fixed w-full'>
            <div className='flex justify-between p-6 items-center '>
                <a href='/' className='flex items-center gap-2'>
                    <MdOutlineLocalDining className=' scale-150' />
                    <h1 className='text-inherit font-bold text-2xl'>Eats Elite</h1>
                </a>
                <button onClick={() => setIsClicked(!isClicked)} className='navbar-button group md:hidden'><FaHamburger className='navbar-button-icon' /></button>
                {/* add component here that is enabled for higher ss */}
                <ul className='hidden gap-12 items-center p-4 md:flex'>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/login">Login</a></li>
                    <li className='bg-[var(--primary)] w-full text-center p-2 rounded-xl my-[-.5rem] text-black'><a href="/signup">Sign up</a></li>
                </ul>
            </div>
            <div className={`transition-all duration-200 ease-in-out transform ${isClicked ? 'translate-y-0 opacity-100 h-auto' : '-translate-y-full opacity-0 h-0'}`}>
                <ul className='flex flex-col items-center p-4 gap-4 mb-4'>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/login">Log in</a></li>
                    <li className='bg-[var(--secondary)] w-full text-center p-2 rounded-xl my-[-.5rem]'><a href="/signup">Sign up</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
