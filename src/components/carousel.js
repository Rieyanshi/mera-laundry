import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../style/header.css";
import comment from "../img/comment.jpg";
const RespCarousel = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <div className="carousel-container">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >

                    <div className="card1" style={{ backgroundColor: "red" }}>

                        <h2>comment</h2>
                        <p className="price"> abc</p>


                    </div>
                    <div className="card1" style={{ backgroundColor: "blue" }}>

                        <h2>comment2</h2>
                        <p className="price"> abc</p>


                    </div>
                    <div className="card1" style={{ backgroundColor: "green" }}>

                        <h2>comment3</h2>
                        <p className="price"> abc</p>


                    </div>
                    <div className="card1" style={{ backgroundColor: "yellow" }}>

                        <h2>comment4</h2>
                        <p className="price"> abc</p>


                    </div>
                    <div className="card1" style={{ backgroundColor: "violet" }}>

                        <h2>comment5</h2>
                        <p className="price"> abc</p>


                    </div>
                    <div className="card1" style={{ backgroundColor: "pink" }}>

                        <h2>comment6</h2>
                        <p className="price"> abc</p>


                    </div>
                    <div className="card1" style={{ backgroundColor: "gold" }}>

                        <h2>comment7</h2>
                        <p className="price"> abc</p>

                    </div>

                </Carousel >;
            </div>
        </>
    );
};

export default RespCarousel;
