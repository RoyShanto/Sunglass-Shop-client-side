import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = (props) => {
    console.log(props.fromHome);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(req => req.json())
            .then(data => setProducts(data))
    }, [])
    let count = 6;
    const data = [];
    for (let p of products) {
        if (count > 0) {
            data.push(p);
        }
        count--;
    }
    // console.log('data', data);

    return (
        <div className="row">
            <h1>Total Products: {products.length}</h1>
            {props.fromHome ?
                data.map(p => <Product key={p._id} product={p}></Product>)
                :
                products.map(p => <Product key={p._id} product={p}></Product>)
            }
        </div >
    );
};

export default Products;