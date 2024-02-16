/*
    Implement a register, unregister, log in and log out process by using localStorage. 
    Implement the usual functionality: register, log in, log out and remember session. 
    User should be asked for the following information:
        Personal information: name, age and sex.
        Color palette preferences. When chosen, the website must inmedately change the color palette.
        Language.
    Next time the user connects, the webpage must salutate him with his name in his language and apply his preferred colors.
    The website must allow the user to change his preferences and to remove his information.
    All information must be storaged in one piece of information.
*/
let boton_mostrar_login = document.getElementById("mostrar_registro");
let boton_mostrar_registro = document.getElementById("mostrar_login");
let seccion_registro = document.getElementById("registro");
let seccion_login = document.getElementById("login");
let seccion_eliminar = document.getElementById("eliminar_cuenta");
let seccion_conf = document.getElementById("configuracion");
let color = document.getElementById("color");
let boton_login = document.getElementById("login_boton");
let boton_registro = document.getElementById("registrarse");
let formularios = document.querySelectorAll("form");
let cerrar_sesion = document.getElementById("cerrar_sesion");
let seccion_inicio = document.getElementById("inicio");
let h1 = document.getElementById("bienvenida");
let eliminar_cuenta = document.getElementById("eliminar_cuenta");
let acceder_eliminar = document.getElementById("eliminar_boton");
let acceder_conf = document.getElementById("cambiar_conf");
let eliminar = document.getElementById("eliminar");
let boton_conf = document.getElementById("cambiar");


formularios.forEach((form) => {
    form.addEventListener("click", (evento) => {
        if (evento.target.type !== 'checkbox') {
            evento.preventDefault();
        }
    });
});

let obj = {};

boton_mostrar_login.addEventListener("click", () => {
    seccion_registro.classList.toggle("oculto");
    seccion_login.classList.toggle("oculto");
});

boton_mostrar_registro.addEventListener("click", () => {
    seccion_registro.classList.toggle("oculto");
    seccion_login.classList.toggle("oculto");
});

color.addEventListener("change", () => {
    let opcion = color.value;
    switch (opcion) {
        case "rojo":
            document.body.style.color = "red";
            break;
        case "azul":
            document.body.style.color = "blue";
            break;
        case "verde":
            document.body.style.color = "green";
            break;
        case "naranja":
            document.body.style.color = "orange";
            break;
    }
});

boton_registro.addEventListener("click", () => {
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let sexo = document.getElementById("sexo");
    let color = document.getElementById("color");
    let idioma = document.getElementById("idioma");
    let array = [nombre.id, nombre.value, edad.id, edad.value, sexo.id, sexo.value, color.id, color.value, idioma.id, idioma.value];
    
    rellenar_objeto(array, obj);
    localStorage.setItem(`sesion_${nombre.value}`, JSON.stringify(obj));
    alert("Cuenta creada");
    seccion_registro.classList.toggle("oculto");
    seccion_login.classList.toggle("oculto");

});

function rellenar_objeto(elementos, objeto) {
    for (let i = 0; i < elementos.length; i += 2) {
        objeto[elementos[i]] = elementos[i + 1];
    }
}

boton_login.addEventListener("click", () => {
    let nombre = document.getElementById("nombre2").value;
    let recordarSesion = document.getElementById("recordar_sesion").checked;
    let informacion_objeto;
    if (localStorage.getItem(`sesion_${nombre}`)) {
        alert('Sesion iniciada con exito');

        seccion_inicio.classList.toggle("oculto");
        seccion_login.classList.toggle("oculto");


        informacion_objeto = JSON.parse(localStorage.getItem(`sesion_${nombre}`));
        personalizarExperienciaUsuario(informacion_objeto);

    } else {
        alert('Revise usuario');
    }

    console.log(recordarSesion)

    if (recordarSesion) {
        let sesion = {
            nombre: informacion_objeto.nombre,
            edad: informacion_objeto.edad,
            sexo: informacion_objeto.sexo,
            color: informacion_objeto.color,
            idioma: informacion_objeto.idioma
        };
        localStorage.setItem("informacionSesion", JSON.stringify(sesion));
    }
});

window.onload = () =>{
    if (localStorage.getItem("informacionSesion")) {
        let sesionGuardada = JSON.parse(localStorage.getItem("informacionSesion"));
        seccion_inicio.classList.toggle("oculto");
        seccion_login.classList.toggle("oculto");
        personalizarExperienciaUsuario(sesionGuardada);
    }
};

function personalizarExperienciaUsuario(informacion_objeto) {
    let idioma = informacion_objeto.idioma;

    switch (idioma) {
        case "ingles":
            h1.textContent = `Welcome ${informacion_objeto.nombre}`;
            break;
        case "español":
            h1.textContent = `Bienvenido ${informacion_objeto.nombre}`;
            break;
        case "aleman":
            h1.textContent = `Willkommen ${informacion_objeto.nombre}`;
            break;
        default:
            break;
    }

    switch (informacion_objeto.color) {
        case "rojo":
            h1.style.color = "red";
            break;
        case "azul":
            h1.style.color = "blue";
            break;
        case "naranja":
            h1.style.color = "orange";
            break;
        default:
            h1.style.color = "green";
            break;
    }
}

cerrar_sesion.addEventListener('click', ()=>{
    seccion_inicio.classList.toggle("oculto");
    seccion_login.classList.toggle("oculto");
});

acceder_eliminar.addEventListener('click', ()=>{
    seccion_eliminar.classList.toggle("oculto");
    seccion_inicio.classList.toggle("oculto");
});

acceder_conf.addEventListener('click', ()=>{
    seccion_conf.classList.toggle("oculto");
    seccion_inicio.classList.toggle("oculto");
});

eliminar.addEventListener('click', ()=>{
    let nombre = document.getElementById("nombre3").value;
    if (localStorage.getItem(`sesion_${nombre}`)) {
        localStorage.removeItem(`sesion_${nombre}`);
        alert("Cuenta eliminada con exito");
        seccion_eliminar.classList.toggle("oculto");
        seccion_login.classList.toggle("oculto");
    }else{
        alert("el usuario no existe");
    }
});

boton_conf.addEventListener("click", () => {
    let nombre = document.getElementById("Nombre");
    let edad = document.getElementById("Edad");
    let sexo = document.getElementById("Sexo");
    let color = document.getElementById("Color");
    let idioma = document.getElementById("Idioma");
    let array = [nombre.id.toLowerCase(), nombre.value, edad.id.toLowerCase(), edad.value, sexo.id.toLowerCase(), sexo.value, color.id.toLowerCase(), color.value, idioma.id.toLowerCase(), idioma.value];
   
    if (localStorage.getItem(`sesion_${nombre.value}`)) {
        rellenar_objeto(array, obj);
        localStorage.setItem(`sesion_${nombre.value}`, JSON.stringify(obj));
        alert("Configuracion cambiada con exito");
        seccion_conf.classList.toggle("oculto");
        seccion_inicio.classList.toggle("oculto");
    }else{
        alert("El nombre de usuario no existe, reviselo");
    }
});
