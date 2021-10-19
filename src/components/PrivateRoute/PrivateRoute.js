
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from '../Hooks/UseAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const { user,email } = useAuth();
    // const { email } = useAuth();
    console.log(email);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    ></Redirect>
                )
            }
        ></Route>
    );
};

export default PrivateRoute;
