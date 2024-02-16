//ejer1
let user = {};
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
let obj = {}
function isEmpty(obj) {
  let longitud = 0;


  for (let elemento in obj) {
    longitud ++;
  }
  return (longitud == 0)? true : false;
}


console.log(isEmpty(obj));

//ejer2
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
  
  
let sumaSalarios = 0;
let valores = Object.values(salaries);
for (let elemento of valores){
        sumaSalarios += parseInt(elemento);
}  
salaries.suma = sumaSalarios;
console.log(salaries);

//ejer3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
  
  
function multiplyNumeric(obj) {
let aux = Object.fromEntries(
    Object.entries(obj).map(elemento => [elemento[0], elemento[1]*2])
)
return aux;
}

let nuevosSalatios = multiplyNumeric(salaries);
console.log(nuevosSalatios);

//ejer5
let calculator = {
    a: 0,
    b: 0,
    read: function(){
        this.a = parseInt(prompt('Inserte el primer numero: '));
        this.b = parseInt(prompt('Inserte el segundo numero: '));
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//ejer6
let frutas={
    "manzanas golden": 25,
     "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
}

function kilosTotales(obj) {
    let sumaTotal = 0;

    let valoresFrutas = Object.values(obj);
    if (valoresFrutas.length == 0) {
      return console.log("El objeto esta vacio");
    }else{
      for (let elemento of valoresFrutas) {
        sumaTotal += elemento;
      }
       return console.log(sumaTotal);
    }
}
kilosTotales(frutas);

function kilosTotales(obj) {
    let sumaTotal = 0;
  
  
      for (let [clave, valor] of Object.entries(obj)) {
        sumaTotal += valor;
      }
      if (sumaTotal == 0) {
        return console.log("El objeto esta vacio");
      }else{
        return console.log(sumaTotal);
      }
}
  
kilosTotales(frutas);

//ejer7
function kilosTotales(obj) {
  let frutasKilos = {
    manzanas: 0,
    peras: 0
  };
  
  
  for (let key in obj) {
    if (key.startsWith("manzana")) {
      frutasKilos.manzanas += obj[key];
    }else if(key.startsWith("pera")){
      frutasKilos.peras += obj[key];
    }
  }
  
    if (Object.keys(obj).length == 0) {
      return console.log("El objeto esta vacio");
    }else{
      return frutasKilos;
    }
  }
  
  let frutas={
  "manzanas golden": 25,
  "manzanas fuji": 20,
  "pera conferencia": 17,
  "pera ercolina": 12,
  }
  
  let obj = kilosTotales(frutas);
  
  console.log(obj);
  
//ejer8
let ladder = {
  step: 0,
  up() {
  this.step++;
  return this;
  },
  down() {
  this.step--;
  return this; // el this hace referencia al bloque de contenido al que pertenece, por ende al estar dentro del objeto, hace referencia al objeto
  },
  showStep: function() { // shows the current step
  alert( this.step );
  return this;
  }
};
ladder.up().up().down().showStep().down().showStep();

//ejer9
let frutas={
  nombre: "manzana",
  kilos: 200,
  sell(){
    let compra = parseInt(prompt("Cuantos kilos quieres: ")) || 0;


    if (compra > this.kilos) {
      console.log("No hay suficientes kilos");
    }else{
      console.log("Venta efectuada");
      this.kilos= this.kilos - compra;
    }
  },
  buy(){
    let compra = parseInt(prompt("Cuantos kilos se han comprado: ")) || 0;


    if (compra == 0) {
      console.log("No se ha comprado nada");
    }else{
      console.log("Compra efectuada");
      this.kilos = this.kilos + compra;
    }
  },
  outOfStockDate(){
    return true;
  },
  buyingDate(){
    return true;
  }
 }


 console.log(frutas.kilos);
 frutas.sell();
 console.log(frutas.kilos);
 frutas.buy();
 console.log(frutas.kilos);
 frutas.buyingDate();
 frutas.outOfStockDate();

//ejer10
let partesCoche = {
  parte1: {
    nombre: "Motor",
    cantidad: 100
  },
  parte2: {
    nombre: "Filtro de aceite",
    cantidad: 150
  },
  parte3: {
    nombre: "Amortiguador",
    cantidad: 200
  },
  parte4: {
    nombre: "Filtro de aire",
    cantidad: 120
  },
  sumaPartes(){
    return this.parte1.cantidad + this.parte2.cantidad + this.parte3.cantidad + this.parte4.cantidad;
  }
};
console.log(partesCoche.sumaPartes());

//ejer11
function crearUsuario(nombre, direccion, altura, anchura) {
  let aux = {
    user:{
      nombre: nombre,
      direccion: direccion,
      dimensiones:{
        altura: altura,
        anchura: anchura
      }
    }
  }
  return aux;
}


let usuario1 = crearUsuario("usuario1", "Calle Merlo", 170, 90)
let usuario2 = structuredClone(usuario1);
console.log(usuario1);

//ejer12
function crearUsuario(nombre, direccion, altura, anchura) {
  let aux = {
    user:{
      nombre: nombre,
      direccion: direccion,
      dimensiones:{
        altura: altura,
        anchura: anchura
      },
    },
      infoUsuario(){
        return this.user;
      },
      devolverAmigos(){
        return this.user?.amigos;
      },
      devolverPareja(){
        return this.user?.pareja;
      }
  }
  return aux;
}


let usuario1 = crearUsuario("usuario1", "Calle Merlo", 170, 90)
console.log(usuario1.infoUsuario());
console.log(usuario1.devolverAmigos());
console.log(usuario1.devolverPareja());