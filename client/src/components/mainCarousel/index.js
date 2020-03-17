import React from "react";
import ColoredLine from "../hr";
import "./style.css";
import r1 from "./Rectangle_1.png";
import r4 from "./Rectangle_4.png";
import r4r from "./Rectangle_4_copy.png";
import Carousel from "../Carousel";


const mainCarousel = () => {
    return(
        <div className="container">
            <div className="row carousel-background">
                <div className="col-md-12">
                    <div className="main-carousel">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="appName">
                        POCKET PHOTO EDITOR
                    </h1>
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
                        <h2 className="ribbon-text">RETRO STYLE FILTERS</h2>
                    </div>
                    <img src={r4} className="img-fluid sideRec" alt="sideRec"/>
                    <img src={r1} className="img-fluid mainRec" alt="mainRec"/>
                    <img src={r4r} className="img-fluid rightRec" alt="sideRec"/>
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
            <div className="row mt-5">
                <div className="col-md-12">
                    <Carousel/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center welcome-slogan mt-5">
                    <div>
                        <h2>Welcome to your pocket pics edtior</h2>
                        <p>Edit your photos and share with friends!</p>
                    </div>
                </div>
            </div>
            <ColoredLine className="hr" id="upAbout"/>
            <ColoredLine className="hr" id="downAbout"/>
        </div>
        </div>
        </div>
        </div>
    );
};

export default mainCarousel;