import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Auth from "./Auth";
import 'bootstrap/dist/css/bootstrap.min.css';

const auth = new Auth();
let state = {};

window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
};

let userName = auth.getProfile().given_name || "Johnny";

let initialState = {
  name: userName,
 location: window.location.pathname.replace(/^\/?|\/$/g, ""),
  auth
};

window.setState(initialState);

serviceWorker.unregister();