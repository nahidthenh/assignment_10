import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './Service.css'
const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="container">
            <div className="services-container">
                {
                    service.map(services => (
                        <Services
                            key={services.id}
                            services={services}
                        ></Services>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;