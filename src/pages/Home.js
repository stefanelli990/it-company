import React from 'react';
import heroImg from '../assets/images/hero-img.jpg';
import bgImg from '../assets/images/bg-image.jpg';
import productDesignImg from '../assets/images/product-design.svg';
import webDevelopmentImg from '../assets/images/web-development.svg';
import mobileDevelopmentImg from '../assets/images/mobile-development.svg';
import projectImage1 from '../assets/images/project-image1.jpg';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='home'>

            {/* hero */}
            <section className="hero-section" style={{
                backgroundImage: `linear-gradient(rgba(9, 82, 134, 0.9),rgba(9, 82, 134, 0.9)), url(${heroImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <div className="hero-text">
                        <h1>Turn your ideas into reality</h1>
                        <p>We are team of exceptional IT professionals that will help you to boost your business performance.</p>
                        <br />
                        <Link to='/about'>
                            <button className="btn btn--outline-white btn-arrow">
                                <span>Learn more<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8"><g><line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7"></polyline></g></svg></span>
                            </button>
                        </Link>
                    </div>
                </div>
                    <div class="scroll-container">
                        <div class="scroller"></div>
                    </div>
            </section>

            {/* services */}
            <section className="services-section">
                <div className="container">
                    <div className="section-title">
                        <h1>What we do</h1>
                    </div>
                    <div className="grid">
                    <div className="item">
                        <img src={ productDesignImg } alt="" />
                        <h4>Product design</h4>
                        <p>Need a human-centric design to ensure your app is engaging and interactive? We can make it happen.</p>
                    </div>
                    <div className="item">
                        <img src={ webDevelopmentImg } alt="" />
                        <h4>Web development</h4>
                        <p>Be it a responsive, secure website, or ecommerce site, or maybe saas application, we have experts that do it all.</p>
                    </div>
                    <div className="item">
                        <img src={ mobileDevelopmentImg } alt="" />
                        <h4>Mobile development</h4>
                        <p>Our skilled team can develop native/hybrid mobile apps to help you turn your ideas into reality.</p>
                    </div>
                    </div>
                    <Link to='/services'>
                            <button className="btn btn--outline-blue btn-arrow">
                                <span>Learn more<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8"><g><line fill="none" stroke="#31A0EB" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#31A0EB" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7"></polyline></g></svg></span>
                            </button>
                    </Link>
                </div>
            </section>

            {/* counter */}
            <section className="section-counter" style={{
                backgroundImage: `linear-gradient(rgba(9, 82, 134, 0.9),rgba(9, 82, 134, 0.9)), url(${bgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <div className="grid">
                        <div className="item">
                            <h1>100+</h1>
                            <h4>Happy clients</h4>
                        </div>
                        <div className="item">
                            <h1>100+</h1>
                            <h4>Happy clients</h4>
                        </div>
                        <div className="item">
                            <h1>100+</h1>
                            <h4>Happy clients</h4>
                        </div>
                        <div className="item">
                            <h1>100+</h1>
                            <h4>Happy clients</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* our projects */}

            <section className="our-projects">
                <div className="container">
                    <div className="section-title">
                        <h1>Our projects</h1>
                    </div>
                    <div className="grid">
                        <div className="project-item">
                            <img src={projectImage1} alt="" />
                            <div className="overlay">
                            <h5>Web app</h5>
                                <h3>CoinView</h3>
                                <button className="btn btn--outline-white btn--small btn-arrow">
                                    <span>Learn more<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8"><g><line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7"></polyline></g></svg></span>
                                </button>
                            </div>
                        </div>
                        <div className="project-item">
                            <img src={projectImage1} alt="" />
                            <div className="overlay">
                                <h5>Web app</h5>
                                <h3>Coin View</h3>
                                <button className="btn btn--outline-white btn--small btn-arrow">
                                    <span>Learn more<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8"><g><line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7"></polyline></g></svg></span>
                                </button>
                            </div>
                        </div>
                        <div className="project-item">
                            <img src={projectImage1} alt="" />
                            <div className="overlay">
                            <h5>Web app</h5>
                                <h3>Coin View</h3>
                                <button className="btn btn--outline-white btn--small btn-arrow">
                                    <span>Learn more<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8"><g><line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7"></polyline></g></svg></span>
                                </button>
                            </div>
                        </div>
                        <div className="project-item">
                            <img src={projectImage1} alt="" />
                            <div className="overlay">
                            <h5>Web app</h5>
                                <h3>Coin View</h3>
                                <button className="btn btn--outline-white btn--small btn-arrow">
                                    <span>Learn more<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8"><g><line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7"></polyline></g></svg></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Link to='/our-projects'>
                            <button className="btn btn--outline-blue btn-arrow">
                                <span>Learn more<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8"><g><line fill="none" stroke="#31A0EB" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#31A0EB" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7"></polyline></g></svg></span>
                            </button>
                    </Link>
                </div>
            </section>

            {/* stages */}
            <section className="stages">
                <div className="container">
                    <div className="section-title">
                        <h1>How we work</h1>
                    </div>
                    <div className="grid">
                        <div className="stages-item">
                            <img src={projectImage1} alt="" />
                            <h4>Product design</h4>
                            <p>Need a human-centric design to ensure your app is engaging and interactive? We can make it happen.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
