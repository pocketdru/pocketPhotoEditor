import React, { Component } from "react";
import MainCarousel from "../components/mainCarousel";
import AboutApp from "../components/aboutApp";

class Home extends Component {

    render() {
        return(
            <div>
                <MainCarousel/>
                <AboutApp/>
            </div>
        )
    }
}

export default Home;