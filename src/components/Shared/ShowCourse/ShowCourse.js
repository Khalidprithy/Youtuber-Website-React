import React from 'react';
import './ShowCourse.css'

const ShowCourse = ({ course }) => {
    const { name, price, image, description } = course;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top card-img w-100 mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;