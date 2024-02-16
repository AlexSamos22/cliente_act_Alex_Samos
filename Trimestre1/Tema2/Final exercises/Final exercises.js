//EJER1
let numero = parseInt(prompt("Introduce un numero: "));
console.log("-----Menu--------")
console.log("Opcion 1 pintar un diamante");
console.log("Opcion 2 pintar un cuadrado");
console.log("Opcion 3 pintar una piramide");
let opcion = parseInt(prompt("Elige una opcion: "));

switch (opcion) {
  case 1:
    let diamante = '';
  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= numero - i; j++) {
      diamante += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamante += '*';
    }
    diamante += '\n';
  }
  for (let i = numero - 1; i >= 1; i--) {
    for (let j = 1; j <= numero - i; j++) {
      diamante += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamante += '*';
    }
    diamante += '\n';
  }
  console.log(diamante);
    break;
  case 2:
    let cuadrado = "";
    for (let  i = 1 ; i <= numero; i++) {
      for (let j = 1; j <= numero; j++) {
        cuadrado += "*";
      }
      cuadrado += "\n";
    }
    console.log(cuadrado);
    break;
  case 3:
    let triangulo = '';
    for (let i = 1; i <= numero; i++) {
      for (let j = 1; j <=  numero - i; j++) {
        triangulo += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        triangulo += '*';
      }
      triangulo += '\n';
    }


    console.log(triangulo);
    break;
  default:
    console.log("Opcion no valida");
    break;
}

//EJER2
let numero = parseInt(prompt("Introduce un numero: "));
 
console.log("-----Menu--------")
console.log("Opcion 1 pintar un diamante");
console.log("Opcion 2 pintar un cuadrado");
console.log("Opcion 3 pintar una piramide");
let opcion = parseInt(prompt("Elige una opcion: "));


switch (opcion) {
case 1:
  let diamante = '';


  for (let i = 0; i <= numero; i++) {
    for (let j = numero - i; j > 0; j--) {
      diamante += ' ';
    }
    diamante += '*';
    if (i > 0) {
      for (let k = 1; k <= 2 * i - 1; k++) {
        diamante += ' ';
      }
      diamante += '*';
    }
    diamante += '\n';
  }
  for (let i = numero - 1; i >= 0; i--) {
    for (let j = numero - i; j > 0; j--) {
      diamante += ' ';
    }
    diamante += '*';
    if (i > 0) {
      for (let k = 1; k <= 2 * i - 1; k++) {
        diamante += ' ';
      }
      diamante += '*';
    }
    diamante += '\n';
  }
console.log(diamante);
  break;
  case 2:
    let cuadrado = "";
    for (let  i = 1 ; i <= numero; i++) {
      for (let j = 1; j <= numero; j++) {
      if (i == 1 || i == numero || j == 1 || j == numero) {
        cuadrado += "*";
      }else{
        cuadrado+= " ";
      }  
      }
      cuadrado += "\n";
    }
    console.log(cuadrado);
    break;
  case 3:
    let triangulo = '';
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= numero - i; j++) {
          triangulo += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
          if (i === 1 || i === numero || k === 1 || k === 2 * i - 1) {
            triangulo += '*';
          } else {
            triangulo += ' ';
          }
        }
        triangulo += '\n';
      }
    console.log(triangulo);
    break;
  default:
    console.log("Opcion no valida");
    break;
}

//EJER 3
//Tradicional
let num = parseInt(prompt("Introduce un numero: "));
let factorial = 1;
for (let i = 1; i <= num; i++) {
   factorial *= i;
}
console.log("El factorial del numero " + num + " es: " + factorial);
//Recursivo
let num = parseInt(prompt("Introduce un numero: "));
function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    //Se le resta - 1 para poder ir desde el numero hasta el 1
    return num * factorial(num - 1);
  }
}
console.log("El factorial del numero " + num + " es: " + factorial(num));

//EJER 4
let num = parseInt(prompt("Introduce todos los numeros posibles: "));
let eleccion = parseInt(prompt("Introduce el numero que has elegido: "));

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    //Se le resta - 1 para poder ir desde el numero hasta el 1
    return num * factorial(num - 1);
  }
}

function porcentajeGanarLoteria() {
  return factorial(num) / (factorial(eleccion) * factorial((num - eleccion)));
}

let porcentaje = Math.round(porcentajeGanarLoteria());
console.log("Las posibilidades de ganar con el numero " + eleccion + " es de: " + porcentaje + " posibilidades");

//EJER 5
let num = parseInt(prompt("Introduce un numero: "));

function sumaTotal(num) {
  if (num === 0) {
    return 0;
  }else if( num === 1){
    return 1;
  }else{
    //Se le resta - 1 para poder ir desde el numero hasta el 1
    return num + sumaTotal(num - 1);
  }
}
console.log(sumaTotal(num));

//EJER 6
let num = parseInt(prompt("Introduce un numero: "));

function numeroDigitos(num) {
   if (num < 10) {
    return 1;
   }else{
    let nuevoNumero = Math.floor(num / 10);
    let contadorCifras = numeroDigitos(nuevoNumero);
    return 1 + contadorCifras;
   }
}
console.log(numeroDigitos(795));

//EJER 7
let num = prompt("Introduce un numero: ");

function numeroInverso(num) {
  let inverso = "";
  for (let i = num.length - 1; i >= 0; i--) {
    inverso += num[i];
  }
  return inverso;
}

let inverso = numeroInverso(num);
console.log("El numero " + num + " invertido es: " + inverso);