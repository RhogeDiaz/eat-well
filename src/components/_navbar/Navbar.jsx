import { FaHamburger } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='flex justify-between p-3 items-center'>
            <a className=' text-inherit font-bold text-2xl' href='/'>Eats Elite</a>
            <button className='navbar-button group'><FaHamburger className='navbar-button-icon' /></button>
        </div>
    )
}

export default Navbar