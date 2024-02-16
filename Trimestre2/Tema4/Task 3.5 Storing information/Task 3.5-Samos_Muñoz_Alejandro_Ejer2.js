/*
    Create a form that saves user's inputs and get them back if the browser is closed
*/
function cargarDatos(){
    let datosGuardados = JSON.parse(localStorage.getItem('datosUsuario'));
    if (datosGuardados){
        document.getElementById('nombre').value = datosGuardados.nombre;
        document.getElementById('edad').value = datosGuardados.edad;
        document.getElementById('email').value = datosGuardados.email;
    }
}

cargarDatos();

document.getElementById('formularioUsuarios').addEventListener('submit', (event) => {
    event.preventDefault();

    let datosFormulario = {
        nombre: document.getElementById('nombre').value,
        edad: document.getElementById('edad').value,
        email: document.getElementById('email').value
    };

    localStorage.setItem('datosUsuario', JSON.stringify(datosFormulario));

    alert('Datos del formulario guardados');
});
