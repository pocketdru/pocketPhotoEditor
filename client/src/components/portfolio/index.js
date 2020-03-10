import React from "react";
import "./style.css";
import X from "../aboutApp/x.png";
import Rectangle from "../aboutApp/Rectangle_5_copy.png";
import Tag from "./Tag.png";
import ColoredLine from "../hr";

const Portfolio = () => {
    return(
        <div className="container">
            <div className="row portfolio-background">
                <div className="col-md-12">
                    <div className="portfolio">
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
                <div className="col-md-10 col-sm-12 portfolio-tags">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <h6 className="card-text">Filter by</h6>
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
                <div className="col-md-12 portfolio-cards">
                <div className="card-group">
                    <div className="card">
                        <img src="images/portfolio/airport.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <img src="images/portfolio/icons/photo.png" className="card-title"></img>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/portfolio/abstract.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <img src="images/portfolio/icons/clip.png" className="card-title"></img>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/portfolio/fireworks.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <img src="images/portfolio/icons/note.png" className="card-title"></img>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/portfolio/canon.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <img src="images/portfolio/icons/tv.png" className="card-title"></img>                        
                        </div>
                    </div>
                    </div>
                    <div className="card-group mt-4">
                    <div className="card">
                        <img src="images/portfolio/abstract.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <img src="images/portfolio/icons/tv.png" className="card-title"></img>                        
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/portfolio/airport.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <img src="images/portfolio/icons/sound.png" className="card-title"></img>                        
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/portfolio/canon.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <img src="images/portfolio/icons/clip.png" className="card-title"></img>                        
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/portfolio/fireworks.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <img src="images/portfolio/icons/note.png" className="card-title"></img>                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2 pb-4">
                <div className="col-md-4 browse-all">
                    <span className="line"><hr></hr></span>
                        <a className="browse-all">BROWSE ALL
                    </a>
                </div>
            </div>
        </div>
        <ColoredLine className="hr" id="upAbout"/>
            <ColoredLine className="hr" id="downAbout"/>
        </div>
        </div>
        </div>
    )
}

export default Portfolio;