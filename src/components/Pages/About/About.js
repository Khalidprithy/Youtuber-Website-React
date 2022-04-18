import React from 'react';
import './About.css'
import profile from '../../../Utiles/images/profile.jpg'


const About = () => {
    return (
        <div className='container m-4 text-center about-container'>
            <div>
                <img className='about-img' src={profile} alt="" />
                <h4>Khalid Bin Alam</h4>
            </div>
            <p >My future goal is to grow as a developer. For next 2 years I want to learn front-end developing skills and work as a front-end developer. After that I want to learn back-end skills to become a fullstack web developer. I also have interest learning Python and Django. Beside that I need to work on my designing skills as well.  </p>
        </div>
    );
};

export default About;