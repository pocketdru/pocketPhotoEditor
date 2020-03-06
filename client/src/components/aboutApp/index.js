import React from "react";
import "./style.css";
import X from "./x.png";
import Rectangle from "./Rectangle_5_copy.png";
import ColoredLine from "../hr";


const AboutApp = () => {
    return(
        <div className="container about-app">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                        <h2 className="aboutApp-h2 mt-4">
                            About App
                        </h2>
                        <div className="d-flex justify-content-center">
                            <img src={Rectangle} className="rectangle"></img>
                            <img src={X} className="x"></img>
                            <img src={Rectangle} className="rectangle"></img>
                        </div>
                        <p className="about-desc text-center mt-2">SIMPLICITY IS THE ULTIMATE SOPHISTICATION</p>

                </div>
                <div className="col-md-12">
                    <div className="card-group">
                        <div className="card">
                            <img src="images/about/tv.png" className="card-img-top er" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">MOVIES</h5>
                            <h6>WHAT I WATCH</h6>
                            <hr className="hr"></hr>
                            <p className="card-text">Clutter is honest! I do believe that has to the users
                                selfexpression. Care. Things which is a projector operating system such formats are deep and profound and meaningful. It's the traditions of data. Good design should be different levels. There's no rational alternative. That's come to complexity.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="images/about/index.png" className="card-img-top er" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">MOVIES</h5>
                            <h6>WHAT I WATCH</h6>
                            <hr className="hr"></hr>
                            <p className="card-text">Clutter is honest! I do believe that has to the users
                                selfexpression. Care. Things which is a projector operating system such formats are deep and profound and meaningful. It's the traditions of data. Good design should be different levels. There's no rational alternative. That's come to complexity.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="images/about/t-shirt.png" className="card-img-top er" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">MOVIES</h5>
                            <h6>WHAT I WATCH</h6>
                            <hr className="hr"></hr>
                            <p className="card-text">Clutter is honest! I do believe that has to the users
                                selfexpression. Care. Things which is a projector operating system such formats are deep and profound and meaningful. It's the traditions of data. Good design should be different levels. There's no rational alternative. That's come to complexity.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="images/about/food.png" className="card-img-top er" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">MOVIES</h5>
                            <h6>WHAT I WATCH</h6>
                            <hr className="hr"></hr>
                            <p className="card-text">Clutter is honest! I do believe that has to the users
                                selfexpression. Care. Things which is a projector operating system such formats are deep and profound and meaningful. It's the traditions of data. Good design should be different levels. There's no rational alternative. That's come to complexity.</p>
                            </div>
                        </div>
                        
                        </div>
                </div>
            </div>
            <ColoredLine className="hr" id="upAbout"/>
            <ColoredLine className="hr" id="downAbout"/>
        </div>
    );
}

export default AboutApp;