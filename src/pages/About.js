import React from 'react';
import Header from '../components/Header';
import aboutImg1 from '../assets/images/about-img1.jpg';


function About() {
    return (
        <div className="about">
            <Header heading="About" paragraph="We are team of exceptional IT professionals to guide you through the process of project definition, design, development, testing and application."/>
            <div className="container">
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
            </div>
        </div>
    )
}

export default About;
