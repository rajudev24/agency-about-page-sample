import React from 'react';
import './BottomBanner.css'
import Bounce from 'react-reveal/Bounce';

const BottomBanner = () => {
    return (
        <div className='bottom-banner'>
            <div>
                <Bounce top>
                <h1>GET MOVING</h1>
                </Bounce>
                <Bounce bottom>
                <button className='bottom-btn'>SHOP NOW</button>
                </Bounce>
               
            </div>
        </div>
    );
};

export default BottomBanner;