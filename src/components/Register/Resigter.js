import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Register.css'
const Resigter = () => {
    return (
        <div>
            <div className="container register text-center">
                <div className="row">
                    <h3 className="pb-5">Please Register</h3>
                    <div className="col-md-6 offset-md-3 text-center">
                        <form>
                            <input placeholder="Email" className="form-control" type="text" />
                            <br />
                            <input placeholder="password" className="form-control" type="password" />
                            <br />
                            <input className="form-control btn mb-5" type="submit" value="Submit" />
                        </form>
                        <Link to="/login">Already Register?</Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Resigter;