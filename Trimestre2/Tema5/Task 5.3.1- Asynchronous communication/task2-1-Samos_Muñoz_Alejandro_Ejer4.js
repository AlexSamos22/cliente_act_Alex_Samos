$(() => {
    $("form").submit((evento) =>{
        evento.preventDefault();
    });
    
    $("#mostrar").click(() => {
        let url = $("#url").val();
        fetch(url)
        .then(response => {
            $("#respuesta").text("Respuesta del servidor: " + response.statusText);
            $("#estado").text("Estado del servidor: " + response.status);
            return response.json();
        })
        .then(data => {
          let contenedorDatos = document.getElementById("datos");

          recorrerObjeto(data, contenedorDatos);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
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