# Prueba Técnica - Wonder Travel

# App - Componente Itinerario

- Deployment: [Wonder Travel Challenge](https://wondertravel-challenge.vercel.app/)

- Estructura JSON:
  - Para diseñar la estructura primero se creo un objeto para representar cada step del itinerario, donde hay 7 tipos de step (experience, green, food, stay, transport, plane):
    ```json
    {
      "title": "Titulo del step",
      "subtitle": "Texto abajo del titulo del step",
      "description": "descripción del step",
      "type": "tipo de step"
    }
    ```
  - Se toma entonces cada día del itinerario como un array de steps:
    ```json
    [
    	{ "title": "Inicio", "description": "Ciudad de Origen", "type": "" },
    	{
    	  "title": "",
    	  "description": "Llegada a Pto. Inírida",
    	  "type": "",
    	},
    	{
    	  "title": "",
    	  "description":
    	    "Vuelo (1.5h) (No incluido, lo podemos organizar por ti)",
    	  "type": "plane",
    	},
    	{
    	  "title": "Los Cerros Sagrados",
    	  "subtitle": "Travesía en lancha (2h) desde Puerto Inírida",
    	  "description":
    	    "Visita a los Cerros de Mavicure, Pajarito y Mono. Visita a las comunidades del Remanso y Venado",
    	  "type": "experience",
    	},
    	...
    ]
    ```
  - Posteriormente se toma entonces que el itinerario es un array de arrays de steps, de manera que el orden de este array indica el orden de los días del itinerario
    ```json
    {
    	itinerary: [
    		[
    			{ "title": "Inicio", "description": "Ciudad de Origen", "type": "" },
    			{
    			  "title": "",
    			  "description": "Llegada a Pto. Inírida",
    			  "type": "",
    			},
    			....
    		],
    		[
    			{
            "title": "Ascenso al Cerro Mavicure",
            "description": "Para deleitarse con los paisajes del escudo guayanés",
            type: "experience",
          },
          {
            "title": "Caño San Joaquín",
            "description":
              "El “oasis del Guainía”, te estremecerá con sus aguas color naranja",
            "type": "experience",
          },
    			...
    		]
    	]
    }
    ```
  - Finalmente obtenemos la siguiente estructura:
    ```json
    {
      "itinerary": [
        [
          { "title": "Inicio", "description": "Ciudad de Origen", "type": "" },
          {
            "title": "",
            "description": "Llegada a Pto. Inírida",
            "type": ""
          },
          {
            "title": "",
            "description": "Vuelo (1.5h) (No incluido, lo podemos organizar por ti)",
            "type": "plane"
          },
          {
            "title": "Los Cerros Sagrados",
            "subtitle": "Travesía en lancha (2h) desde Puerto Inírida",
            "description": "Visita a los Cerros de Mavicure, Pajarito y Mono. Visita a las comunidades del Remanso y Venado",
            "type": "experience"
          },
          {
            "title": "",
            "description": "Almuerzo en Comunidad Indigena",
            "type": "food"
          },
          {
            "title": "Cerro Diablo",
            "description": "Caminata y escalada al atardecer",
            "type": "experience"
          },
          {
            "title": "",
            "description": "Alojamiento y cena en cabañas indígenas",
            "type": "stay"
          }
        ],
        [
          {
            "title": "Ascenso al Cerro Mavicure",
            "description": "Para deleitarse con los paisajes del escudo guayanés",
            "type": "experience"
          },
          {
            "title": "Caño San Joaquín",
            "description": "El “oasis del Guainía”, te estremecerá con sus aguas color naranja",
            "type": "experience"
          },
          {
            "title": "",
            "description": "Almuerzo en Comunidad Indigena",
            "type": "food"
          },
          {
            "title": "",
            "description": "Desplazamiento a la comunidad La Ceiba",
            "type": "transport"
          },
          {
            "title": "Ictiofauna Nocturna",
            "subtitle": "Travesía en canoa por el Caño Pajarito para conocer los peces de la región",
            "description": "def. Ictiofauna: Conjunto de peces de una zona acuática acotada",
            "type": "experience"
          },
          {
            "title": "",
            "description": "Alojamiento y cena en cabañas indígenas",
            "type": "stay"
          }
        ],
        [
          {
            "title": "Comunidad la Ceiba",
            "description": "Conocerás sus iniciativas productivas sostenibles como la Ruta de la Miel",
            "type": "experience"
          },
          {
            "title": "Actividad Verde",
            "subtitle": "Ruta de la Miel",
            "description": "Conoce la iniciativa de producción de miel orgánica que ayuda a reforestar la Orinoquía",
            "type": "green"
          },
          {
            "title": "El gran Río Orinoco y la Estrella Fluvial",
            "description": "Visita a la Estrella Fluvial donde convergen los Ríos Guaviare, Atabapo e Inírida originando el gran Río Orinoco",
            "type": "experience"
          },
          {
            "title": "",
            "description": "Almuerzo en Reserva Natural",
            "type": "food"
          },
          {
            "title": "¡A nadar!",
            "subtitle": "Baño en las aguas del Río Atabapo en la piedra de Maviso",
            "description": "Río Atabapo",
            "type": "experience"
          },
          {
            "title": "Dosel/ Canopy",
            "subtitle": "Atravesando el nororiente amazónico por las copas de los árboles.",
            "description": "Reserva Natural Morú",
            "type": "experience"
          },
          {
            "title": "",
            "description": "Alojamiento y cena en Reserva Natural Morú",
            "type": "stay"
          }
        ],
        [
          {
            "title": "",
            "description": "Desplazamiento a Puerto Inírida y aeropuerto",
            "type": "transport"
          },
          {
            "title": "",
            "description": "",
            "type": "plane"
          }
        ]
      ]
    }
    ```
