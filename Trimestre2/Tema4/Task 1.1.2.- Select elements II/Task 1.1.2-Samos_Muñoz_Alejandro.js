//La tabla con el id id="age-table"
let tabla = document.getElementById("age-table");
console.log(tabla);

//Todos los elementos label dentro de la tabla
console.log(document.getElementById("age-table").getElementsByTagName("label"));

//El primer td de la tabla con la palabra age
console.log(document.querySelectorAll("td")[1]);


//El formulario con el nombre search-person
console.log(document.querySelector("form[name=search-person]"));

//El primer input del formulario
console.log(document.querySelector("form[name=search-person]").querySelector("input"));

//El ultimo input del formulario.
let inputs = document.querySelector("form[name=search-person]").getElementsByTagName("input");
console.log(inputs[inputs.length-1]);



