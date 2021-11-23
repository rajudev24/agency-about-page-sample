import React from 'react';
import './Footer.css'
import Slide from 'react-reveal/Slide';

const Footer = () => {
    return (
        <div className='footer-section'>
            <Slide bottom>
            <div className='contact-details'>
                <p className='h4'>Contact</p>
                <p>info@framefitness.com</p>
                <p>Frame Innovative Technologies Corp. <br />
                    265 S. Western Avenue <br />
                    P.O. Box #741940 <br />
                    Los Angeles, CA 90004-9998</p>
                <div>
                <i class="fab fa-facebook me-2"></i>
                <i class="fab fa-twitter me-2"></i>
                <i class="fab fa-instagram"></i>
                </div>
            </div>
            </Slide>
            
            <Slide top>
            <div className='logo'>
                <img src="https://i.ibb.co/KVKF28n/frame-abreviated-logo-white.png" alt="" />
                <div className='logo-tm'>
                    <p>TM</p>
                </div>
            </div>
            </Slide>

            <Slide bottom>
            <div className='footer-link'>
                <a href="">Terms and Conditions</a>
                <p><i class="far fa-copyright"></i>Copyright 2021 <span>Frame is patent pending</span></p>
                
            </div>
            </Slide>
        </div>
    );
};

export default Footer;