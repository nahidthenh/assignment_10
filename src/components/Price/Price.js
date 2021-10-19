import React from 'react';
import Footer from '../Footer/Footer';
import './Price.css'
const Price = () => {
    return (
        <div>
            <div className="price-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center">
                            <div className="price-title">
                                <h3>Our Service Fee</h3>
                                <p>This is sheba Serive fee here you can test</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <h3>Blood Test</h3>
                                </div>
                                <div className="price">
                                    <span><sup>$</sup>145</span>
                                </div>
                                <div className="pricing-features">
                                    <ul>
                                        <li>Cholesterol and lipid tests</li>
                                        <li>Oestrogen blood test</li>
                                        <li>Thyroid function tests</li>
                                        <li>Kidney function tests</li>
                                        <li>C-reactive protein (CRP) test</li>
                                        <li>Cholesterol and lipid tests</li>
                                        <li>Oestrogen blood test</li>
                                        <li>Thyroid function tests</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <button className="btn">Appointment Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <h3>Body CT Scan</h3>
                                </div>
                                <div className="price">
                                    <span><sup>$</sup>350</span>
                                </div>
                                <div className="pricing-features">
                                    <ul>
                                        <li>Cholesterol and lipid tests</li>
                                        <li>Oestrogen blood test</li>
                                        <li>Thyroid function tests</li>
                                        <li>Kidney function tests</li>
                                        <li>C-reactive protein (CRP) test</li>
                                        <li>Cholesterol and lipid tests</li>
                                        <li>Oestrogen blood test</li>
                                        <li>Thyroid function tests</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <button className="btn">Appointment Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <h3>Urine Test</h3>
                                </div>
                                <div className="price">
                                    <span><sup>$</sup>125</span>
                                </div>
                                <div className="pricing-features">
                                    <ul>
                                        <li>Cholesterol and lipid tests</li>
                                        <li>Oestrogen blood test</li>
                                        <li>Thyroid function tests</li>
                                        <li>Kidney function tests</li>
                                        <li>C-reactive protein (CRP) test</li>
                                        <li>Cholesterol and lipid tests</li>
                                        <li>Oestrogen blood test</li>
                                        <li>Thyroid function tests</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <button className="btn">Appointment Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Price;