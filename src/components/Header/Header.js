import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li> <Link to="/home">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/service">Services</Link></li>
                    <li> <Link to="/login">Login</Link></li>
                    <li> <Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;