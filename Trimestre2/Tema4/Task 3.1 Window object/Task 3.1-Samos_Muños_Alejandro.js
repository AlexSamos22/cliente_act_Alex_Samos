//Open a new window having previously asked the user for the URL. It must take 4 seconds to open it.
let formulario_url = document.getElementById("pedir_url");
let windows_ID;
let interval_ID;
formulario_url.addEventListener("submit", (evento) => {
    let url = document.getElementById("url").value;
    evento.preventDefault();
    setTimeout(() => {
        let destino = "_blank";
        windows_ID = window.open(url, destino, "width=600", "height=500");
        cerrar_ventana();
    }, 4000);
});

//Resize the previously opened window, having previously asked the user for the new size
let formulario_tama = document.getElementById("pedir_tama");

formulario_tama.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let ancho = parseInt(document.getElementById("anchura").value);
    let largo = parseInt(document.getElementById("altura").value);
    windows_ID.resizeTo(ancho, largo);
});

//Close the recently opened window with a button
let cerrar = document.getElementById("cerrar");
cerrar.addEventListener("click", () => {
    windows_ID.close();
});

/*
Open a new window again and create a function that asks the user for a time in seconds. 
Show the descendant count and when it gets to 0, close the last opened window.
*/

function cerrar_ventana() {
    let secccion = document.getElementById("pedir_tiempo");
    secccion.innerHTML = `
    <label for="tiempo">Introduce un tiempo en segundos para cerrar la nueva pestaña</label>,
    <input type="number" id="tiempo" required>
    <button id="enviar">Enviar</button>
    `;

    let boton = document.getElementById("enviar");
    boton.addEventListener("click", () => {
        let cronometro = document.getElementById("tiempo").value;
        let seccion2 = document.getElementById("contador")
        interval_ID  = setInterval(() => {
            seccion2.textContent = `La pestaña se cerrara en: ${cronometro}`;
            cronometro--;
            if (cronometro == 0) {
                windows_ID.close();
                clearTimeout(interval_ID);
            }
        }, 1000);
    });
}

