import { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className=' transition ease-in-out'>
            <div className='flex justify-between p-3 items-center'>
                <a className=' text-inherit font-bold text-2xl' href='/'>Eats Elite</a>
                <button onClick={() => setIsClicked(!isClicked)} className='navbar-button group'><FaHamburger className='navbar-button-icon' /></button>
                {/* add component here that is enabled for higher ss */}
            </div>
            {isClicked ? (
                <ul className='flex flex-col items-center transition-all p-4 gap-4'>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/login">Log in</a></li>
                    <li className='bg-[var(--secondary)] w-full text-center p-2 rounded-xl my-[-.5rem]'><a href="/signup">Sign up</a></li>
                </ul>
            ) : null}
        </div>
    )
}

export default Navbar