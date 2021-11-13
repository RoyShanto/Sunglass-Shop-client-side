import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <button className="btn btn-primary" type="button"></button>
            <button type="button" class="btn btn-primary"><Link to="/">Go To Home</Link></button>
        </div>
    );
};

export default NotFound;