//Create a unordered shopping list with three levels that collapse when pressing the parent node. 
//Use only one event handler. Clue: use hidden attribute
let lista = document.getElementById('lista_compra');

lista.addEventListener("click", (event) =>{
 let target = event.target; //sacar el elemento que fue clicado
    if (target.nodeName === 'LI') {//si el elemento es un li se saca el ul hijo
        let childUL = target.querySelector('ul');
        if (childUL) {//si se encuentra un ul hijo se le pondra o quitara el atributo hidden
            childUL.toggleAttribute('hidden');
        }
    }
});

//Create three boxes with a header, a text and a close button. 
//Make the button work by using just one event listener on the container. Clue: use closest() method
let botones_cierre = document.querySelectorAll(".boton-cierre");
botones_cierre.forEach((boton)=>{
    boton.addEventListener("click", ()=>{
        let caja_del_boton = boton.closest(".caja");
        caja_del_boton.toggleAttribute('hidden');
    })
});

let boton_mostrar = document.querySelector(".mostrar-cajas")
boton_mostrar.addEventListener("click", ()=>{
    let cajas = document.querySelectorAll(".caja");
    cajas.forEach((caja) =>{
        if (caja.hasAttribute('hidden')) {
            caja.removeAttribute('hidden');
        }
    });
});

//Create a code that shows a tooltip text over a button when mouse is over and dissapears when mouse is not over. 
//It must appear on top if there is space enough or above it if not. 
//Clues:
//Use data attributes to store tooltip text
//Use getBoundingClientRect() method to calculate coordinates
let boton_info = document.getElementById("boton-con-info");
let contenedor_info = document.getElementById("contenedor-info");


boton_info.addEventListener("mouseover", (event) =>{
    let coordenadas = event.target.getBoundingClientRect();
    let arriba = coordenadas.top + contenedor_info.offsetHeight - 5;
    let izquierda = coordenadas.left + (event.target.offsetWidth - contenedor_info.offsetWidth)/2 ;

    if (izquierda < 0) {
        izquierda = 0;
    }else if(arriba < 0){
        arriba = coordenadas.top + contenedor_info.offsetHeight + 5;
    }

    contenedor_info.style.left = `${izquierda}px`;
    contenedor_info.style.top = `${arriba}px`;

    let texto_boton = event.target.dataset.info;
    contenedor_info.innerHTML = texto_boton;

    contenedor_info.style.visibility = "visible";
});

boton_info.addEventListener("mouseout", (event) =>{
    contenedor_info.style.visibility = "hidden";
});

//Create a table with two columns: one for numbers and the other for text, and as many rows as you want. 
//When clicking on the header of each column, table must be ordered. Your code must be able to work with huge tables. Clues:
//Use cellIndex to know where you have clicked
//Use dataset to store the kind of information each column has
let tabla = document.getElementById("tabla");
let tbody = tabla.querySelector('tbody');
let ths = tabla.querySelectorAll('th');

ths.forEach(th => {
    th.addEventListener('click', () => {
        let type = th.dataset.type;
        let index = th.cellIndex;
        let arrayTds = Array.from(tbody.rows);

        arrayTds.sort((fila1, fila2) => {
            let valor1 = fila1.cells[index].textContent;
            let valor2 = fila2.cells[index].textContent;

            if (type === "number") {
                return parseInt(valor1) - parseInt(valor2);
            } else {
                return valor1.localeCompare(valor2);
            }
        });

        tbody.innerHTML = '';
        arrayTds.forEach(fila => {
            tbody.appendChild(fila);
        });
    });
});

//Make the unordered shopping list created at point 1 selectable as you can do at file managers. 
//Users should notice which elements are selected by their background color
let listaLi = document.querySelectorAll('#lista_compra_ejer5 li');
listaLi.forEach(item => {
    item.addEventListener('click', (event) =>{
        item.classList.toggle('seleccionada');
        event.stopPropagation();
    }); 
});

//Using the event 'scroll', create a webpage that goes beyond the limits of the viewport This page must have a button, in a fixed position, 
//that moves alongside the page when scrolling and hides when top is reached. This button must get user to the top of the page. Clues:
//Use ScrollTo method of window object
//Use a "for" loop that attaches several p structures. to a temporary structure before writting it to the DOM or use writeln method 
//of window object
let boton = document.getElementById("subir_pagina");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        boton.classList.add("mostrar_boton");
    } else {
        boton.classList.remove("mostrar_boton");
    }
});

boton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


