import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa.js";
import Home from "./pages/Home";
import MyFeed from "./pages/MyFeed";
import NotFound from "./pages/NotFound";
import Callback from "./components/Callback";

class App extends Component {

render() {
  let mainComponent = "";
  switch(this.props.location) {
    case "":
      mainComponent = <Home {...this.props} />;
      break;
    case "callback":
      mainComponent = <Callback {...this.props}/>; 
      break; 
    case "myfeed":
      mainComponent = this.props.auth.isAuthenticated() ? <MyFeed {...this.props} /> : <NotFound />;
      break;
    default:
      mainComponent = <NotFound />;

  }

  return (
    <div className="App">
      {mainComponent}
    </div>

  );
  }
}

export default App;
