import React from "react";
import "./style.css";
import X from "./x.png";
import Rectangle from "./Rectangle_5_copy.png";

const ContactMe = () => {
    return(
        <div className="container contact pb-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="portfolio-h2 mt-4">
                        CONTACT ME
                    </h2>
                    <div className="d-flex justify-content-center">
                        <img src={Rectangle} className="rectangle" alt="rectangle"></img>
                        <img src={X} className="x" alt='x'></img>
                        <img src={Rectangle} className="rectangle" alt="rectangle"></img>
                    </div>
                    <p className="about-desc text-center mt-2">I'LL BE GLAD TO ANSWER YOUR QUESTIONS!</p>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputSubject" placeholder="Subject"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;