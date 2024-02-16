/*Create a button that hides himself when pressed. After testing it, remove its eventlistener*/ 
let ocultar_boton = document.getElementById("boton_ocultar");
function ocultar(){
    ocultar_boton.style="display: none;";
}
ocultar_boton.addEventListener("click", ocultar);

let borrar_evento = document.getElementById("quitar_evento");
borrar_evento.addEventListener("click", ()=>{
  ocultar_boton.removeEventListener('click', ocultar);
  alert("evento borrado");
})


/*Create three buttons as a group and assign them an event listener by using an object: 
    The first one must hide/show a text below itself
    The second one must show a window with any text
    The third one must console out a random text
*/ 
class Botones{
  constructor(elemento){
    elemento.addEventListener('click', this.onClick.bind(this));
  }

  mostrar_ocultar(){
    let parrafo = document.getElementById("oculto");
    parrafo.classList.toggle("parrafo_oculto");
  }

  ventana(){
    alert("Esto es una ventana emergente");
  }

  console_text(){
    console.log("Texto generado por pulsar el boton");
  }

  onClick(event){
    this[event.target.dataset.action]();
  }
}

new Botones(document.getElementById("grupo_botones"));


/*Create a box with a header, some text and a button that closes the box.*/
let caja = document.getElementById("caja_ocultar");
let boton = document.getElementById("ocultar_caja");
boton.addEventListener("click", ()=>{
  caja.classList.toggle("caja_ocultar");
});