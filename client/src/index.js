import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Auth from "./Auth";
import config from "./auth_config.json";
import history from "./utils/history";
import 'bootstrap/dist/css/bootstrap.min.css';

const auth = new Auth();
let state = {};

window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
};

let initialState = {
 name: "Joel",
 location: window.location.pathname.replace(/^\/?|\/$/g, ""),
  auth
};

window.setState(initialState);



serviceWorker.unregister();