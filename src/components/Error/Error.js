import React from 'react';
import './Error.css'
import Footer from '../Footer/Footer';
const Error = () => {
    return (
        <div>
            <h3 className="error-title"><i className="fa fa-warning"></i> 404 Page Not Found</h3>
            <Footer></Footer>
        </div>
    );
};

export default Error;