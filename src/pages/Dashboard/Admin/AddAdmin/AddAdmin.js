import React, { useRef } from 'react';

const AddAdmin = () => {


    const emailRef = useRef();
    const add = e => {
        const email = emailRef.current.value;

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email })
        }).then(req => req.json())
            .then(data => {
                e.target.reset();
            })
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="">
                <form onSubmit={add}>
                    <div className="mb-3">
                        <input type="email" className="form-control" ref={emailRef} placeholder="Name" required />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Add Admin</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddAdmin;