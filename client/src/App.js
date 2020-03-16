import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa.js";
import Home from "./pages/Home";
import MyFeed from "./pages/MyFeed";
import NotFound from "./pages/NotFound";
import Callback from "./components/Callback";

class App extends Component {
  // const { loading } = useAuth0();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
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
      mainComponent = <MyFeed />;
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
