import React from 'react';
import { Link } from 'react-router-dom';

const Resigter = () => {
    return (
        <div>
            <form>
                <input type="text" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default Resigter;