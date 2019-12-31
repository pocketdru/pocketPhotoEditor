import React from "react";
import "./style.css";
import X from "./x.png";
import Rectangle from "./Rectangle_5_copy.png";

const AboutApp = () => {
    return(
        <div className="container about-app">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                        <h2 className="aboutApp-h2">
                            About App
                        </h2>
                        <div className="d-flex justify-content-center">
                            <img src={Rectangle} className="rectangle"></img>
                            <img src={X} className="x"></img>
                            <img src={Rectangle} className="rectangle"></img>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default AboutApp;