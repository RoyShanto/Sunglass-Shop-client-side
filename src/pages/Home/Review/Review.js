import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(req => req.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1>Customers Review {reviews.length}</h1>
            <div className="row">
                {
                    reviews.map(review =>
                        < div className="col-md-4" key={review._id}>
                            <h5>{review.userName} :: {review.reviewMessage} :: {review.reviewRating}</h5>
                        </div>)
                }
            </div>

        </div >
    );
};

export default Review;