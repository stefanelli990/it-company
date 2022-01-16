import React from 'react';
import heroImg from '../assets/images/hero-img.jpg';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='home'>


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
        </div>
    )
}

export default Home
