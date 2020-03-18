import React, {Component} from "react";
import Home from "./pages/Home";
import MyFeed from "./pages/MyFeed";
import NotFound from "./pages/NotFound";
import Callback from "./components/Callback";

class App extends Component {

render() {
  {console.log(this.props.location)}

  let mainComponent = "";
  switch(this.props.location) {
    case "https://pocket-photo-editor-ma.herokuapp.com":
      mainComponent = <Home {...this.props} />;
      break;
    case "/callback":
      mainComponent = <Callback {...this.props}/>; 
      break; 
    case "https://pocket-photo-editor-ma.herokuapp.com/myfeed":
      mainComponent = this.props.auth.isAuthenticated() ? <MyFeed {...this.props} /> : < NotFound {...this.props} />;
      break;
    case "/myfeed":
      mainComponent = this.props.auth.isAuthenticated() ? <MyFeed {...this.props} /> : < NotFound {...this.props} />;
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
}

export default App;
