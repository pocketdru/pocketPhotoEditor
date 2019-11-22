import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./style.css";
import ColoredLine from "../hr/hr";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
        </a>
        <a className="navbar-brand" href="#">Feed</a>
        <div className="burst-8">
</div>
        <a className="navbar-brand" href="#">My Photos</a>
        <div className="my-2 my-sm-0">
            {!isAuthenticated && (
              <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </div>
      </nav>
          <ColoredLine />
    </div>
  </div>
</div>
  );
};

export default NavBar;