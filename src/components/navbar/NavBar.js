import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./style.css";
import ColoredLine from "../hr/hr";
// import { Dimensions } from 'react-native'


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
console.log(window.innerHeight);
console.log(window.innerWidth);

// const styles = ({
//   // fontSize: window.innerHeight*window.innerWidth*0.01
//   login: {
//     fontSize: 15
//   }
// });

  return (
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse d-flex justify-content-around row" id="navbarSupportedContent">
          <a className="navLink col-md-5 feed" href="#">Feed</a>
          <div className="burst-8 col-md-2"></div>
          <a className="navLink col-md-4 myPhotos" href="#">My Photos</a>
          {!isAuthenticated && (
            <a onClick={() => loginWithRedirect({})} className="navLink login col-md-1">Log in</a> )}
          {isAuthenticated && <a onClick={() => logout()} className="navLink login col-md-1">Log out</a>}
        </div>
      </nav>
    </div>
  </div>
</div>
  );
};  

export default NavBar;