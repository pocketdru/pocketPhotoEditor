import React, { Component } from "react";
import NavBar from "../components/navbar";
import PhotoFeed from "../components/PhotoFeed";

class MyFeed extends Component {
    render() {
        return(
            <div>
                <header>
                    <NavBar {...this.props}/>
                </header>
                <PhotoFeed/>
            </div>
        )
    }
}

export default MyFeed;