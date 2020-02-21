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
                <div className="col-md-8 portfolio-tags">
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
                {/* Card group  */}
                <div className="col-md-10 portfolio-cards">
                <div className="card-group">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
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
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                    <div className="card-group">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
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
    )
}

export default Portfolio;