import React from "react";
import "./style.css";
import X from "../aboutApp/x.png";
import Rectangle from "../aboutApp/Rectangle_5_copy.png";

const Portfolio = () => {
    return(
        <div className="container portfolio">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="portfolio-h2 mt-4">
                        Portfolio
                    </h2>
                    <div className="d-flex justify-content-center">
                        <img src={Rectangle} className="rectangle"></img>
                        <img src={X} className="x"></img>
                        <img src={Rectangle} className="rectangle"></img>
                    </div>
                    <p className="about-desc text-center mt-2">The app gives you multiple opportunities to edit your photos</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                <span className="fa-layers fa-fw">
                    <i className="fa fa-bookmark" data-fa-transform="rotate--270"></i>
                    <span className="fa-layers-text fa-inverse">NEW</span>
                </span>
                </div>
                <div className="col-md-10"></div>
            </div>
        </div>
    )
}

export default Portfolio;