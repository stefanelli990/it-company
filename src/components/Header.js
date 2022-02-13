import React from 'react';
import headerImg from '../assets/images/header-img.jpg';
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

function Header(props) {

    return (
        <header className='header' style={{
            backgroundImage: `linear-gradient(rgba(9, 82, 134, 0.9),rgba(9, 82, 134, 0.9)), url(${headerImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <motion.div className="container"
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
                <h1>{props.heading}</h1>
                <p>{props.paragraph}</p>
            </motion.div>
        </header>
    )
}

export default Header
