import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, description, img } = product;

    return (
        <div className="col-md-4 pb-2" >
            <div className="card h-100">
                <div className="card-header">
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <div className="row">
                        {/* <div className="col-md-6">
                                            <h3 className="bg-warning">{order.status}</h3>
                                        </div> */}
                        <div>
                            <Link to={`/dashboard/product/${_id}`}>
                                <button className="btn btn-warning">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;