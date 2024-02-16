//Downgrade the h1 tag to an h2 one
let titulo1 = document.getElementById("titulo1");
let contenido_h1 = document.getElementById("titulo1").innerHTML;
let nuevoTitulo = document.createElement("h2");
nuevoTitulo.innerHTML = contenido_h1;
titulo1.parentNode.replaceChild(nuevoTitulo, titulo1);
console.log(contenido_h1);

//Replace only h2 content with a new text
let h2 = document.querySelectorAll("h2");
h2.forEach(elemento =>{
  elemento.innerHTML="Nuevo texto para el h2";
});

//Modify the first image source and alt properties
document.getElementsByTagName("img")[0].src="img/dados.png";
document.getElementsByTagName("img")[0].alt="dados";

//Replace the text of any p tag with "Hello, I'm a paragraph"
let parrafos = document.querySelectorAll("p");
parrafos.forEach(function(parrafo) {
    parrafo.innerHTML = "Hello, I'm a paragraph";
  });


//Modify the second image text
document.getElementsByTagName("img")[1].alt="Un perrito";

//Assign a non-standard property to body called info-fecha and assign today's date
document.getElementsByTagName("body")[0].setAttribute("info_fecha", "15/01/2024");

//Modify first image alt text
document.getElementsByTagName("img")[0].alt="nuevo alt";

//Console out all first image attributes
let atributos = document.querySelector("img").attributes;

Array.from(atributos).forEach(element => {
    console.log(element.name + " " + element.value);
});

//Change last image property "size" (after checking that exists)
let img = document.getElementsByTagName("img")[1];
if (img.hasAttributes("size")) {
    img.setAttribute("size", "60px");
}

//Add an id="ultima_imagen" to the last image
img.id="ultima_imagen";

//Add an attribute tipo="parrafo" to all p
parrafos.forEach(function(parrafo) {
    parrafo.setAttribute("tipo", "parrafo");
  });

//Add a text to each element in the list (must be scalable)
let listaCompra = document.getElementById("listaCompra");
let productos = listaCompra.querySelectorAll("li");

productos.forEach(producto =>{
  producto.innerHTML = "Comprar: " + producto.innerHTML;
})

//Add a paragraph after the last element with a text counting the number of items in the list
let items = listaCompra.querySelectorAll('li');
let nuevoParrafo = document.createElement('p');
nuevoParrafo.innerHTML = 'Número de elementos en la lista: ' + items.length;
listaCompra.appendChild(nuevoParrafo);

//Add a paragraph, at the end of the document, containing how many classes has the last paragraph of the first article and their names
let ultimoParrafo = document.querySelector('article:first-of-type p:last-of-type');
let clases = ultimoParrafo.classList;
let cantidadClases = clases.length;
let parrafo = document.createElement("p");
parrafo.innerHTML = 'El último párrafo del primer artículo tiene ' + cantidadClases + ' clase(s): ' + Array.from(clases).join(', ');
document.body.appendChild(parrafo);

//Add two classes to the previous paragraph: "clase1" and "clase2"
ultimoParrafo.classList.add("clase1", "clase2");


//Remove the last created class
let clases2 = ultimoParrafo.classList;
let ultimaClase = clases2[ultimoParrafo.classList.length-1];
ultimoParrafo.classList.remove(ultimaClase);


//Add a boolean attribute to the first image
document.getElementsByTagName("img")[0].toggleAttribute("creado");

