//EJER1
class Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        this.manufactura = manufactura;
        this.modelo = modelo;
        this.year = year;
        this.tipoIngenieria = tipoIngenieria;
        this.poder = poder;
        this.cm3 = cm3;
        this.velocidadMax = velocidadMax;
        this.licenciaConducir = licenciaConducir;
        this.motor = false;
        this.velocidad = 0;
        this.combustible = 0;
    }

    encenderMotor(){
        if (this.motor) {
            return console.log("El motor ya esta encendido");
        }
        this.motor = true;
        return console.log("El motor esta encendido");
    }

    apagarMotor(){
        if (!this.motor) {
            return console.log("El motor ya esta apagado");
        }
        this.motor = false;
        return console.log("El motor esta apagado");
    }

    rellenarDeposito(litros){
        if (litros <= 0) {
            return console.log("No se puede rellenar el deposito con: " + litros + " litros");
        }
        this.combustible += litros;
        return console.log("El nuevo combustible del vehiculo es: " + this.combustible + " litros");
    }

    aumentarVelocidad(nuevaVelocidad){
        if (nuevaVelocidad <= 0) {
            return console.log("No se puede aumentar la velocidad");
        }else if (nuevaVelocidad > this.velocidadMax) {
            return console.log("La velocidad nueva excede la velocidad maxima del vehiculo");
        }
        this.velocidad = nuevaVelocidad;
        return console.log("La nueva velocidad del vehiculo es: " + this.velocidad + " Km/h");
    }

    disminuirVelocidad(nuevaVelocidad){
        if (nuevaVelocidad < 0) {
            return console.log("No se puede disminuir esa velocidad");
        }else if (nuevaVelocidad > this.velocidad) {
            return console.log("No se puede disminuir esa velocidad");
        }
        this.velocidad -= nuevaVelocidad;
        return console.log("La nueva velocidad del vehiculo es: " + this.velocidad + " Km/h");
    }

    static comparaVelocidad(vehiculo1, vehiculo2){
        if(vehiculo1.velocidadMax > vehiculo2.velocidadMax){
          return vehiculo1.tipoVehiculo + " tiene mas velocidad maxima que " + vehiculo2.tipoVehiculo; 
        }else{
          return vehiculo2.tipoVehiculo + " tiene mas velocidad maxima que " + vehiculo1.tipoVehiculo; 
        }
    }

    static comparaPoder(vehiculo1, vehiculo2){
        if(vehiculo1.velocidadMax > vehiculo2.velocidadMax){
          return vehiculo1.tipoVehiculo + " tiene mas poder que " + vehiculo2.tipoVehiculo; 
        }else{
          return vehiculo2.tipoVehiculo + " tiene mas poder que " + vehiculo1.tipoVehiculo; 
        }
    }

    #numeroRudas(vehiculo){
        if (vehiculo.tipoVehiculo == "moto") {
            return "Tiene 2 ruedas";
        }else{
            return "Tiene 4 ruedas;"
        }
    }

    getRuedas(vehiculo){
        return this.#numeroRudas(vehiculo);
    }
}

class Camion extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "camion";
    }

    claseVehiculo(){
        return console.log("El vehiculo es un: " + this.tipoVehiculo);
    }
}

class Coche extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "coche";
    }

    claseVehiculo(){
        return console.log("El vehiculo es un: " + this.tipoVehiculo);
    }
}

class Moto extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "moto";
    }

    claseVehiculo(){
        return console.log("El vehiculo es una: " + this.tipoVehiculo);
    }
}

class Furgoneta extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "furgoneta";
    }

    claseVehiculo(){
        return console.log("El vehiculo es una: " + this.tipoVehiculo);
    }
}

class Caravana extends Vehiculo{
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        this.tipoVehiculo = "caravana";
    }

    claseVehiculo(){
        return console.log("El vehiculo es una: " + this.tipoVehiculo);
    }
}

let BMW = new Coche("maquinas", "X3", 2003, "combustion", 187.9, 4.7, 200, "B");
let YAMAHA = new Moto("maquinas", "MT", 2006, "combustion", 160, 2.3, 180, "B");


console.log(Vehiculo.comparaVelocidad(BMW, YAMAHA));
console.log(Vehiculo.comparaPoder(BMW, YAMAHA));
console.log(getRuedas(BMW));

//EJER2
class Animal {
    constructor(grupo, nombre, edad, formaDeMoverse, habitat, peso) {
        this.grupo = grupo;
        this.nombre = nombre;
        this.edad = edad;
        this.formaDeMoverse = formaDeMoverse;
        this.habitat = habitat;
        this.peso = peso;
    }

    dormir() {
        console.log(`${this.nombre} está durmiendo.`);
    }

    despertar() {
        console.log(`${this.nombre} está despierto.`);
    }

    moverse() {
        console.log(`${this.nombre} se mueve ${this.formaDeMoverse}.`);
    }

    detenerse() {
        console.log(`${this.nombre} se detuvo.`);
    }

    static compararPeso(animal1, animal2){
        if(animal1.peso > animal2.peso){
            return animal1.nombre + " pesa mas que " + animal2.peso; 
          }else{
            return animal2.peso + " pesa mas que " + animal1.peso; 
          }
    }

    #setPeso(peso){
        this.peso = peso;
    }

    }
  
class Mamifero extends Animal {
    constructor(nombre, edad, formaDeMoverse, habitat, peso, numeroDePatas, tieneCola) {
        super('mamífero', nombre, edad, formaDeMoverse, habitat, peso);
        this.numeroDePatas = numeroDePatas;
        this.tieneCola = tieneCola;
}
}

class Reptil extends Animal {
    constructor(nombre, edad, formaDeMoverse, habitat, peso, numeroDePatas, tieneCola) {
        super('reptil', nombre, edad, formaDeMoverse, habitat, peso);
        this.numeroDePatas = numeroDePatas;
        this.tieneCola = tieneCola;
    }
}

class Pez extends Animal {
    constructor(nombre, edad, formaDeMoverse, hábitat, peso, numeroDeAletas, tieneCola) {
        super('pez', nombre, edad, formaDeMoverse, hábitat, peso);
        this.numeroDeAletas = numeroDeAletas;
        this.tieneCola = tieneCola;
    }
}


let miMixin = (claseBase) => class extends claseBase{
    constructor(nombre, edad, formaDeMoverse, habitat, peso, numeroDePatas, tieneCola, numeroDeAletas) {
        super('mamífero', nombre, edad, formaDeMoverse, habitat, peso);
        this.numeroDePatas = numeroDePatas;
        this.tieneCola = tieneCola;
        this.numeroDeAletas = numeroDeAletas;
}
}


class Mamipez extends miMixin((Mamifero)){}

let tiburon = new Pez("tiburon", 50, "nadando", "oceano", 3, "si");
let gato = new Mamifero("gato",3,"andando","casa",4,"si");
let serpiente = new Reptil("serpiente",7,"arrastrarse","campo",0,"si");

tiburon.moverse(); 
gato.dormir(); 
serpiente.despertar(); 


