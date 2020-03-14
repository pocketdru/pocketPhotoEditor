import React, { Component } from "react";
import PhotoFeed from "../components/PhotoFeed";

class NotFound extends Component {
    render() {
        return(
            <div>
                <div className="container photofeed-background">
                        <h1 className="appName">I'm sorry, the page is not found!</h1>
                </div>
            </div>
        )
    }
}

export default NotFound;