import React from 'react';

const Login = () => {
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

                            <p>Dont have  a account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;