//Create a temporary structure to store the structure created in the following step
let tmp = document.createDocumentFragment();

//Create a section with three children: a comment and two articles. Each one must have a paragraph and a link to www.duckduckgo.com
let seccion = document.createElement("section");
let comentario = document.createComment("Un comentario aleatorio");
let articulo = document.createElement("article");
let articulo2 = document.createElement("article");
let parrafo = document.createElement("p");
parrafo.innerHTML = "texto aleatorio para el parrafo";
let parrafo2 = document.createElement("p");
parrafo2.innerHTML = "texto aleatorio para el parrafo2";
let link = document.createElement("a");
let link2 = document.createElement("a");
link.href="www.duckduckgo.com";
link.textContent="Buscador";
link2.href="www.duckduckgo.com";
link2.text="Buscador";

articulo.appendChild(parrafo);
articulo.appendChild(link);
articulo2.appendChild(parrafo2);
articulo2.appendChild(link2);
seccion.appendChild(comentario);
seccion.appendChild(articulo);
seccion.appendChild(articulo2);
tmp.appendChild(seccion);

//Attach the temporary structure to the real DOM
document.body.appendChild(tmp);

//Clone the previous section to a new one
let nueva_seccion = seccion.cloneNode(true);

//Remove the content inserted at step 3
document.body.removeChild(seccion);

//Check if the temporary structure exists and is connected to the DOM
console.log(tmp.isConnected);

//Connect the temporary structure to the DOM
tmp.appendChild(nueva_seccion);
document.body.appendChild(tmp);

//Remove all the elements on the list marked as vegetables
let padre = document.getElementById("lista_compra");
let verduras = document.getElementsByClassName("verdura");

Array.from(verduras).forEach(verdura =>{
    padre.removeChild(verdura);
})

//Replace the paragraph of the first article inserted on step 7 with the last paragraph of the document
let sustituto = document.body.querySelector("section:last-of-type article:last-of-type p");
let sustituido = document.body.querySelector("section:last-of-type p");
let padre2 = document.querySelector("section:last-of-type article");
padre2.replaceChild(sustituto, sustituido);

//Insert a paragraph after any image with the name of the file
let punto_insercion = document.querySelector("img");
let p = document.createElement("p");
p.innerHTML = "3.-modifying DOM.js";

punto_insercion.after(p);

//Insert a comment before any image
let coment = document.createComment("Comentario para la imagen");
punto_insercion.before(coment);

//Insert a paragraph before the first and after the last child
let primerHijo = punto_insercion.parentElement.firstElementChild;
let ultimoHijo = punto_insercion.parentElement.lastElementChild;
let p_despues = document.createElement("p");
let p_antes = document.createElement("p");
p_despues.innerHTML = "Parrafo despues del primer hijo";
p_antes.innerHTML= "Parrafo antes del ultimo hijo";
primerHijo.before(p_antes);
ultimoHijo.after(p_despues);

//Replace all content of the first article inserted at step 7
let aux = document.querySelector("section:last-of-type article");
let nuevo_contenido = document.createElement("p");
nuevo_contenido.innerHTML = "Nuevo contenido para el articulo";
while (aux.firstChild) {
    aux.removeChild(aux.firstChild);
}
aux.appendChild(nuevo_contenido);

//Repace, from the content of any article inserted at step 7, only paragraphs
let parrafo_articulo = document.querySelector("section:last-of-type article:first-of-type p");
let nuevo_elemento = document.createElement("a");
nuevo_elemento.innerHTML = "Un enlace a ningun sitio";
aux.replaceChild(nuevo_elemento, aux.appendChild(parrafo_articulo));
console.log(parrafo_articulo);

//Insert a descriptive text before the article of the cat
let gato = document.getElementById("gato");
let texto = document.createElement("p");
texto.innerHTML = "Esto es un texto para el articulo del gato";
gato.before(texto);

//Insert a nice message about cats after its section
let texto2 = document.createElement("p");
texto2.innerHTML = "Los gatos son animales adorables";
gato.after(texto2);


//Replace the mixed shopping list with two lists: one for vegetables and one for fruits
let lista = document.getElementById("lista");
let articulo_frutas = document.createElement("article");
let articulo_verduras = document.createElement("article");

let verduras2 = document.querySelectorAll(".verdura");
let frutas = document.querySelectorAll(".fruta");

let lista_verduras = document.createElement("ul");
let lista_frutas = document.createElement("ul");

verduras2.forEach((verdura) => {
    let item = document.createElement("li");
    item.textContent = verdura.innerHTML;
    lista_verduras.appendChild(item);
});

frutas.forEach((fruta) =>{
    let item = document.createElement("li");
    item.textContent = fruta.innerHTML;
    lista_frutas.appendChild(item);
})


let seccion_lista = document.getElementById("lista");
seccion_lista.innerHTML ="";

articulo_frutas.appendChild(lista_frutas);
articulo_verduras.appendChild(lista_verduras);

lista.appendChild(articulo_frutas);
lista.appendChild(articulo_verduras);

