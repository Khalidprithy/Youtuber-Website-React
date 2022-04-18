import React from 'react';
import './Footer.css'
import { AiFillFacebook, AiFillYoutube, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h4 className='name'>Dev.Kbin</h4>
                <div className='social-icons'>
                    <AiFillYoutube className='s-icon'></AiFillYoutube>
                    <AiFillFacebook className='s-icon'></AiFillFacebook>
                    <AiFillGithub className='s-icon'></AiFillGithub>
                    <AiFillTwitterCircle className='s-icon'></AiFillTwitterCircle>
                </div>
            </div>
            <div>
                <p className='support'>Support</p>
                <ul className='support-list'>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Product Registration</li>
                    <li>Blog</li>
                    <li>Membership</li>
                </ul>
            </div>

            <div>
                <p className='about'>About</p>
                <ul className='about-list'>
                    <li>About Me</li>
                    <li>Design Courses</li>
                    <li>Social Meetup</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                </ul>
            </div>
            <div className='feedback-container'>
                <h5 className='feedback'>Your Feedback</h5>

                <input className='feedback-input' type="text" name="" id="" />
                <input className='feedback-btn' type="button" value="Submit" />
            </div>

        </div>
    );
};

export default Footer;