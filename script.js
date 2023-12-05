const infoByPlaceManhattan = {
  "Home": {
    title: "Bienvenido a Manhattan",
    content: "Explora los lugares más icónicos de Manhattan. Haz clic en los marcadores para obtener más información."
  },
  "TimesSquare": {
    title: "Times Square",
    img: "img/quehacer2.jpg",
    alt: "Times Square",
    content: "Times Square es uno de los lugares más vibrantes y concurridos de Manhattan. Conocido por sus luces brillantes y teatros de Broadway, es un punto de referencia imperdible."
  },
  "CentralPark": {
    title: "Central Park",
    img: "img/centralparkindex.webp",
    alt: "Central Park",
    content: "Central Park es un oasis verde en medio de la ciudad. Disfruta de la naturaleza, lagos, paseos y actividades al aire libre en este icónico parque urbano."
  },
  "EmpireStateBuilding": {
    title: "Empire State Building",
    img: "img/empire_state_building.jpg",
    alt: "Empire State Building",
    content: "El Empire State Building es un rascacielos emblemático de Manhattan. Con impresionantes vistas panorámicas desde su observatorio, es un lugar imperdible para los visitantes."
  },
  "BrooklynBridge": {
    title: "Puente de Brooklyn",
    img: "img/quehacer1.jpg",
    alt: "Puente de Brooklyn",
    content: "El Puente de Brooklyn es un ícono arquitectónico que conecta Manhattan con Brooklyn sobre el río East. Disfruta de una caminata escénica y vistas impresionantes de la ciudad."
  },
  "MuseumModernArt": {
    title: "Museo de Arte Moderno (MoMA)",
    img: "img/moma.jpg",
    alt: "MoMA",
    content: "El Museo de Arte Moderno (MoMA) es uno de los museos de arte más influyentes del mundo. Contiene una vasta colección de arte moderno y contemporáneo, incluyendo obras maestras reconocidas internacionalmente."
  },
  "GrandCentralTerminal": {
    title: "Grand Central Terminal",
    img: "img/grand_central_terminal.jpg",
    alt: "Grand Central Terminal",
    content: "Grand Central Terminal es una majestuosa estación de tren que ha sido un símbolo de la elegancia en el transporte desde su apertura en 1913. Explora su arquitectura impresionante y su historia fascinante."
  }
};

let fromHome = true; // Variable para saber si se ha accedido a la página desde el botón de información o desde el menú de navegación.

// Función para cambiar la información de la página
function changeInfoManhattan(section) {
  if (section === "Home") {
    // Si se pulsa el botón de información, se muestra un mensaje de bienvenida (click o pantalla táctil)
    fromHome = true;
    document.getElementById("MapInfoManhattan").innerHTML = "<h3></h3><p></p>";
    document.getElementById("MapInfoManhattan").getElementsByTagName("h3")[0].innerHTML = infoByPlaceManhattan[section].title;
    document.getElementById("MapInfoManhattan").getElementsByTagName("p")[0].innerHTML = infoByPlaceManhattan[section].content;
  } else {
    // Si se pulsa un marcador, se muestra la información del lugar (click o pantalla táctil)
    if (fromHome === true) {
      document.getElementById("MapInfoManhattan").innerHTML = '<h3></h3><div class="imgContent infoContent"><img id="ImgContent" src="" alt=""><div class="textInfo" id="TextInfo"><p></p></div></div>';
      fromHome = false;
    }
    document.getElementById("MapInfoManhattan").getElementsByTagName("h3")[0].innerHTML = infoByPlaceManhattan[section].title;
    document.getElementById("ImgContent").src = infoByPlaceManhattan[section].img;
    document.getElementById("ImgContent").alt = infoByPlaceManhattan[section].alt;
    document.getElementById("TextInfo").getElementsByTagName("p")[0].innerHTML = infoByPlaceManhattan[section].content;
  }
  document.getElementById("MapInfoManhattan").scrollIntoView();
}
