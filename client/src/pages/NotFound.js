import React, { Component } from "react";
import NavBar from "../components/navbar";

class NotFound extends Component {
    render() {
        return(
            <div>
                <header>
                    <NavBar {...this.props}/>
                </header>
                <div className="container photofeed-background">
                    <h1 className="appName">I'm sorry, the page is not found!</h1>
                </div>
            </div>
        )
    }
}

export default NotFound;