import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase';
import './Header.css'
const Header = () => {
    const { user, logout } = useFirebase();
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link to="/home">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/price">Price</Link></li>
                    <li> <Link to="/service">Services</Link></li>
                    <li> <Link to="/login">Login</Link></li>
                    <li> <Link to="/register">Register</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    {/* <li></li> */}
                    {/* const {user} = useAuth();
                    <h5>User: {user.displayName}</h5> */}
                    <span>{user.displayName} </span>
                    {user.email && <button onClick={logout}>Logout</button>}


                </ul>
            </nav>
        </div >
    );
};

export default Header;