import React from 'react';
import Header from '../components/Header';
import projectImage1 from '../assets/images/project-image1.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageVariants = {
    hidden: {
        x: "-100px",
        opacity: 0,
        width: "100%"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            
            duration: 0.5
        }
    },
    exit: {
        x: "100px",
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}

function Projects() {
    return (
        <div className="projects">
        <Header heading="Projects" paragraph="Our development team is capable of providing applications tailored exactly to your custom requirements."/>
        <motion.section className="projects-container"
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
                <div className="container">
                    <div className="row">
                        <div className="text">
                            <h5>website</h5>
                            <h2>CoinView</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
                            <br />
                            <Link to='/contact'>
                                <button className="btn btn--outlined-primary">Live preview</button>
                            </Link>
                        </div>
                        <img src={projectImage1} alt="" />
                    </div>
                    <div className="row">
                        <div className="text">
                            <h5>website</h5>
                            <h2>CoinView</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
                            <br />
                            <Link to='/contact'>
                                <button className="btn btn--outlined-primary">Live preview</button>
                            </Link>
                        </div>
                        <img src={projectImage1} alt="" />
                    </div>
                    <div className="row">
                        <div className="text">
                            <h5>website</h5>
                            <h2>CoinView</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
                            <br />
                            <Link to='/contact'>
                                <button className="btn btn--outlined-primary">Live preview</button>
                            </Link>
                        </div>
                        <img src={projectImage1} alt="" />
                    </div>
                    <div className="row">
                        <div className="text">
                            <h5>website</h5>
                            <h2>CoinView</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
                            <br />
                            <Link to='/contact'>
                                <button className="btn btn--outlined-primary">Live preview</button>
                            </Link>
                        </div>
                        <img src={projectImage1} alt="" />
                    </div>
                </div>
        </motion.section>
        </div>
    )
}

export default Projects;
