import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./style.css";
import r1 from "./Rectangle_1.png";
import r4 from "./Rectangle_4.png";
import r4r from "./Rectangle_4_copy.png";
import Carousel from "../Carousel";


const mainCarousel = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="appName">
                        POCKET PHOTO EDITOR
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 ribbon">
                    {/* Зайти с мака и нормально обрезать картинки!!!!!!!!!! */}
                    <img src={r4} className="img-fluid sideRec" alt="Responsive image"/>
                    <img src={r1} className="img-fluid mainRec" alt="Responsive image"/>
                    <img src={r4r} className="img-fluid rightRec" alt="Responsive image"/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <Carousel/>
                </div>
            </div>
        </div>

    );
};

export default mainCarousel;