import React from "react";
import "./style.css";
import X from "../aboutApp/x.png";
import Rectangle from "../aboutApp/Rectangle_5_copy.png";

const Blog = () => {
    return(
        <div className="container blog">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="portfolio-h2 mt-4">
                        My Blog
                    </h2>
                    <div className="d-flex justify-content-center">
                        <img src={Rectangle} className="rectangle" alt="rectangle"></img>
                        <img src={X} className="x" alt='x'></img>
                        <img src={Rectangle} className="rectangle" alt="rectangle"></img>
                    </div>
                    <p className="about-desc text-center mt-2">NEWS FROM MY HOUSE</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="images/blog/austria.png" className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="images/blog/old.png" className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="images/blog/retro.png" className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;