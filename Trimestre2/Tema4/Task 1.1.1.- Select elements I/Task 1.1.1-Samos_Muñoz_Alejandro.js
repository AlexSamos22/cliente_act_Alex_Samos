//Seleccionar el segundo parrafo
let segundoParrafo = document.getElementsByTagName("p");
console.log(segundoParrafo[1]);

//Seleccionar el titulo
let titulo = document.getElementsByTagName("title");
console.log(titulo[0]);

//Seleccionar la primera seccion
console.log(document.querySelector("section"));

//Seleccionar todos los parrafos con la clase parrafo-cuerpo
console.log(document.getElementsByClassName("parrafo_cuerpo"));

//Seleccionar el apartado apellidos del formulario
console.log(document.getElementById("apellidos"));

//Seleccionar la ultima seccion
let secciones = document.getElementsByTagName("section");
console.log(secciones[secciones.length-1]);

//Seleccionar todos los parrafos
let parrafos = document.getElementsByTagName("p");
console.log(parrafos)

