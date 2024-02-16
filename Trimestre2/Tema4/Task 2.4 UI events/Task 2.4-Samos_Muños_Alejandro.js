//Make a paragraph that change its appeareance if the mouse passes over it
let parrafo_color = document.getElementById("cambiar_color");
parrafo_color.addEventListener("mouseover", () =>{
    parrafo_color.style.backgroundColor="#8a2be2";
});

parrafo_color.addEventListener("mouseout", () =>{
    parrafo_color.style.backgroundColor = "transparent";
});

//Make a input that replicates what user inputs in another input
let original = document.getElementById("original");
let copia = document.getElementById("copia");
original.addEventListener('input', () => {
    copia.value = original.value;
});

/*
    Make a infinity scroll webpage. Clues:
    The element you need to check if it has reached the end is "html" (document.documentElement or querySelector("html"))
    getboundingClientRect returns the position of an element relative to the viewport. 
    Its bottom property returns how many pixels are from the top of the viewport to the bottom of the element.
    If we choose as "element" the whole document, it can't be 0, it always be, at least, the size of the document (you can't scroll anymore)
    Therefore you must check when you are 50px away from the bottom of the window 
*/
window.addEventListener('scroll', () => {
    if (document.documentElement.getBoundingClientRect().bottom - window.innerHeight < 50) {
        masContenido();
    }
});

function masContenido() {
        for (let i = 1; i <= 4; i++) {
            let otro_div = document.createElement('div');
            otro_div.textContent = document.querySelectorAll('.item')[i].innerHTML;
            document.getElementById('contenido_duplicar').appendChild(otro_div);
        }
}

//Create a paragraph you can write on when clicking on it
let parrafo_escribir = document.getElementById("escribir_cuando_click");
parrafo_escribir.addEventListener("click", () =>{
    parrafo_escribir.contentEditable = true;
});

/*
    Create a web page with a form to choose different geometric shapes: rectangle, square, triangle and circle. 
    Once selected, appropiate fields to enter its characteristics must be presented. 
    The page must calculate its surface according to the values entered. 
    Input fields must react to any user input, no matter if he hasn't finished entering data
*/
let formularioFiguras = document.getElementById('form_figuras');
let datos = document.getElementById('introducir_datos');
let resultado = document.getElementById('resultado_figura');

crearCampos(); 

document.getElementById('figura').addEventListener('change', () => {
    crearCampos();
});

datos.addEventListener('input', calcularArea);

function crearCampos() {
    let figura = document.getElementById('figura').value;
    datos.innerHTML = ''; 

    switch (figura) {
        case 'rectangulo':
            datos.innerHTML = `
                <label for="anchura">Anchura:</label>
                <input type="number" id="anchura" step="0.01">
                <label for="altura">Altura:</label>
                <input type="number" id="altura" step="0.01">
            `;
            break;
        case 'cuadrado':
            datos.innerHTML = `
                <label for="lado">Lado:</label>
                <input type="number" id="lado" step="0.01">
            `;
            break;
        case 'triangulo':
            datos.innerHTML = `
                <label for="base">Base:</label>
                <input type="number" id="base" step="0.01">
                <label for="altura_triangulo">Altura:</label>
                <input type="number" id="altura_triangulo" step="0.01">
            `;
            break;
        case 'circulo':
            datos.innerHTML = `
                <label for="radio">Radio:</label>
                <input type="number" id="radio" step="0.01">
            `;
            break;
    }
    calcularArea();
}

function calcularArea() {
    let figura = document.getElementById('figura').value;
    let area;
    let longitud;
    let altura;
    let base;
    let radio;
    let lado;

    switch (figura) {
        case 'rectangulo':
            longitud = parseFloat(document.getElementById('anchura').value) || 1;
            altura = parseFloat(document.getElementById('altura').value) || 1;
            area = longitud * altura;
            break;
        case 'cuadrado':
            lado = parseFloat(document.getElementById('lado').value) || 1;
            area = lado * lado;
            break;
        case 'triangulo':
            base = parseFloat(document.getElementById('base').value) || 1;
            altura = parseFloat(document.getElementById('altura_triangulo').value) || 1;
            area = (base * altura) / 2;
            break;
        case 'circulo':
            radio = parseFloat(document.getElementById('radio').value) || 1;
            area = Math.PI * Math.pow(radio, 2);
            break;
    }

    resultado.textContent = `Área: ${area.toFixed(2)}`;
}


/*
    Create a web page to simulate how much will a real state buyer will pay 
    according to: the loan, the interest rate and the payback period. The solution must change at any user input, 
    no matter if he hasn't finished entering data
*/

let entradaPrestamo = document.getElementById('prestamo');
let entradaTasaInteres = document.getElementById('tasaInteres');
let seleccionPlazoPago = document.getElementById('plazoPago');
let contenedorResultado = document.getElementById('resultado');


entradaPrestamo.addEventListener('input', calcularPagos);
entradaTasaInteres.addEventListener('input', calcularPagos);
seleccionPlazoPago.addEventListener('change', calcularPagos);


function calcularPagos() {
    let prestamo = parseFloat(entradaPrestamo.value) || 0; 
    let tasaInteres = parseFloat(entradaTasaInteres.value) || 1; 
    let plazoPago = parseFloat(seleccionPlazoPago.value) || 0;

    let tasaInteresMensual = (tasaInteres / 100) / 12;
    let numeroPagos = plazoPago * 12;

    let pagoMensual = (prestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -numeroPagos));

    let pagoTotal = pagoMensual * numeroPagos;

    contenedorResultado.innerHTML = `
        Pago Mensual: ${pagoMensual.toFixed(2)} €<br>
        Pago Total: ${pagoTotal.toFixed(2)} €
    `;
}