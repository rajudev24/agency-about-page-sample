import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import BottomBanner from '../bottomBanner/BottomBanner';
import Founder from '../Founder/Founder';
import Investor from '../Investor/Investor';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Founder></Founder>
            <Investor></Investor>
            <BottomBanner></BottomBanner>
        </div>
    );
};

export default About;