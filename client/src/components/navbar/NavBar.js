import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./style.css";
import ColoredLine from "../hr";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  console.log(window.innerHeight);
  console.log(window.innerWidth);


 return (
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse d-flex justify-content-around row" id="navbarSupportedContent">
          <a className="navLink col-md-5 feed" href="#">Feed</a>
          <div className="col-md-2" id="burst-8"></div>
          <a className="navLink col-md-4 myPhotos" href="#">My Photos</a>
          {!isAuthenticated && (
          <a onClick={() => loginWithRedirect({})} className="navLink col-md-1" id="login">Log in</a> )}
          {isAuthenticated && <a onClick={() => logout()} className="navLink col-md-1" id="login">Log out</a>}
        </div>
      </nav>
      <ColoredLine />
      <ColoredLine className="hrUp"/>
    </div>
  </div>
</div>
  );
};  

export default NavBar;