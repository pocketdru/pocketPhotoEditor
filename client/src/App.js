import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import { useAuth0 } from "./react-auth0-spa.js";
import MainCarousel from "./components/mainCarousel";
// import { Dimensions } from 'react-native';



function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/" component={MainCarousel}></Route>
        <Route exact path="/home" component={MainCarousel}></Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
