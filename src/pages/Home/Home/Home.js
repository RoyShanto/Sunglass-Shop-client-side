import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import AboutUs from '../AboutUs/AboutUs';
const Home = () => {
    return (
        <div>
            <Banner /> <br />
            <Products fromHome={true} /> <br />
            <AboutUs /> <br />
            <Review /> <br />
        </div>
    );
};

export default Home;