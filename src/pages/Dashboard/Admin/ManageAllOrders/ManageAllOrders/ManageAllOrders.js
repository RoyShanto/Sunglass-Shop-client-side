import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageAllOrders.css'
const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://vast-beach-35806.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    // console.log(orders);
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://vast-beach-35806.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    }
                })
        }
    }

    return (
        <div className="container ">
            <h1 className="text-primary mt-5 fw-bold">All Orders {orders?.length}</h1>
            <div className="row">
                {
                    orders.map(order =>
                        <div className="col-md-4 pb-2" key={order._id}>
                            <div className="card h-100">
                                <div className="card-header">
                                    <img src={order.img} alt="" className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{order.name}</h5>
                                    <p className="card-text">Price: ${order.price}</p>
                                    <p className="card-text">{order.description}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className="bg-warning btn fw-bold">{order.status}</p>
                                        </div>
                                        <div className="col-md-4 pb-2">
                                            <Link to={`/dashboard/orders/update/${order._id}`}><button className="btn btn-warning">Update</button></Link>
                                        </div>
                                        <div className="col-md-4">
                                            <button className="btn btn-warning" onClick={() => handleDeleteOrder(order._id)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div >
    );
};

export default ManageAllOrders;