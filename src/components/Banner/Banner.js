import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            {/* Slider / banner area  */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-8 col-12">
                            <div className="hero-content">
                                <h1>Providing Quality Health Care. Your Health is Our Top Priority with <span>Comprehensive</span></h1>
                                <p>Our skilled doctors have tremendous experience with wide
                                    range of diseases to serve the needs of our patients.</p>
                                <button className="btn">Appointment Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;