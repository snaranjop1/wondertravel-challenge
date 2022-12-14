import React from "react";
import logo from "../../assets/images/banner-logo.png";
import experienceIcon from "../../assets/icons/experience.svg";
import location from "../../assets/icons/location.svg";
import adventureIcon from "../../assets/icons/adventure.svg";
import foodIcon from "../../assets/icons/food.svg";
import hotelIcon from "../../assets/icons/hotel.svg";
import offroadIcon from "../../assets/icons/off-road.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";
import whatsappImg from "../../assets/images/whatsapp.png";
import patternBg from "../../assets/images/pattern.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="logo-container">
        <img src={logo} alt="Wonder travel logo" className="logo" />
      </div>
      <img src={patternBg} alt="pattern" className="pattern-bg" />
      <div className="info-container">
        <div className="info">
          <h1 className="banner-title">Guainía y Cerros de Mavicure</h1>
          <hr className="divider" />
          <p className="banner-text">
            Viaje por los Cerros de Mavicure y sus alrededores
          </p>
          <div className="duration">
            <img src={experienceIcon} alt="Experience icon" />
            <h2 className="duration-text">4 días, 3 noches*</h2>
          </div>
          <div className="location">
            <img src={location} alt="Location" />
            <p className="banner-text">Orinoquía (Guainía, Colombia)</p>
          </div>
          <div className="perks">
            <p className="perk banner-text">
              <img src={adventureIcon} alt="Adventure" />
              Experiencias cautivantes
            </p>
            <p className="perk banner-text">
              <img src={foodIcon} alt="Food" />
              Todas las comidas incluidas
            </p>
            <p className="perk banner-text">
              <img src={hotelIcon} alt="Hotel" />
              Alojamientos únicos
            </p>
            <p className="perk banner-text">
              <img src={offroadIcon} alt="Transport" />
              Transporte terrestre y fluvial en el Guainía
            </p>
          </div>
          <div className="book">
            <p className="banner-text">Whatsapp:</p>
            <button className="book-btn">
              <img src={whatsappImg} alt="Whatsapp icon" />
              Reservar / información
            </button>
            <img src={arrowDown} alt="Arrow down" className="arrow-down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
