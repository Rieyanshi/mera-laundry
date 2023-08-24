import React from "react";
import "../style/header.css";
import RespCarousel from "./carousel";
import image1 from "../img/promise1.png";
import image2 from "../img/promise2.png";
import image3 from "../img/promise3.png";
import image4 from "../img/promise4.png";
import Accordion from "./accordion";
export default function Masterwork() {
    return (
        <>
            <p className="heading">PRICING AND SERVICES</p>
            <div className="page-container">

                <div className="card-container">
                    <div className="card">
                        <div className="card-content">
                            {/* Card content goes here */}
                        </div>
                        <div className="view-button">
                            <button>View Price</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            {/* Card content goes here */}
                        </div>
                        <div className="view-button">
                            <button>View Price</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            {/* Card content goes here */}
                        </div>
                        <div className="view-button">
                            <button>View Price</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            {/* Card content goes here */}
                        </div>
                        <div className="view-button">
                            <button>View Price</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="heading">HOW IT WORKS</p>
            <div className="page-container">

                <div className="card-container">
                    <div className="card">
                        <div className="card-content">
                            {/* Card content goes here */}
                        </div>
                        <div className="view-button">
                            <button>View Price</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            {/* Card content goes here */}
                        </div>
                        <div className="view-button">
                            <button>View Price</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            {/* Card content goes here */}
                        </div>
                        <div className="view-button">
                            <button>View Price</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            {/* Card content goes here */}
                        </div>
                        <div className="view-button">
                            <button>View Price</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='heading'>TESTIMONIALS</p>
            <RespCarousel />
            <p className='headingPromise'>OUR PROMISE</p>
            <div className="container_promise">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="">
                            <table className="table">
                                <tbody><tr>
                                    <td><img src={image1} /></td>
                                    <td><p><strong>Free pick &amp; drop</strong><br />
                                        We provide Free pick &amp; drop facility at your doorstep.</p></td>
                                </tr>

                                    <tr>
                                        <td><img src={image2} /></td>
                                        <td><p><strong>Affordable</strong><br />
                                            Our pricing policy is fair &amp; transparent. What you see is what you pay!</p></td>
                                    </tr>

                                    <tr>
                                        <td><img src={image3} /></td>
                                        <td><p><strong>Quality assurance</strong><br />
                                            We strive to give best laundry &amp; dry cleaning experience.</p></td>
                                    </tr>

                                    <tr>
                                        <td><img src={image4} /></td>
                                        <td><p><strong>Convenience</strong><br />
                                            Book your service in less then 20 seconds.</p></td>
                                    </tr>
                                </tbody></table>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <img src="https://www.meralaundry.in/assets/web/images/sideimg.jpg" class="img-responsive" />
                    </div>
                </div>
            </div>
            <p className="heading">FAQ?</p>
            <Accordion/>
            <p className="headingProffesional">Are you a service professional?</p>
            <button className="joinUs"> JOIN US</button>

        </>
    );
}
