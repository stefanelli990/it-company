import React from 'react';
import Header from '../components/Header';
import aboutImg1 from '../assets/images/about-img1.jpg';
import { motion } from 'framer-motion';

const pageVariants = {
    hidden: {
        x: "-100px",
        opacity: 0
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

function About() {
    return (
        <motion.div className="about">
            <Header heading="About" paragraph="We are team of exceptional IT professionals to guide you through the process of project definition, design, development, testing and application."/>
            <motion.div className="container"
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'>
            <div className="row">
                <div className="text">
                        <h2>Our mission</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
                    </div>
                    <img src={aboutImg1} alt="" />
                </div>
                <div className="row">
                    <div className="text">
                        <h2>Our vision</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
                    </div>
                    <img src={aboutImg1} alt="" />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default About;
