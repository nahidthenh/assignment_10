import React, { useEffect, useState } from 'react';

const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h3>Helo{service.length}</h3>
        </div>
    );
};

export default Service;