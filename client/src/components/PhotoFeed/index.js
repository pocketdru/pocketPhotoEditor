import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import ColoredLine from "../hr";
import r1 from "../mainCarousel/Rectangle_1.png";
import r4 from "../mainCarousel/Rectangle_4.png";
import r4r from "../mainCarousel/Rectangle_4_copy.png";
import FileUpload from "../FileUpload";

class PhotoFeed extends Component {

    state = {
        photos: []
    }

    componentDidMount() {
        this.loadPhotos();
        console.log(this.state.photos);
    }

    loadPhotos = () => {
        API.getPhotos()
            .then(response =>
               this.setState({photos: response.data}, 
                function() {
                   console.log(this.state.photos);
                   console.log(response.data[0].name);
               })
            )
            .catch(err => console.log(err));
            console.log(this.state.photos);
    }
    
    handleUploadButton = event => {
        event.preventDefault();
        var photoData =
         {name: event.target.getAttribute("value")};
        console.log(photoData);
        API.savePhoto(photoData)
        .then(res => {
            console.log("Photo saved!");
        })
        .catch(err => console.log(err))
        this.loadPhotos();
    };



    render() {
    return(
        <div className="container">
            <div className="row photofeed-background">
                <div className="col-md-12">
                    <div className="photoFeed">
                        <div className="row">
                            <div className="col-md-12">
                                {/* Portfolio header and description */}
                                <h2 className="appName mt-4 mb-5">
                                   Welcome to My Feed, {this.props.name}
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
                                <img src={r4} className="img-fluid sideRec" alt="Responsive"/>
                                <img src={r1} className="img-fluid mainRec" alt="Responsive"/>
                                <img src={r4r} className="img-fluid rightRec" alt="Responsive"/>
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
                        {/* <div className="row">
                            <div className="col-md-8 col-sm-6">
                                <div className="photo-input">
                                    <button onClick={this.handleUploadButton} value="upload" name="upload">Upload</button>
                                    <button></button>
                                </div>
                            </div>
                        </div> */}
                        <div className="row mb-5">
                            <div className="col-md-12">
                                <FileUpload/>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-12">
                                <ul>
                                {this.state.photos.map(photo => {
                                    return (
                                        <li key={photo._id}>
                                            <p>{photo.name}</p>
                                        </li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
    }
}
export default PhotoFeed;