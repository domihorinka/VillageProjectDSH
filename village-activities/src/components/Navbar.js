import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);
    return (
        <>
         <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                Village <i className='fab.fa-typo3 '/> 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/find-programs' className='nav-links' onClick={closeMobileMenu}>
                            Find Programs
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/plan-programs' className='nav-links' onClick={closeMobileMenu}>
                            Plan Programs
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                        <li className='nav-item'>
                        <Link to='/donate' className='nav-links' onClick={closeMobileMenu}>
                            Donate
                        </Link>
                        <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    </li>
                    </li>
                </ul>
             </div>
         </nav>
        </>
    );
}

export default Navbar
