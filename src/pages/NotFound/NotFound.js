import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src="https://i.ibb.co/y8srp4y/notFound.jpg" alt="" /> <br />
            <Link to="/" className="btn btn-primary px-5"><b>Go To Home</b></Link>
        </div >
    );
};

export default NotFound;