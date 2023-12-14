import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import Cards from "../Components/Cards";

class Home extends Component {
    render() {
        return (
            <div className = "container-fluid">
                <div class="row">
                    <CarouselBox />
                </div>
                <div class="row">
                    <Cards />
                </div>
            </div>
        );
    }
}

export default Home;
