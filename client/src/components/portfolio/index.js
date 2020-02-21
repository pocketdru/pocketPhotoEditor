import React from "react";
import "./style.css";
import X from "../aboutApp/x.png";
import Rectangle from "../aboutApp/Rectangle_5_copy.png";
import Tag from "./Tag.png";

const Portfolio = () => {
    return(
        <div className="container portfolio">
            <div className="row">
                <div className="col-md-12">

                    {/* Portfolio header and description */}
                    <h2 className="portfolio-h2 mt-4">
                        Portfolio
                    </h2>
                    <div className="d-flex justify-content-center">
                        <img src={Rectangle} className="rectangle" alt="rectangle"></img>
                        <img src={X} className="x" alt='x'></img>
                        <img src={Rectangle} className="rectangle" alt="rectangle"></img>
                    </div>
                    <p className="about-desc text-center mt-2">The app gives you multiple opportunities to edit your photos</p>
                </div>
            </div>
            {/* Button group */}
            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" id="btn">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">design</p>
                            </div>
                        </div>
                        </button>
                        <button type="button" className="btn btn-secondary"
                        id="btn">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">design</p>
                            </div>
                        </div>
                        </button>
                        <button type="button" className="btn btn-secondary"
                        id="btn">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">design</p>
                            </div>
                        </div>
                        </button>
                        <button type="button" className="btn btn-secondary"
                        id="btn">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">design</p>
                            </div>
                        </div>
                        </button>
                        <button type="button" className="btn btn-secondary"
                        id="btn">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">design</p>
                            </div>
                        </div>
                        </button>
                        <button type="button" className="btn btn-secondary"
                        id="btn">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">design</p>
                            </div>
                        </div>
                        </button>
                        <button type="button" className="btn btn-secondary"
                        id="btn">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">design</p>
                            </div>
                        </div>
                        </button>
                        <button type="button" className="btn btn-secondary"
                        id="btn">
                        <div className="card">
                            <img src={Tag} className="card-img" alt="..."/>
                            <div className="card-img-overlay">
                                <p className="card-text">design</p>
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