import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
const Services = ({ services }) => {
    const { name, description, img, id } = services;

    return (
        <div>
            <div className="service-card">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                {/* <button className="btn">View More</button> */}
                <Link to={`/appointment/${id}`}>
                    <button className="btn">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;