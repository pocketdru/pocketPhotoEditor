import React from "react";
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
    <div className="App">
      <header>
        <NavBar />
        <MainCarousel/>
      </header>
    </div>
  );
}

export default App;
