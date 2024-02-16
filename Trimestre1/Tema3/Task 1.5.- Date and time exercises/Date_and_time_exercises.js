//EJER1
let birthday = new Date("2001-06-12T04:45:00");
console.log(birthday);
//EJER2
function  getWeeklyDay(year, month, day) {
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let fecha = new Date(year, month, day);
    return diasSemana[fecha.getDay()];
}

console.log(getWeeklyDay(2023,11,3));

//EJER3
function  getMyBornDay(diaNacimiento) {
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let fecha = diaNacimiento;
    return diasSemana[fecha.getDay()];
}
let birthday = new Date("2001-06-12T04:45:00");
console.log(getMyBornDay(birthday));

//EJER4
function getLastDayOfMonth(year, month)  {
    let fecha = new Date(year, month - 1, 1);
    fecha.setDate(fecha.getDate() - 1) //se le resta 1 para obtener el ultimo dia del mes
    return fecha.getDate();
}

console.log(getLastDayOfMonth(2023, 11));

//EJER5
function  getSecondsFromNewYear(){
    let fecha = new Date();
    let newYear = new Date(2024, 0, 1);
    return (newYear - fecha) / 1000; //Se divide entre 1000 para sacar los segundos de la resta
}

console.log(getSecondsFromNewYear());

//EJER6
function  getSecondsToNewYear(){
    let fecha = new Date();
    let anioActual = fecha.getFullYear();
    let finalAnio = new Date(anioActual, 11, 31, 23, 59, 59);//saco la fecha del ultimo dia del año y el ultimo segundo del año

    return (finalAnio - fecha) / 1000; //Se divide entre 1000 para sacar los segundos de la resta
}

console.log(getSecondsToNewYear());