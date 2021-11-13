import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sideber = () => {
    const { user } = useAuth();
    const email = user.email;
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(req => req.json())
            .then(data => setIsAdmin(data))
    }, [email])
    return (
        <div className="container">
            {/* <h1>sideber</h1> */}

            {!isAdmin && <><Link to="/dashboard/pay" className="nav-link" >Pay</Link>
                <Link to="/dashboard/myOrders" className="nav-link" >My Orders</Link>
                <Link to="/dashboard/addReview" className="nav-link" >Review</Link>
                {/* <Link to="/login" className="dropdown-item" onClick={logOut}>LogOut</Link> */}</>
            }
            {isAdmin && <>
                <Link to="/dashboard/addAdmin" className="nav-link">Add Admin</Link>
                <Link to="/dashboard/addProduct" className="nav-link">Add Product</Link>
                <Link to="/dashboard/manageProducts" className="nav-link" >Manage Products</Link>
                <Link to="/dashboard/manageAllOrders" className="nav-link" >Manage All Orders</Link>
            </>}



        </div>
    );
};

export default Sideber;