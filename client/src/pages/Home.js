import React, { Component } from "react";
import MainCarousel from "../components/mainCarousel";
import AboutApp from "../components/aboutApp";
import Portfolio from "../components/portfolio";
import Blog from "../components/Blog";
import ContactMe from "../components/contactMe";

class Home extends Component {

    render() {
        return(
            <div>
                <MainCarousel/>
                <AboutApp/>
                <Portfolio/>
                <Blog/>
                <ContactMe/>

            </div>
        )
    }
}

export default Home;