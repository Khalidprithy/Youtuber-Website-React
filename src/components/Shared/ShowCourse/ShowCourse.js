import React from 'react';
import './ShowCourse.css'

const ShowCourse = ({ course }) => {
    const { name, price, image, description } = course;

    return (
        <div className="col g-5 col-sm-12 col-md-6 col-lg-4">
            <div className="card mx-auto" style={{ width: "18rem", height: "22rem" }}>
                <img src={image} style={{ width: "17.8rem", height: "10rem" }} className="card-img-top" alt="..." />
                <div className="card-body position-relative">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>${price}</p>
                    <button href="#" className="btn btn-primary position-absolute bottom-0 mb-2">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;