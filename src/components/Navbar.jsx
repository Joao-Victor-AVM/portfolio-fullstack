import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const location = useLocation;

    return(
        <nav className='navbar'>
            <div className='logo'>
                <Link to="/">PORTFÓLIO</Link>
            </div>

            <ul className='nav-links'>
                <li>
                    <Link to="/work" 
                    className={location.pathname === '/work' || location.pathname === '/' ? 'ativo' : ''}>
                    Work
                    </Link>
                </li>
                <li>
                    <Link to="/contact" 
                    className={location.pathname === '/contact' ? 'ativo' : ''}>
                    Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )}

export default Navbar;