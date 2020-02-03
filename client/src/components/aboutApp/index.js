import React from "react";
import "./style.css";
import X from "./x.png";
import Rectangle from "./Rectangle_5_copy.png";

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
                        <p className="about-desc text-center mt-2">The app gives you multiple opportunities to edit your photos</p>

                </div>
                <div className="col-md-12">
                    <div className="card-group">
                        <div class="card">
                            <img src="images/about/1.png" className="card-img-top er" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default AboutApp;