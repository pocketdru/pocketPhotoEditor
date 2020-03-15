import React, { Component } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./style.css";
import ColoredLine from "../hr";

class NavBar extends Component {

  render() {

 return (
    <div className="container">
      <div className="row nav">
        <div className="col-md-12 nav-hr">
          <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse d-flex justify-content-around row" id="navbarSupportedContent">
              <a className="navLink col-md-5 feed" href="#">Feed</a>
              <div className="col-md-2" id="burst-8"></div>
              <a className="navLink col-md-4 myPhotos" href="#">My Photos</a>
              {/* {!isAuthenticated && (
              <a onClick={() => loginWithRedirect({})} className="navLink col-md-1" id="login">Log in</a> )}
              {isAuthenticated && 
              <a onClick={() => logout()} 
              className="navLink col-md-1" 
              id="login">
                Log out
                </a>
                } */}
            </div>
          </nav>
          <ColoredLine className="hr" />
          <ColoredLine id="hrUp" className="hr"/>
        </div>
      </div>
    </div>
  );
  }
};  

export default NavBar;