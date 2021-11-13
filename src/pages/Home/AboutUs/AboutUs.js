import React from 'react';

const AboutUs = () => {
    return (
        <div className="container">

            <div>
                <h1>ABOUT US</h1> <br />
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live
                    in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Elit lectus molestie aptent laoreet inceptos sit adipiscing qua copy Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nis</p>
            </div>
            <div>
                <img src="https://i.ibb.co/Y0wnM1N/about.webp" alt="Girl in a jacket" className="img-fluid" />
                <hr /><br />
            </div>
            <div className="row">
                <div className="col-md-4">
                    <i className="fas fa-truck fs-1 mb-3"></i>
                    <h4>FREE SHIPPING</h4>
                    <p>We Have no extra charge to delivery your beautiful Sunglass to your home. We will be very happy to confirm your order. Please follow our website.</p>
                </div>
                <div className="col-md-4">
                    <i className="fas fa-hand-peace fs-1 mb-3"></i>
                    <h4>BEST PRODUCTS</h4>
                    <p>We are happy to give the best quality product to our customer. Our all sunglass is very qualityful and famous brand. You can easily use these product.</p>
                </div>
                <div className="col-md-4">
                    <i className="fas fa-undo fs-1 mb-3"></i>
                    <h4>30 DAYS RETURN</h4>
                    <p>We have a Special feature for our customer. Any customer can return our product if he/she want to change this product. Our customer is satisfied.</p>
                </div>

            </div>

        </div >
    );
};

export default AboutUs;