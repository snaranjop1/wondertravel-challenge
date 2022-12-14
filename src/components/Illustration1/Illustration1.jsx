import React from "react";
import traveler1 from "../../assets/images/traveler1.png";
import traveler2 from "../../assets/images/traveler2.png";
import illustrationLogo from "../../assets/images/illustration1-logo.png";
import amazonas from "../../assets/images/amazonas.png";
import tucan from "../../assets/images/tucan.png";
import mountains from "../../assets/images/mountains.png";
import sunset from "../../assets/images/sunset.png";
import whale from "../../assets/images/whale.png";
import "./Illustration1.css";

function Illustration1() {
  return (
    <div className="illustration">
      <div className="travelers">
        <img src={traveler1} alt="Traveler" />
        <img src={traveler2} alt="Traveler" />
      </div>
      <div className="wonder-logo">
        <div className="arrow">
          <div className="dot"></div>
          <div className="line"></div>
        </div>
        <img src={illustrationLogo} alt="Wonder travel logo" />
        <div className="arrow">
          <div className="line"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="mosaic">
        <img src={tucan} alt="Tucan" />
        <img src={amazonas} alt="Amazonas" />
        <img src={mountains} alt="Mountain" />
        <img src={sunset} alt="Sunset" />
        <img src={whale} alt="Whale" />
      </div>
    </div>
  );
}

export default Illustration1;
