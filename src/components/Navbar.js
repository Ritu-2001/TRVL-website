



import React, { useState , useEffect} from 'react';
// import Button from './Button';
import {NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        setClick(!click);
        if (window.innerWidth <= 960) {
            setButton(false);
            console.log("hey");
        } else {
            setButton(true);
        }
    };

    // useEffect(()=>{
    //   showButton();
    // }, []);



    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL<i className="fab fa typo-3" />
                    </NavLink>
                    <div className='menu=icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </NavLink>

                        </li>
                        <li className='nav-item'>
                            <NavLink to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/signup' className='nav-links' onClick={closeMobileMenu}>
                                sign up
                            </NavLink>
                        </li>
                    </ul>
                    {button && <button buttonstyle='btn---outline'></button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;