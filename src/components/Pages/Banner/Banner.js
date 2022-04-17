import React from 'react';
import './Banner.css'
import background from '../../../Utiles/images/background.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='order-1'>
                <p>Hello</p>
                <h1>Make professional <br /> <span className='text-danger'>youtube</span> videos</h1>
                <h6>with <span className='text-danger'>Dev.Kbin</span> </h6>
                <p className='banner-text'>My name is Kbin. I am a web developer and a youtuber. I have been developing web applications for last 5 years and creating youtube videos to teach web development.</p>

                <button className='btn btn-danger'>Read More</button>
            </div>
            <div className='container text-center main-page order-sm-1'>
                <img className='w-100' src={background} alt="" />
            </div>
        </div>
    );
};

export default Banner;