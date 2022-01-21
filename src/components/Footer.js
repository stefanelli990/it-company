import React from 'react';
import facebookIcon from '../assets/icons/facebook-icon.svg';
import linkedinIcon from '../assets/icons/linkedin-icon.svg';
import instagramIcon from '../assets/icons/instagram-icon.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="grid">
                    <div>
                        <Link to='/' className="logo">
                            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="21.7827" y="21.7827" width="15.2174" height="15.2174" rx="2" fill="white"/>
                                <rect x="21.7827" y="2.28271" width="15.2174" height="15.2174" rx="2" fill="white"/>
                                <rect x="2.28271" y="21.7827" width="15.2174" height="15.2174" rx="2" fill="white"/>
                                <rect width="15.2174" height="15.2174" rx="2" fill="#31A0EB"/>
                            </svg>
                            <h4>Quad<span>Soft</span></h4>
                        </Link>
                        <br />
                        <p>QuadSoft is a leading it development agency that provides it solutions for businesses.</p>
                        <br />
                        <div className="social-networks">
                            <a href="https://github.com"  rel="noopener"><img src={facebookIcon} alt="" /></a>
                            <a href="https://github.com"  rel="noopener"><img src={linkedinIcon} alt="" /></a>
                            <a href="https://github.com"  rel="noopener"><img src={instagramIcon} alt="" /></a>
                        </div>
                    </div>
                    <div>
                        <h4>Quick links</h4>
                        <ul className='footer-links'>
                            <li className='footer-links-item'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='footer-links-item'>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className='footer-links-item'>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            <li className='footer-links-item'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='footer-links-item'>
                                <Link to='/blogs'>Blogs</Link>
                            </li>
                            <li className='footer-links-item'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <ul className='footer-links'>
                            <li className='footer-links-item'>
                                <Link to='/'>Product design</Link>
                            </li>
                            <li className='footer-links-item'>
                                <Link to='/services'>Web development</Link>
                            </li>
                            <li className='footer-links-item'>
                                <Link to='/projects'>Mobile development</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact info</h4>
                        <ul className='footer-links'>
                            <li className='footer-links-item'>
                                <span>4140 Parker Rd. Allentown,</span><br />
                                <span>New Mexico 31134</span>
                            </li>
                            <li className='footer-links-item'>
                                felicia.reid@example.com
                            </li>
                            <li className='footer-links-item'>
                                (480) 555-0103
                            </li>
                        </ul>
                    </div>
                    </div>
                </div> 
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div>© 2022. ITCompany. all rights reserved.</div>
                    <ul>
                        <li>Terms & contitions</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
            </div>
         </footer>;
}

export default Footer;
