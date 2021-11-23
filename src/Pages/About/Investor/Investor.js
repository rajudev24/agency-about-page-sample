import React from 'react';
import './Investor.css'
import Fade from 'react-reveal/Fade';

const Investor = () => {
    return (
        <div className='investor-section'> 
            <Fade bottom>
            <div className='investor-one'>
                <h3>Mark Mastrov <br />
                    Investor, Board of Director</h3>
                <p>
                    Mark Mastrov is an American businessman who was born in Oakland, CA. In addition to serving on the board and investing in Frame, he is the founder and former CEO of 24-Hour Fitness as well as many other fitness ventures worldwide. Mastrov is also a member of the Sacramento Kings ownership group.</p>
            </div>
            </Fade>
            <div>
               <Fade bottom>
               <h3>Michael Bruno <br />
                    Investor</h3>
                <p>
                    Michael Bruno is the owner and CEO of Core Health and Fitness. Core Health & Fitness is the world’s largest privately-held marketer and distributor of commercial fitness solutions to health clubs, community recreational centers, hotels, government, educational facilities and more.</p>
               </Fade>
            </div>
        </div>
    );
};

export default Investor;