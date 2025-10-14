import React from 'react';
import {Carousel, Alert} from "react-bootstrap";
import "./Home.css";
import gmk from "../images/gmk_cyl_flare.png";
import kam from "../images/kam_superuser.jpg";
import sym from "../images/symbiote.jpg";

function HomePage() {
    return (
        <div>
            <Alert>Sign in as member to display applicable discounts</Alert>
        <h1>Home</h1>
    <Carousel >
        <Carousel.Item  className="carousel-item">
            <img src={kam} alt={"logo"}/>
            <Carousel.Caption>
                <h3>KAM Superuser Keycaps</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}  className="carousel-item">
            <img src={sym} alt={"logo"}/>
            <Carousel.Caption>
                <h3>GMK Symbiote Deskmat</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img src={gmk} alt={"logo"}/>
            <Carousel.Caption>
                <h3>GMK Cyl Flare Keycaps</h3>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
        </div>
    );
}

export default HomePage;