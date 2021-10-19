import React from 'react';
import './Fact.css'
const Fact = () => {
    return (
        <div>
            <div className="fact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="fact-box">
                                <i className="fa fa-smile"></i>
                                <h5>25000</h5>
                                <p>Happy Patients</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fact-box">
                                <i className="fas fa-user-md"></i>
                                <h5>80</h5>
                                <p>Experienced Doctors</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fact-box">
                                <i className="fas fa-procedures"></i>
                                <h5>350</h5>
                                <p>Successful Operations</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fact-box">
                                <i className="fas fa-bed"></i>
                                <h5>150</h5>
                                <p>Number of Beds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fact;