import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const message = useRef();
    const rating = useRef();
    const AddReview = e => {
        const reviewMessage = message.current.value;
        const reviewRating = rating.current.value;
        const userName = user.displayName;
        const newReview = { userName, reviewMessage, reviewRating };
        console.log(newReview);
        fetch('https://vast-beach-35806.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added the Review.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    console.log(user.displayName);
    return (
        <div className="add-service my-3 d-flex justify-content-center align-items-center">
            <div className="w-75 border p-md-5 p-2">
                <h1>Add Review</h1>
                <form onSubmit={AddReview}>
                    <div className="mb-3">
                        <textarea type="text" className="form-control" ref={message} placeholder="Write Your Review" required />
                    </div>
                    <div className="mb-3">
                        <select ref={rating} className="form-control">
                            <option value="5">Select Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-start">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;