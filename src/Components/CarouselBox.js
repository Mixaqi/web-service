import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import jarImg from "../assets/slider1_with_jar.jpg";
import addictionImg from "../assets/slider2_addiction.jpg";


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={jarImg}
                        alt="First slide"
                        style={{ maxHeight: "60vh"}}
                    />
                    <Carousel.Caption>
                        <h3>Jar image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ax</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={addictionImg}
                        alt="Second slide"
                        style={{ maxHeight: "60vh"}}
                    />
                    <Carousel.Caption>
                        <h3>Addiction image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
