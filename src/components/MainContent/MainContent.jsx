import React from "react";
import Illustration1 from "../Illustration1/Illustration1";
import "./MainContent.css";

function MainContent() {
  return (
    <main>
      <div className="content">
        <h1 className="slogan">
          Wonder Travel es la plataforma que conecta viajeros con anfitriones en
          lugares mágicos de Colombia
        </h1>
        <Illustration1 />
      </div>
    </main>
  );
}

export default MainContent;
