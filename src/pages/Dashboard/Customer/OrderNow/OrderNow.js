import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const OrderNow = () => {
    const { user } = useAuth();
    const { productId } = useParams();
    const [service, setService] = useState({});
    const addressRef = useRef();
    const mobileRef = useRef();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [productId])

    const { _id, name, price, description, img } = service;
    const product_id = _id;
    const email = user.email;


    const handleOrder = (e) => {
        const status = 'Pending';
        const address = addressRef.current.value || '';
        const mobileNo = mobileRef.current.value || '';
        const newOrder = { email, name, price, description, img, address, mobileNo, status, product_id };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the Order.')
                }
            })
        e.preventDefault();
    }




    return (
        <div className="container py-5 mt-5">
            <form onSubmit={handleOrder}>
                <div className="row p-2 border border-danger" >
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="pt-5">
                            <h2 className="fw-bold">{name}</h2>
                            <h3>Price: {price}</h3>
                            <p>Description: {description}</p>
                            <input type="text" className="mb-2" placeholder="Enter Your Address" ref={addressRef} required /><br />
                            <input type="number" placeholder="Enter Your Mobile Number" ref={mobileRef} required /><br /><br />
                            <button type="submit" className="bg-warning py-2 px-5 border rounded fw-bold" >Book</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default OrderNow;