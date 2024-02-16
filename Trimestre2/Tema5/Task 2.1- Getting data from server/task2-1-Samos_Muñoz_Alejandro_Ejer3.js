let ciudad = document.getElementById("ciudad");

ciudad.addEventListener("input", () =>{
    let letra = ciudad.value;

    fetch("ciudades.php?letra="+ letra)
    .then(respuesta =>{
        if (respuesta.ok) {
            return respuesta.json();
        }else{
            throw new Error("No ha habido respuesta del servidor");
        }
    })
    .then(ciudades =>{
        let lista = document.getElementById("listaCiudades");
        lista.innerHTML= "";

        ciudades.forEach((ciudad) =>{
            let itemLista = document.createElement("li");
            itemLista.textContent = ciudad;
            lista.appendChild(itemLista);
        });
    })
    .catch((err) =>{
        console.error("Hubo un problema al recibir la respuesta del servidor: " + err);
    })
});

