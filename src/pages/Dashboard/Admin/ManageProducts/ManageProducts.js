import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://vast-beach-35806.herokuapp.com/product')
            .then(req => req.json())
            .then(data => setProducts(data))
    }, [])
    const handleDeleteProducts = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://vast-beach-35806.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingUsers = products.filter(order => order._id !== id);
                        // console.log(remainingUsers)
                        setProducts(remainingUsers);
                    }
                })
        }
    }
    return (
        <div className="container"><br />
            <h1>Total Products: {products.length}</h1>
            {
                products.map(product =>
                    < div className="row border m-1" key={product._id}>
                        <div className="col-md-2">
                            <img src={product.img} alt="" width="100" height="50" />
                        </div>
                        <div className="col-md-9 text-start">
                            <b>Name:</b> {product.name} <br />
                            <b>Price:</b> {product.price} <br />
                            <b>Description:</b> {product.description} <br />
                        </div>
                        <div className="col-md-1">
                            <button className="bg-danger rounded px-3 mt-4" onClick={() => handleDeleteProducts(product._id)}>Delete</button>
                        </div>
                    </div>)
            }
        </div >
    );
};

export default ManageProducts;