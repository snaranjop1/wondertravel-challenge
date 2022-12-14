import "./fonts.css";
import "./App.css";
import React from "react";
import Banner from "./components/Banner/Banner";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
