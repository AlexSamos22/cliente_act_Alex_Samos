//Get the file https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json and present the information in a webpage in a nice way
const url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

let pedir_info = document.getElementById("pedir_info");
let mostrar_info = document.getElementById("mostrar_info");

pedir_info.addEventListener("click", () => {

    (async () => {
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            recorrerObjeto(resultado, mostrar_info); 
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    })();
});

function recorrerObjeto(objeto, contenedor) {
    let ul = document.createElement("ul");

    for (const key in objeto) {
        let li = document.createElement("li");

        if (typeof objeto[key] === 'object' && objeto[key] !== null) {
            let subUl = document.createElement("ul");
            let subLi = document.createElement("li");

            subLi.textContent = key + ":";
            subLi.appendChild(subUl);
            recorrerObjeto(objeto[key], subUl);
            li.appendChild(subLi);
        } else {
            li.textContent = key + ": " + objeto[key];
        }

        ul.appendChild(li);
    }

    contenedor.appendChild(ul);
}


