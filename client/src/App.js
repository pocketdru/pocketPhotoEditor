import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MyFeed from "./pages/MyFeed.js";
import NotFound from "./pages/NotFound.js";
import Callback from "./components/Callback/index";

class App extends Component {

  render() {
    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <Home {...this.props}/>;
        break;
      case "callback":
        mainComponent = <Callback/>; 
        break; 
      case "myfeed":
        mainComponent = this.props.auth.isAuthenticated() ? <MyFeed {...this.props} /> : <NotFound {...this.props} />;
        break;
      default:
        mainComponent = <NotFound {...this.props} />;
  
    }
  
    return (
      <div className="App">
        {mainComponent}
      </div>
  
    );
    }
  };

export default App;
