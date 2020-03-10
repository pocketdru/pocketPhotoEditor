import React from "react";
import "./style.css";
import X from "../aboutApp/x.png";
import Rectangle from "../aboutApp/Rectangle_5_copy.png";

const Blog = () => {
    return(
        <div className="container">
            <div className="row blog-background">
                <div className="col-md-12">
                    <div className="blog">
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
                                <h5 className="card-title">The Magic Wheel</h5>
                                <p className="card-text"><span className="date">JULY 28, 2014 // ADMIN // FUN, TRAVEL, TRENDS</span></p>
                                <span className="line"><hr></hr></span>
                                <p className="card-text">Etiam enim velit, cursus ut dapibus sed, egestas ac ipsum. Proin et cursus ante. Curabitur convallis ante sollicitudin, sollicitudin diam vel, auctor mauris. Phasellus pretium ligula id viverra scelerisque. Nullam pellentesque, arcu vel eleifend maximus, nunc quam placerat mauris, vitae ultrices metus augue non ex. Curabitur euismod ante nec dapibus mollis. Duis viverra mi eu convallis vulputate.</p>
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
                                <h5 className="card-title">The lonely road</h5>
                                <p className="card-text"><span className="date">JULY 28, 2014 // ADMIN // FUN, TRAVEL, TRENDS, WEB DESIGN</span></p>
                                <span className="line"><hr></hr></span>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare condimentum mi nec pretium. Etiam enim velit, cursus ut dapibus sed, egestas ac ipsum. Proin et cursus ante. Curabitur convallis ante sollicitudin, sollicitudin diam vel, auctor mauris. Phasellus pretium ligula id viverra scelerisque. Nullam pellentesque, arcu vel eleifend maximus, nunc quam placerat mauris, vitae ultrices metus augue non ex. Curabitur euismod ante nec dapibus mollis. Duis viverra mi eu convallis vulputate.</p>
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
                                <h5 className="card-title">My Favorite Flowers</h5>
                                <p className="card-text"><span className="date">JULY 28, 2014 // ADMIN // FUN, TRENDS, WEB DESIGN</span></p>
                                <span className="line"><hr></hr></span>
                                <p className="card-text">Mauris ornare condimentum mi nec pretium. Etiam enim velit, cursus ut dapibus sed, egestas ac ipsum. Proin et cursus ante. Curabitur convallis ante sollicitudin, sollicitudin diam vel, auctor mauris. Phasellus pretium ligula id viverra scelerisque. Nullam pellentesque, arcu vel eleifend maximus, nunc quam placerat mauris, vitae ultrices metus augue non ex.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2 pb-4">
                <div className="col-md-4 browse-all">
                    <span className="line"><hr></hr></span>
                        <a className="browse-all" href="#">SHOW ALL POSTS
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default Blog;