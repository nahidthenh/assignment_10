import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css'
const Home = () => {
    return (
        <div>
            {/* Banner  */}
            <Banner></Banner>

            {/* Service area  */}


            {/* fact area  */}
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
                                <i class="fas fa-user-md"></i>
                                <h5>80</h5>
                                <p>Experienced Doctors</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fact-box">
                                <i class="fas fa-procedures"></i>
                                <h5>350</h5>
                                <p>Successful Operations</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="fact-box">
                                <i class="fas fa-bed"></i>
                                <h5>150</h5>
                                <p>Number of Beds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* call to action area  */}
            <div className="call-to-action-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="banner-content">
                                <div class="banner-heading">
                                    <h2 class="banner-title">Don’t delay care for you <br /> and those you love.</h2>
                                </div>
                                <div class="banner-actions">
                                    <a href="how-it-works.html" class="btn">
                                        <span>Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer  */}

            <Footer></Footer>


        </div>
    );
};

export default Home;