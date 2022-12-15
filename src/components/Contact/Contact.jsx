import React from "react";
import contactLogo from "../../assets/images/contact-logo.png";
import whatsappImg from "../../assets/images/whatsapp.png";
import mouseIcon from "../../assets/icons/mouse.svg";
import mailIcon from "../../assets/icons/mail.svg";
import alianceImg from "../../assets/images/aliance.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <hr className="contact-divider" />
        <div className="branding">
          <img src={contactLogo} alt="Wonder travel logo" />
          <div className="branding-divider"></div>
          <p className="branding-hastag">#ViajaAlMomento</p>
        </div>
        <div className="contact">
          <h1>Reserva tus viajes:</h1>
          <div>
            <img src={whatsappImg} alt="Whatsapp icon" />
            <a href="https://wa.me/1555123456">Whatsapp</a> Reservas e info
          </div>
          <div>
            <img src={mouseIcon} alt="mouse icon" />
            <a href="www.wondertravel.co">www.wondertravel.co</a>
          </div>
          <div>
            <img src={mailIcon} alt="mail icon" />
            <a href="mailto: travelbuddy@wondertravel.co">
              travelbuddy@wondertravel.co
            </a>
          </div>
        </div>
      </div>
      <p className="aliances-text">Miembros de:</p>
      <img src={alianceImg} alt="Acotur logo" className="aliance-img" />
    </div>
  );
}

export default Contact;
