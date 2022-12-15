import React from "react";
import adventureImg from "../../assets/images/adventure.png";
import experienceIcon from "../../assets/icons/experience.svg";
import "./Itinerary.css";

function Itinerary() {
  const itinerary = {
    itinerary: [
      [
        { title: "Inicio", description: "Ciudad de Origen", type: "" },
        {
          title: "",
          description: "Llegada a Pto. Inírida",
          type: "",
        },
        {
          title: "",
          description:
            "Vuelo (1.5h) (No incluido, lo podemos organizar por ti)",
          type: "plane",
        },
        {
          title: "Los Cerros Sagrados",
          subtitle: "Travesía en lancha (2h) desde Puerto Inírida",
          description:
            "Visita a los Cerros de Mavicure, Pajarito y Mono. Visita a las comunidades del Remanso y Venado",
          type: "experience",
        },
        {
          title: "",
          description: "Almuerzo en Comunidad Indigena",
          type: "food",
        },
        {
          title: "Cerro Diablo",
          description: "Caminata y escalada al atardecer",
          type: "experience",
        },
        {
          title: "",
          description: "Alojamiento y cena en cabañas indígenas",
          type: "stay",
        },
      ],
      [
        {
          title: "Ascenso al Cerro Mavicure",
          description: "Para deleitarse con los paisajes del escudo guayanés",
          type: "experience",
        },
        {
          title: "Caño San Joaquín",
          description:
            "El “oasis del Guainía”, te estremecerá con sus aguas color naranja",
          type: "experience",
        },
        {
          title: "",
          description: "Almuerzo en Comunidad Indigena",
          type: "food",
        },
        {
          title: "",
          description: "Desplazamiento a la comunidad La Ceiba",
          type: "transport",
        },
        {
          title: "Ictiofauna Nocturna",
          subtitle:
            "Travesía en canoa por el Caño Pajarito para conocer los peces de la región",
          description:
            "def. Ictiofauna: Conjunto de peces de una zona acuática acotada",
          type: "experience",
        },
        {
          title: "",
          description: "Alojamiento y cena en cabañas indígenas",
          type: "stay",
        },
      ],
      [
        {
          title: "Comunidad la Ceiba",
          description:
            "Conocerás sus iniciativas productivas sostenibles como la Ruta de la Miel",
          type: "experience",
        },
        {
          title: "Actividad Verde",
          subtitle: "Ruta de la Miel",
          description:
            "Conoce la iniciativa de producción de miel orgánica que ayuda a reforestar la Orinoquía",
          type: "green",
        },
        {
          title: "El gran Río Orinoco y la Estrella Fluvial",
          description:
            "Visita a la Estrella Fluvial donde convergen los Ríos Guaviare, Atabapo e Inírida originando el gran Río Orinoco",
          type: "experience",
        },
        {
          title: "",
          description: "Almuerzo en Reserva Natural",
          type: "food",
        },
        {
          title: "¡A nadar!",
          subtitle: "Baño en las aguas del Río Atabapo en la piedra de Maviso",
          description: "Río Atabapo",
          type: "experience",
        },
        {
          title: "Dosel/ Canopy",
          subtitle:
            "Atravesando el nororiente amazónico por las copas de los árboles.",
          description: "Reserva Natural Morú",
          type: "experience",
        },
        {
          title: "",
          description: "Alojamiento y cena en Reserva Natural Morú",
          type: "stay",
        },
      ],
      [
        {
          title: "",
          description: "Desplazamiento a Puerto Inírida y aeropuerto",
          type: "transport",
        },
        {
          title: "",
          description: "",
          type: "plane",
        },
      ],
    ],
  };

  const renderItinerary = () => {
    return itinerary.itinerary.map((day, index) => {
      return (
        <React.Fragment key={index}>
          <div className="day-container">
            <hr />
            <h2>Día {index + 1}</h2>
          </div>
          {day.map((item) => {
            return (
              <React.Fragment key={item.description}>
                <div className={`itinerary-item ${item.type}`}>
                  <div className="itinerary-item-title-container">
                    <h3 className="itinerary-item-title">{item.title}</h3>
                    {item.subtitle && (
                      <h4 className="itinerary-item-title">{item.subtitle}</h4>
                    )}
                  </div>
                  <div className="itinerary-item-dot">
                    {item.type ? (
                      <img
                        src={
                          item.type === "green"
                            ? require(`../../assets/icons/green.png`)
                            : require(`../../assets/icons/${item.type}.svg`)
                        }
                        alt={item.type}
                      />
                    ) : (
                      <div className="no-icon"></div>
                    )}
                  </div>
                  <p className="itinerary-item-desc">{item.description}</p>
                </div>
                {item.type === "experience" && (
                  <div className="itinerary-item-dotted-line experience"></div>
                )}
                {item.type === "green" && (
                  <div className="itinerary-item-dotted-line green"></div>
                )}
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="itinerary-container">
      <img src={adventureImg} alt="Adventure" className="adventure-img" />
      <div className="itinerary-title-container">
        <h1>La travesía:</h1>
        <div className="itinerary-wonder-title">
          <p>Wonder Travel</p>
          <img src={experienceIcon} alt="Experience icon" />
        </div>
      </div>
      <div className="itinerary">{renderItinerary()}</div>
      <p className="return-text">Regreso a</p>
      <p className="return-text">ciudad de origen</p>
    </div>
  );
}

export default Itinerary;
