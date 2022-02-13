import React from 'react';
import Header from '../components/Header';
import servicesImg1 from '../assets/images/services-img1.jpg';
import servicesImg2 from '../assets/images/services-img2.jpg';
import servicesImg3 from '../assets/images/services-img3.jpg';
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

function Services() {
    return (
        <div className="services">
            <Header heading="Services" paragraph="We are committed to provide the best value and high-quality software development services to our clients."/>
            <section className='what-we-offer'>
                <motion.div className="container"
                variants={pageVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                >
                    <div className="row">
                        <div className="text">
                            <h2>Beautifully designed apps from scratch</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
                        </div>
                        <img src={servicesImg1} alt="" />
                    </div>
                    <div className="row">
                        <div className="text">
                            <h2>Custom website and web app development </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
                        </div>
                        <img src={servicesImg2} alt="" />
                    </div>
                    <div className="row">
                        <div className="text">
                            <h2>Cross-platform mobile app development</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.</p>
                        </div>
                        <img src={servicesImg3} alt="" />
                    </div>
                </motion.div>
            </section>
        </div>
        )
       
}

export default Services;
