import React from 'react';
import './Services.css'
const Services = ({ services }) => {
    const { name, description, img } = services;
    return (
        <div>
            <div className="service-card">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <button>View More</button>
            </div>
        </div>
    );
};

export default Services;