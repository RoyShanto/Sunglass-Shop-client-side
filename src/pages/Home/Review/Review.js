import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://vast-beach-35806.herokuapp.com/review')
            .then(req => req.json())
            .then(data => setReviews(data))
    }, [])
    return (

        <div>
            {/*  */}
            <h1>Our Customers Review</h1><br />
            <div className="row">
                {
                    reviews.map(review =>
                        < div className="col-md-4 border" key={review._id}>

                            <div className="row">
                                <div className="col-md-9">
                                    {/* {review.userName} ::  */}
                                    <h5> {review.reviewMessage}</h5>
                                </div>
                                <div className="col-md-3 text-end">
                                    {review.reviewRating === '1' && <i className="fas fa-star text-warning"></i>}
                                    {review.reviewRating === '2' && <><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i></>}
                                    {review.reviewRating === '3' && <><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i></>}
                                    {review.reviewRating === '4' && <><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i></>}
                                    {review.reviewRating === '5' && <><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning"></i></>}
                                </div>
                            </div>


                        </div>)
                }
            </div>

        </div >
    );
};

export default Review;