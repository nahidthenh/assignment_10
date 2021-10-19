import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase';

const Login = () => {
    const { singInUsingGoogle, singInUsingGithub } = useFirebase();
    return (
        <div>
            <div className="login-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-5 text-center">
                            <h3 className="pb-5">Please Login</h3>
                            <form>
                                <input type="email" name="" placeholder="Your Email" id="" />
                                <br />
                                <br />
                                <input type="password" name="" placeholder="Password" id="" />
                                <br />
                                <br />
                                <input type="submit" value="Login" />
                            </form>
                            <p> <Link to="/register">Dont have  a account</Link> </p>

                            <div>-----------------------</div>
                            <button onClick={singInUsingGoogle}>Google</button>
                            <button onClick={singInUsingGithub}>Github</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;