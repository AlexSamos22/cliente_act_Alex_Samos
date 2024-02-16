let boton = document.getElementById("abrir");
let nueva_ventana;
boton.addEventListener("click", () =>{
    //Open a new window with a random URL. Change its URL once opened
    let url = "http://127.0.0.7:5500/trimestre2/Task%203.1-Samos_Mu%C3%B1os_Alejandro.html";
    nueva_ventana = window.open(url, nueva_ventana, "_blank", "width=600", "height=500");
    nueva_ventana.location.href="https://github.com/AlexSamos22?tab=repositories";
    //Reload this URL using cache content
    nueva_ventana.location.reload();
    //Print information about the URL: protocol, hostname, host and port
    let mensaje = `Protocolo: ${nueva_ventana.location.protocol}, hostname: ${nueva_ventana.location.hostname}, host: ${nueva_ventana.location.host}, puerto: ${nueva_ventana.location.port}`;
    console.log(mensaje);
})

