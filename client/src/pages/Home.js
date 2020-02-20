import React, { Component } from "react";
import MainCarousel from "../components/mainCarousel";
import AboutApp from "../components/aboutApp";
import Portfolio from "../components/portfolio";

class Home extends Component {

    render() {
        return(
            <div>
                <MainCarousel/>
                <AboutApp/>
                <Portfolio/>
            </div>
        )
    }
}

export default Home;