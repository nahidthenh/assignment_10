import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useFirebase from '../Hooks/UseFirebase';
import './Login.css'
const Login = () => {
    const { singInUsingGoogle, singInUsingGithub } = useFirebase();
    return (
        <div>
            <div className="login-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 pt-5 text-center">
                            <h3 className="pb-5">Please Login</h3>
                            <form>
                                <input className="form-control" type="email" name="" placeholder="Your Email" id="" />
                                <br />
                                <br />
                                <input className="form-control" type="password" name="" placeholder="Password" id="" />
                                <br />
                                <br />
                                <input className="form-control btn" type="submit" value="Login" />
                            </form>
                            <p className="mt-3 mb-3"> <Link to="/register">Dont have  a account</Link> </p>

                            <div>-----------------------</div>
                            <button className="btn mt-2" onClick={singInUsingGoogle}>Google</button>
                            <button className="btn mt-2" onClick={singInUsingGithub}>Github</button>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;