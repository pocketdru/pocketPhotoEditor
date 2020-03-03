import React from "react";
import "./style.css";
import X from "./x.png";
import Rectangle from "./Rectangle_5_copy.png";

const ContactMe = () => {
    return(
        <div className="container contact">
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
                    <p className="about-desc text-center mt-2">I'LL BE GLAD TO ANSWER YOUR QUESTIONS!</p>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;