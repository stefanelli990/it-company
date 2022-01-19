import React from 'react';
import headerImg from '../assets/images/header-img.jpg';

function Header(props) {
    

    return (
        <header className='header' style={{
            backgroundImage: `linear-gradient(rgba(9, 82, 134, 0.9),rgba(9, 82, 134, 0.9)), url(${headerImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <h1>{props.heading}</h1>
            <p>{props.paragraph}</p>
        </header>
    )
}

export default Header
