import "./fonts.css";
import "./App.css";
import React from "react";
import Banner from "./components/Banner/Banner";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <MainContent />
      <Footer />
    </React.Fragment>
  );
}

export default App;
