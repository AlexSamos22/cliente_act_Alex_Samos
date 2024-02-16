let map;
let posicionPrevia = 1;
let totaldistancia = 0;
const osrmServiceUrl = 'http://router.project-osrm.org/route/v1/driving/';
let hacerDibujo;
let dibujar;

/*Compruebe si la geolocalización está disponible. Si no lo estuviera, debería mostrar un mensaje de error en cualquiera de las situaciones que pudiera darse.*/
if (navigator.geolocation) {
  inicializar_mapa();
  navigator.geolocation.getCurrentPosition(muestra_posicion, muestra_error);
} else {
  document.getElementById("mensaje-error").innerHTML = "La geolocalización no está disponible en este navegador.";
}

/* Mensajes de error */
function muestra_error(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("mensaje-error").innerHTML = "PERMISO DENEGADO";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("mensaje-error").innerHTML = "No se encuentra GPS";
      break;
    case error.TIMEOUT:
      document.getElementById("mensaje-error").innerHTML = "Expiró el tiempo";
      break;
    default:
      document.getElementById("mensaje-error").innerHTML = "Error desconocido";
  }
}

// Inicializa el mapa y muestra las coordenadas en un mapa, junto con un marcador en la ubicación.
function inicializar_mapa() {
  //Crea el mapa
  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([0, 0]),
      zoom: 2
    })
  });

  //Capa para dibujar la ruta
  hacerDibujo = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'blue',
        width: 3
      })
    })
  });
  map.addLayer(hacerDibujo);

  //Da la interaccion para dibujar
  dibujar = new ol.interaction.Draw({
    source: hacerDibujo.getSource(),
    type: 'LineString'
  });
  map.addInteraction(dibujar);

  // Escucha el evento de finalización del dibujo.
  dibujar.on('drawend', function (event) {
    let feature = event.feature;
    let coordenadas = feature.getGeometry().getCoordinates();
    document.getElementById("ruta-dibujada").innerHTML= 'Ruta dibujada: '  + coordenadas;
  });

  // Escucha el evento de clic en el mapa para calcular y dibujar la ruta.
  map.on('click', function (event) {
    let destino = ol.proj.toLonLat(event.coordinate);
    calcular_y_dibujar_ruta(destino);
  });
}

// Muestra la posición actual del usuario en el mapa, junto con un marcador.
function pinta_mapa(posicion) {
  let marca = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([posicion.coords.longitude, posicion.coords.latitude]))
  });

  let hacerMarca = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [marca]
    })
  });

  map.getView().setCenter(ol.proj.fromLonLat([posicion.coords.longitude, posicion.coords.latitude]));
  map.getView().setZoom(13);

  map.addLayer(hacerMarca);
}

// Mide la distancia recorrida entre dos puntos.
function calcular_distancia(posicion) {
  if (posicionPrevia) {
    let coordenadasActuales = [posicionPrevia.coords.longitude, posicionPrevia.coords.latitude];
    let coordenadasNuevas = [posicion.coords.longitude, posicion.coords.latitude];
    let coordenadasRuta = [coordenadasActuales, coordenadasNuevas];
    let distancia = calcular_distancia_entre_puntos(coordenadasRuta);
    totaldistancia += distancia;
    document.getElementById("distancia").innerHTML = `Distancia recorrida: ${totaldistancia.toFixed(2)} metros`;
  }
  posicionPrevia = posicion;
}

// Calcula la distancia en metros entre dos coordenadas
function calcular_distancia_entre_puntos(coord) {
  let totalDistancia = 0;
  for (let i = 1; i < coord.length; i++) {
    let lon1 = coord[i - 1][0];
    let lat1 = coord[i - 1][1];
    let lon2 = coord[i][0];
    let lat2 = coord[i][1];

    let R = 6371e3; 
    let phi1 = lat1 * Math.PI / 180; 
    let phi2 = lat2 * Math.PI / 180;
    let deltaPhi = (lat2 - lat1) * Math.PI / 180;
    let deltaLambda = (lon2 - lon1) * Math.PI / 180;

    let a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
        Math.cos(phi1) * Math.cos(phi2) *
        Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let distancia = R * c;
    totalDistancia += distancia;
}
  return totalDistancia;
}

//Calcula y dibuja la ruta desde la ubicación actual del usuario hasta un lugar determinado.
function calcular_y_dibujar_ruta(destino) {
  navigator.geolocation.getCurrentPosition(function (posicion) {
    let origen = [posicion.coords.longitude, posicion.coords.latitude];

    let URLPedida = `${osrmServiceUrl}${origen[0]},${origen[1]};${destino[0]},${destino[1]}?geometries=geojson`;
    fetch(URLPedida)
      .then(response => response.json())
      .then(data => {
        let rutaGeojson = data.routes[0].geometry;
        let rutaFeature = new ol.format.GeoJSON().readFeature(rutaGeojson);

        let hacerRuta = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [rutaFeature]
          }),
          style: new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: 'blue',
              width: 3
            })
          })
        });
        map.addLayer(hacerRuta);
        let distanciaEntrePuntos = calcular_distancia_entre_puntos(rutaFeature.getGeometry().getCoordinates());
        document.getElementById("mensaje-distancia").innerHTML = `Distancia entre puntos: ${distanciaEntrePuntos.toFixed(2)} metros`;
      })
      .catch(error => {
        console.error('Error al obtener la ruta:', error);
      });
  }, function (error) {
    console.error('Error al obtener la ubicación actual:', error);
  });
}

//Obtiene la dirección de la ubicación actual del usuario utilizando geocodificación inversa.
function obtenerDireccionDesdeCoordenadas(coordenadas) {
  let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordenadas[1]}&lon=${coordenadas[0]}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let direccion = data.display_name;
      console.log('Dirección:', direccion);
      document.getElementById("direccion-actual").innerHTML = "Direccion actual: " + direccion;
    })
    .catch(error => {
      console.error('Error al obtener la dirección:', error);
    });
}

//Muestra la posición actual del usuario en el mapa, incluso cuando el usuario se mueve.
function muestra_posicion(posicion) {
  posicionPrevia = posicion;
  pinta_mapa(posicion);
  calcular_distancia(posicion);
  obtenerDireccionDesdeCoordenadas([posicion.coords.longitude, posicion.coords.latitude]);
}
