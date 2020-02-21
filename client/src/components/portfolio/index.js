import React from "react";
import "./style.css";
import X from "../aboutApp/x.png";
import Rectangle from "../aboutApp/Rectangle_5_copy.png";
import Tag from "./Tag1.png";

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
            <div className="row mt-4">
                <div className="col-md-8">
                    {/* <button className="btn">
                    
                    </button> */}
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                        </button>
                        <button type="button" className="btn btn-secondary">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                        </button>
                        <button type="button" className="btn btn-secondary">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                        </button>
                    </div>
                </div>
                <div className="col-md-10"></div>
            </div>
        </div>
    )
}

export default Portfolio;