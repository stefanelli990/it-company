import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
            <nav className='navbar'>
                <div className="container">
                    <Link to='/' className="logo">
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="21.7827" y="21.7827" width="15.2174" height="15.2174" rx="2" fill="white"/>
                            <rect x="21.7827" y="2.28271" width="15.2174" height="15.2174" rx="2" fill="white"/>
                            <rect x="2.28271" y="21.7827" width="15.2174" height="15.2174" rx="2" fill="white"/>
                            <rect width="15.2174" height="15.2174" rx="2" fill="#31A0EB"/>
                        </svg>
                        <h4>Quad<span>Soft</span></h4>
                    </Link>
                    <ul className='nav-links'>
                        <li className='nav-links-item'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='nav-links-item'>
                            <Link to='/services'>Services</Link>
                        </li>
                        <li className='nav-links-item'>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li className='nav-links-item'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='nav-links-item'>
                            <Link to='/blogs'>Blogs</Link>
                        </li>
                        <li className='nav-links-item'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar
