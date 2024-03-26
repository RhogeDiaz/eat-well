import './Navbar.css'
import { FaHamburger } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <a href='/'>Eat Well</a>
            <button><FaHamburger className='burger-icon' /></button>
        </div>
    )
}

export default Navbar