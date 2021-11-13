import React from 'react';
import { Carousel } from "react-bootstrap";
import './Banner.css'
const Banner = () => {
    return (

        // https://ibb.co/XbqBD0s
        // https://ibb.co/xsfNj3D
        // https://ibb.co/pjPkngs
        // https://ibb.co/9wCKfph
        // https://ibb.co/5YJ2DZp
        // https://i.ibb.co/VtsyxnS/slider1.jpg
        // https://i.ibb.co/s6vhYFp/slider2.jpg
        // https://i.ibb.co/7tz0bHT/slider3.jpg
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider"
                    src="https://i.ibb.co/VtsyxnS/slider1.jpg/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="slider-title">To See and To Be Seen</h1>
                    <h4 className="slider-body">shop these famous brands in our store today.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider"
                    src="https://i.ibb.co/s6vhYFp/slider2.jpg/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className="slider-title">Black Friday Sale</h1>
                    <h4 className="slider-body">20% Off everything - valid until the 31st December 2021" please insert the coupon code "20" at checkout, to redeem your discount.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider"
                    src="https://i.ibb.co/7tz0bHT/slider3.jpg/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="slider-title">-New Trends-</h1>
                    <h4 className="slider-body">Our eyes show us the world.Our eye wear shows the world who we are.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;