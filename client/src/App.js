import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import { useAuth0 } from "./react-auth0-spa.js";
import Home from "./pages/Home";
import MyFeed from "./pages/MyFeed";

class App extends Component {
  // const { loading } = useAuth0();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
render() {
  let mainComponent = "";
  switch(this.props.location) {
    case "":
      mainComponent = <Home />;
      break;
    case "myfeed":
      mainComponent = <MyFeed />;
      break;
    default:
      mainComponent = <Home />;

  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      {mainComponent}

    </div>

  );
  }
}

export default App;
