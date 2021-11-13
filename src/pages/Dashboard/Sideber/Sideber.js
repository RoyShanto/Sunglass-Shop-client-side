import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sideber = () => {
    const { user, logOut } = useAuth();
    const email = user.email;
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://vast-beach-35806.herokuapp.com/admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(req => req.json())
            .then(data => setIsAdmin(data))
    }, [email])
    return (
        <div className="container">
            {!isAdmin && <>
                <Link to="/dashboard/pay" className="dropdown-item" >Pay</Link>
                <Link to="/dashboard/myOrders" className="dropdown-item" >My Orders</Link>
                <Link to="/dashboard/addReview" className="dropdown-item" >Review</Link>
                <Link to="/login" className="dropdown-item" onClick={logOut}>LogOut</Link></>
            }
            {isAdmin && <>
                <Link to="/dashboard/addAdmin" className="dropdown-item">Add Admin</Link>
                <Link to="/dashboard/addProduct" className="dropdown-item">Add Product</Link>
                <Link to="/dashboard/manageProducts" className="dropdown-item" >Manage Products</Link>
                <Link to="/dashboard/manageAllOrders" className="dropdown-item" >Manage All Orders</Link>
                <Link to="/login" className="dropdown-item" onClick={logOut}>LogOut</Link>
            </>}



        </div>
    );
};

export default Sideber;