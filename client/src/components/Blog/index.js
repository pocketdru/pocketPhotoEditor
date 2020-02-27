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
        </div>
    )
}

export default Blog;