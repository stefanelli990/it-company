import React from 'react';
import heroImg from '../assets/images/hero-img.jpg';
import bgImg from '../assets/images/bg-image.jpg';
import productDesignImg from '../assets/images/product-design.svg';
import webDevelopmentImg from '../assets/images/web-development.svg';
import mobileDevelopmentImg from '../assets/images/mobile-development.svg';
import projectImage1 from '../assets/images/project-image1.jpg';
import planning from '../assets/icons/planning.svg';
import estimation from '../assets/icons/estimation.svg';
import development from '../assets/icons/development.svg';
import testing from '../assets/icons/testing.svg';
import deployment from '../assets/icons/deployment.svg';
import maintenance from '../assets/icons/maintenance.svg';
import blogPostImg from '../assets/images/blogpost-img.jpg';

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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum molestiae, quam quibusdam vero corporis?</p>
                    </div>
                    <div className="item">
                        <img src={ webDevelopmentImg } alt="" />
                        <h4>Web development</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum molestiae, quam quibusdam vero corporis?</p>
                    </div>
                    <div className="item">
                        <img src={ mobileDevelopmentImg } alt="" />
                        <h4>Mobile development</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum molestiae, quam quibusdam vero corporis?</p>
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
                            <img src={planning} alt="" />
                            <h4>1. Planning</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum molestiae, quam quibusdam vero corporis?</p>
                        </div>
                        <div className="stages-item">
                            <img src={estimation} alt="" />
                            <h4>2. Estimation</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum molestiae, quam quibusdam vero corporis?</p>
                        </div>
                        <div className="stages-item">
                            <img src={development} alt="" />
                            <h4>3. Development</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum molestiae, quam quibusdam vero corporis?</p>
                        </div>
                        <div className="stages-item">
                            <img src={testing} alt="" />
                            <h4>4. Testing</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum molestiae, quam quibusdam vero corporis?</p>
                        </div>
                        <div className="stages-item">
                            <img src={deployment} alt="" />
                            <h4>5. Deploy</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum molestiae, quam quibusdam vero corporis?</p>
                        </div>
                        <div className="stages-item">
                            <img src={maintenance} alt="" />
                            <h4>6. Maintenance</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore cum molestiae, quam quibusdam vero corporis?</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact section */}
            <section className="contact-section" style={{
                backgroundImage: `linear-gradient(rgba(9, 82, 134, 0.9),rgba(9, 82, 134, 0.9)), url(${bgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <h1>Let’s work together</h1>
                    <br />
                    <Link to='/contact'>
                            <button className="btn btn--outline-white btn-arrow">
                                <span>Get started<svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8"><g><line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7"></polyline></g></svg></span>
                            </button>
                        </Link>
                </div>
            </section>

            {/* blog section */}
            {/* odraditi mapiranje */}
            <section className="blogs-section">
                <div className="container">
                <div className="section-title">
                        <h1>Our latest blogs</h1>
                    </div>
                    <div className="grid">
                        <div className="blog-item">
                            <img src={blogPostImg} alt="" />
                            <div className="blog-desc">
                                <h5>August 2, 2019</h5>
                                <h3>New blog</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam...</p>
                                <Link to='/new-blog'>
                                    Read more
                                </Link>
                            </div>
                        </div>
                        <div className="blog-item">
                            <img src={blogPostImg} alt="" />
                            <div className="blog-desc">
                                <h5>August 2, 2019</h5>
                                <h3>New blog</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam...</p>
                                <Link to='/new-blog'>
                                    Read more
                                </Link>
                            </div>
                        </div>
                        <div className="blog-item">
                            <img src={blogPostImg} alt="" />
                            <div className="blog-desc">
                                <h5>August 2, 2019</h5>
                                <h3>New blog</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam...</p>
                                <Link to='/new-blog'>
                                    Read more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
