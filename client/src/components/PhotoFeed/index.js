import React from "react";
import "./style.css";
import X from "../aboutApp/x.png";
import Rectangle from "../aboutApp/Rectangle_5_copy.png";
import ColoredLine from "../hr";
import r1 from "../mainCarousel/Rectangle_1.png";
import r4 from "../mainCarousel/Rectangle_4.png";
import r4r from "../mainCarousel/Rectangle_4_copy.png";

const PhotoFeed = () => {
    return(
        <div className="container">
            <div className="row photofeed-background">
                <div className="col-md-12">
                    <div className="photoFeed">
                        <div className="row">
                            <div className="col-md-12">
                                {/* Portfolio header and description */}
                                <h2 className="appName mt-4">
                                    My Feed
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                <div className="col-md-2 d-flex align-content-center flex-wrap justify-content-end">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot "></span>
                </div>
                <div className="col-md-8 ribbon">
                    <div>
                        <h2 className="ribbon-text">Your recent photos</h2>
                    </div>
                    <img src={r4} className="img-fluid sideRec" alt="Responsive image"/>
                    <img src={r1} className="img-fluid mainRec" alt="Responsive image"/>
                    <img src={r4r} className="img-fluid rightRec" alt="Responsive image"/>
                    <ColoredLine className="hr" id="hrUp"/>
                    <ColoredLine className="hr" id="hrDown"/>
                </div>
                <div className="col-md-2 d-flex align-content-center flex-wrap">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PhotoFeed;