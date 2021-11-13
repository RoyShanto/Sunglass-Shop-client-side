import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();
    const AddUser = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;
        const newUser = { name, price, description, img };
        // console.log(newUser);
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the user. ')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="add-service my-3 d-flex justify-content-center align-items-center">
            {/* <div className="border border-3 border-info p-3 pb-4 w-50 add-service-border"> */}
            <div className="w-75 border p-md-5 p-2">

                <h1>Add User</h1>
                <form onSubmit={AddUser}>
                    <div className="mb-3">
                        <input type="text" className="form-control" ref={nameRef} placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" ref={priceRef} placeholder="Price" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" ref={descriptionRef} placeholder="Description" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" ref={imgRef} placeholder="Image Link" />
                    </div>
                    <div className="d-flex justify-content-start">
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;