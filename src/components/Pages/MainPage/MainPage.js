import React from 'react';
import './MainPage.css';
import background from '../../../Utiles/images/background.png'

const MainPage = () => {
    return (
        <div className='container text-center main-page'>
            <img className='w-100' src={background} alt="" />
        </div>
    );
};

export default MainPage;