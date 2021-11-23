import React from 'react';
import './AboutBanner.css'
import Zoom from 'react-reveal/Zoom';

const AboutBanner = () => {
    return (
        <div className='about-banner'>
            <div className='banner-details'>
                <div className='about-title'>
                    <Zoom>
                    <h1>Our Story</h1>
                    </Zoom>
                    
                </div>
                <div className='about-text'>
                    <Zoom>
                    <p>Melissa Bentivoglio and Lee Belzberg have paired together their extensive backgrounds of elite fitness instruction and entrepreneurship to bring you Frame—a groundbreaking approach to pilates disrupting the traditional at-home fitness market. </p>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;