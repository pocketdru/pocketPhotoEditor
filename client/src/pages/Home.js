import React, { Component } from "react";
import NavBar from "../components/navbar";
import MainCarousel from "../components/mainCarousel";
import AboutApp from "../components/aboutApp";
import Portfolio from "../components/portfolio";
import Blog from "../components/Blog";
import ContactMe from "../components/contactMe";

class Home extends Component {

    componentDidMount() {
        console.log("fd");
      };

    render() {
        return(
            <div>
                <header>
                    <NavBar {...this.props}/>
                    <a onClick={this.props.auth.login} className="navLink col-md-1" id="login">Log in</a>

                </header>
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