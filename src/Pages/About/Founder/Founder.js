import React from 'react';
import './Founder.css'
import Zoom from 'react-reveal/Zoom';

const Founder = () => {
    return (
        <div className='founder-section'>
            <div className='founder-image'>
                <Zoom>
                <img src="https://i.ibb.co/K78bLRz/20210913-IACollaborative-20-5224-copy-1.png" alt="" />
                </Zoom>
            </div>
            <Zoom>
            <div className='founder-details'>
                <h1>Melissa Bentivoglio CEO & Co-Founder</h1>
                <p>
                    Melissa Bentivoglio is a classically trained ballet dancer and a renowned pilates and fitness instructor. Melissa credits her dedication to pilates as having changed her life after years of elite level performance. In 2018, she designed her own proprietary reformer for use in her own studio. By launching Frame, she hopes to make pilates more widely available and accessible, so that everyone has a chance to improve their quality of life.
                </p>
                <h1>Lee Belzberg
                    Co-Founder</h1>
                <p>Following in the footsteps of his family, Lee Belzberg continues the Belzberg legacy with Frame. He seeks to combine his deep expertise of wealth management, real-estate banking, and private equity with his passion for health and wellness. Lee is excited to venture into new frontiers and take his strategic vision and entrepreneurial spirit to the digital-fitness startup space.</p>
            </div>
            </Zoom>
            <div >
                <div className='frame-sticky'>
                    <img src="https://i.ibb.co/mFxW9v8/extended-frame-logo-black-1.png" alt="" />
                </div>
                <div className='wave-text'>
                    <span className='i'>M</span>
                    <span>A</span>
                    <span>D</span>
                    <span >E</span> 
                    <span >F</span>
                    <span >O</span>
                    <span >R</span> 
                    <span >M</span>
                    <span >O</span>
                    <span >T</span>
                    <span >I</span>
                    <span >O</span>
                    <span >N</span>
                </div>
            </div>
        </div>
    );
};

export default Founder;