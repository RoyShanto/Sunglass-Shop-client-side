import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white-50">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="mb-3 text-white">Contact Us</h5>
                        <p>No: 58 A, East Madison Street, Baltimore, MD, USA <br />
                            +91 12345678 <br />
                            support@somemail.com</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3 text-white">Help</h5>
                        <p>Search<br />
                            Help<br />
                            Information <br />
                            Privacy Policy</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3 text-white">Support</h5>
                        <p>
                            Contact us <br />
                            About us <br />
                            Careers <br />
                            Refunds & Returns <br />
                            Deliveries</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3 text-white">Information</h5>
                        <p>Search Terms <br />
                            Advanced Search <br />
                            Help & Faq's <br />
                            Store Location <br />
                            Orders & Returns </p>
                    </div>
                </div> <br />
                <center>Copyright 2021 <span className="text-warning">Sunglass Shop</span> | Design By <span className="text-warning">Shanto Roy</span></center>
            </div>
        </div>

    );
};

export default Footer;