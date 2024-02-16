//Include a new class at the parent of the image of the cats
let art_img = document.getElementById("gato");
let img = art_img.querySelector("img");

img.parentElement.classList.add("seccion-gato");

//Include a new class at any child of the section with ID "animales"
let seccion = document.getElementById("animales");
seccion.firstElementChild.classList.add("clase-para-el-primer-hijo");

//List all children of the form
let formulario = document.getElementById("formulario-contacto");
let hijos_form = formulario.children;
for (let i = 0; i < hijos_form.length; i++) {
    console.log(hijos_form[i]); 
}

//Change the text of the first and the last element of the shopping list
let lista = document.getElementById("listaCompra");
let primer_elemento = lista.firstElementChild;
let ultimo_elemento = lista.lastElementChild;
primer_elemento.textContent = "soy el primero de la lista";
ultimo_elemento.textContent= "soy el ultimo de la lista";

//Change the text of the first label of the form
let primer_label = document.querySelector("form label:first-of-type");
primer_label.textContent = "Campo Nombre";

//Console out the type of the parent node of the image of the dog
let art_perro = document.getElementById("perro");
let img_perro = art_perro.querySelector("img");
console.log(img_perro.parentNode.nodeName);

//Console out the type of the previous sibling of the article where is the cat
console.log(art_img.previousSibling.nodeType);