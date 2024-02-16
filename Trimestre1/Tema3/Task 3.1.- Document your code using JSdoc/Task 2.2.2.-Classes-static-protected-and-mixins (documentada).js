//EJER1
//EJER1

/**
 *Clase generica que crea un vehiculo
 * @class Vehiculo
 */
 class Vehiculo{
    /**
     * Creates an instance of Vehiculo.
     * @param {string} manufactura, tipo de manufactura del vehiculo
     * @param {string} modelo, modelo del vehiculo
     * @param {int} year, año de fabricacion del vehiculo
     * @param {string} tipoIngenieria, engenieria del vehiculo
     * @param {int} poder, poder del vehiculo
     * @param {int} cm3, cm3 del vehiculo
     * @param {int} velocidadMax, velicidad maxima que puede alcanzar el vehiculo
     * @param {string} licenciaConducir, tipo de licencia del conductor del vehiculo 
     * @memberof Vehiculo
    */
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        this.manufactura = manufactura;
        this.modelo = modelo;
        this.year = year;
        this.tipoIngenieria = tipoIngenieria;
        this.poder = poder;
        this.cm3 = cm3;
        this.velocidadMax = velocidadMax;
        this.licenciaConducir = licenciaConducir;
        /**
         * Indica si el motor esta encendido o apagado, por defecto estara en false
         * @type {boolean}
         */
        this.motor = false;
        /**
         * Indica la velocidad actual de vehiculo, por defecto es cero
         * @type {int}
         */
        this.velocidad = 0;
        /**
         * Indica el combustible que tiene el vehiculo, por defecto es 0
         * @type {int}
         */
        this.combustible = 0;
    }

    /**
     * Funcion que encendera el motor
     *
     * @return {string} si el motor estaba encendido dara un mensaje de error y si no lo estaba dira que esta encendido
     * @memberof Vehiculo
     */
    encenderMotor(){
        if (this.motor) {
            return console.log("El motor ya esta encendido");
        }
        this.motor = true;
        return console.log("El motor esta encendido");
    }

    /**
     * Funcion que apagara el motor
     *
     * @return {string} si el motor estaba apagado dara un mensaje de error y si estaba encendido dira que esta apagado
     * @memberof Vehiculo
     */
    apagarMotor(){
        if (!this.motor) {
            return console.log("El motor ya esta apagado");
        }
        this.motor = false;
        return console.log("El motor esta apagado");
    }

    /**
     *Funcion que rellenera el deposito de un vehiculo
     *
     * @param {int} litros numero de litros con los que se llenara el deposito por defecto sera 0
     * @return {string} Dira cuanto combustible tiene el vehiculo ahora
     * @memberof Vehiculo
     */
    rellenarDeposito(litros = 0){
        this.combustible += litros;
        return console.log("El nuevo combustible del vehiculo es: " + this.combustible + " litros");
    }

    /**
     * Funcion que aumentara la velocidad al vehiculo
     *
     * @param {int} nuevaVelocidad velocidad nueva a la que va a ir el vehiculo, por defecto es 0
     * @return {string} Si la velocidad es mayor a la velocidad maxima dara un mensaje de error, si la velocidad es correcta indicara la nueva velocidad
     * @memberof Vehiculo
     */
    aumentarVelocidad(nuevaVelocidad = 0){
        if (nuevaVelocidad > this.velocidadMax) {
            return console.log("La velocidad nueva excede la velocidad maxima del vehiculo");
        }
        this.velocidad = nuevaVelocidad;
        return console.log("La nueva velocidad del vehiculo es: " + this.velocidad + " Km/h");
    }

    /**
     * Funcion que disminuira la velocidad al vehiculo
     *
     * @param {int} nuevaVelocidad velocidad nueva a la que va a ir el vehiculo
     * @return {string} Si la velocidad es mayor a la actual dara un mensaje de error, si no mostrara la nueva velocidad del vehiculo
     * @memberof Vehiculo
     */
    disminuirVelocidad(nuevaVelocidad = 0){
        if (nuevaVelocidad > this.velocidad) {
            return console.log("No se puede disminuir esa velocidad");
        }
        this.velocidad -= nuevaVelocidad;
        return console.log("La nueva velocidad del vehiculo es: " + this.velocidad + " Km/h");
    }

    /**
     *
     *Funcion que compara que  vehiculo tiene mas velocidad 
     * @static
     * @param {object} vehiculo1 vehiculo1 al que se quiere comparar
     * @param {object} vehiculo2 vehiculo2 al que se quiere comparar
     * @return {string} devuelve un string indicando el nombre de los 2 vehiculos y quien tiene mas velocidad 
     * @memberof Vehiculo
     */
    static comparaVelocidad(vehiculo1, vehiculo2){
        if(vehiculo1.velocidadMax > vehiculo2.velocidadMax){
          return vehiculo1.tipoVehiculo + " tiene mas velocidad maxima que " + vehiculo2.tipoVehiculo; 
        }else{
          return vehiculo2.tipoVehiculo + " tiene mas velocidad maxima que " + vehiculo1.tipoVehiculo; 
        }
    }

    /**
     *Funcion que compara que vehiculo tiene mas poder 
     *
     * @static
     * @param {object} vehiculo1 vehiculo1 al que se quiere comparar
     * @param {object} vehiculo2 vehiculo2 al que se quiere comparar
     * @return {string} devuelve un string indicando el nombre de los 2 vehiculos y quien tiene mas poder
     * @memberof Vehiculo
     */
    static comparaPoder(vehiculo1, vehiculo2){
        if(vehiculo1.velocidadMax > vehiculo2.velocidadMax){
          return vehiculo1.tipoVehiculo + " tiene mas poder que " + vehiculo2.tipoVehiculo; 
        }else{
          return vehiculo2.tipoVehiculo + " tiene mas poder que " + vehiculo1.tipoVehiculo; 
        }
    }


    /**
     *Funcion que indica cuantas ruedas tiene un vehiculo
     * @private
     * @param {object} vehiculo el vehiculo que se quiere comparar
     * @return {string} devuelve el numero de ruedas que tiene 
     * @memberof Vehiculo
     */
    #numeroRudas(vehiculo){
        if (vehiculo.tipoVehiculo == "moto") {
            return "Tiene 2 ruedas";
        }else{
            return "Tiene 4 ruedas;"
        }
    }

    /**
     *Funcion que indica las ruedas que tiene un vehiculo
     *
     * @param {object} vehiculo vehiculo que se quiere comparar
     * @return {string} devolvera un string indicando las ruedad, se hace llamando a la funcion numeroRuedas() 
     * @memberof Vehiculo
     */
    getRuedas(vehiculo){
        return this.#numeroRudas(vehiculo);
    }
}

/**
 *
 * Clase que creara el vehiculo camion
 * @class Camion
 * @extends {Vehiculo}
 */
class Camion extends Vehiculo{
    /**
     * Creates an instance of Camion.
     * @param {string} manufactura, tipo de manufactura del vehiculo
     * @param {string} modelo, modelo del vehiculo
     * @param {int} year, año de fabricacion del vehiculo
     * @param {string} tipoIngenieria, engenieria del vehiculo
     * @param {int} poder, poder del vehiculo
     * @param {int} cm3, cm3 del vehiculo
     * @param {int} velocidadMax, velicidad maxima que puede alcanzar el vehiculo
     * @param {string} licenciaConducir, tipo de licencia del conductor del vehiculo
     * @memberof Camion
     */
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        /**
         * Indica el tipo de vehiculo que es
         * @type {string}
         */
        this.tipoVehiculo = "camion";
    }

    /**
     *
     * Funcion que dira el tipo de vehiculo
     * @return {string} devolvera el tipo de vehiculo que es
     * @memberof Camion
     */
    claseVehiculo(){
        return console.log("El vehiculo es un: " + this.tipoVehiculo);
    }
}

/**
 * Clase que creara el vehiculo coche
 * @class Coche
 * @extends {Vehiculo}
 */
class Coche extends Vehiculo{
    /**
     * Creates an instance of Coche.
     * @param {string} manufactura, tipo de manufactura del vehiculo
     * @param {string} modelo, modelo del vehiculo
     * @param {int} year, año de fabricacion del vehiculo
     * @param {string} tipoIngenieria, engenieria del vehiculo
     * @param {int} poder, poder del vehiculo
     * @param {int} cm3, cm3 del vehiculo
     * @param {int} velocidadMax, velicidad maxima que puede alcanzar el vehiculo
     * @param {string} licenciaConducir, tipo de licencia del conductor del vehiculo
     * @memberof Coche
     */
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
       /**
         * Indica el tipo de vehiculo que es
         * @type {string}
         */
       this.tipoVehiculo = "coche";
    }

    /**
     * Funcion que dira el tipo de vehiculo
     * @return {string} devolvera el tipo de vehiculo que es
     * @memberof Coche
     */
    claseVehiculo(){
        return console.log("El vehiculo es un: " + this.tipoVehiculo);
    }
}


/**
 *
 * Clase que creara el vehiculo moto
 * @class Moto
 * @extends {Vehiculo}
 */
class Moto extends Vehiculo{
    /**
     * Creates an instance of Moto.
     * @param {string} manufactura, tipo de manufactura del vehiculo
     * @param {string} modelo, modelo del vehiculo
     * @param {int} year, año de fabricacion del vehiculo
     * @param {string} tipoIngenieria, engenieria del vehiculo
     * @param {int} poder, poder del vehiculo
     * @param {int} cm3, cm3 del vehiculo
     * @param {int} velocidadMax, velicidad maxima que puede alcanzar el vehiculo
     * @param {string} licenciaConducir, tipo de licencia del conductor del vehiculo
     * @memberof Moto
     */
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        /**
         * Indica el tipo de vehiculo que es
         * @type {string}
         */
        this.tipoVehiculo = "moto";
    }

    /**
     * Funcion que dira el tipo de vehiculo
     * @return {string} devolvera el tipo de vehiculo que es
     * @memberof Moto
     */
    claseVehiculo(){
        return console.log("El vehiculo es una: " + this.tipoVehiculo);
    }
}

/**
 * Clase que creara el vehiculo furgoneta
 * @class Furgoneta
 * @extends {Vehiculo}
 */
class Furgoneta extends Vehiculo{
    /**
     * Creates an instance of Furgoneta.
     * @param {string} manufactura, tipo de manufactura del vehiculo
     * @param {string} modelo, modelo del vehiculo
     * @param {int} year, año de fabricacion del vehiculo
     * @param {string} tipoIngenieria, engenieria del vehiculo
     * @param {int} poder, poder del vehiculo
     * @param {int} cm3, cm3 del vehiculo
     * @param {int} velocidadMax, velicidad maxima que puede alcanzar el vehiculo
     * @param {string} licenciaConducir, tipo de licencia del conductor del vehiculo 
     * @memberof Furgoneta
     */
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        /**
         * Indica el tipo de vehiculo que es
         * @type {string}
         */
        this.tipoVehiculo = "furgoneta";
    }

    /**
     * Funcion que dira el tipo de vehiculo
     * @return {string} devolvera el tipo de vehiculo que es
     * @memberof Furgoneta
     */
    claseVehiculo(){
        return console.log("El vehiculo es una: " + this.tipoVehiculo);
    }
}

/**
 * Clase que creara el vehiculo caravana
 * @class Caravana
 * @extends {Vehiculo}
 */
class Caravana extends Vehiculo{
    /**
     * Creates an instance of Caravana.
     * @param {string} manufactura, tipo de manufactura del vehiculo
     * @param {string} modelo, modelo del vehiculo
     * @param {int} year, año de fabricacion del vehiculo
     * @param {string} tipoIngenieria, engenieria del vehiculo
     * @param {int} poder, poder del vehiculo
     * @param {int} cm3, cm3 del vehiculo
     * @param {int} velocidadMax, velicidad maxima que puede alcanzar el vehiculo
     * @param {string} licenciaConducir, tipo de licencia del conductor del vehiculo 
     * @memberof Caravana
     */
    constructor(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir){
        super(manufactura, modelo, year, tipoIngenieria, poder, cm3, velocidadMax, licenciaConducir);
        /**
         * Indica el tipo de vehiculo que es
         * @type {string}
         */
        this.tipoVehiculo = "caravana";
    }

    /**
     * * Funcion que dira el tipo de vehiculo
     * @return {string} devolvera el tipo de vehiculo que es
     * @memberof Caravana
     */
    claseVehiculo(){
        return console.log("El vehiculo es una: " + this.tipoVehiculo);
    }
}

let BMW = new Coche("maquinas", "X3", 2003, "combustion", 187.9, 4.7, 200, "B");

BMW.claseVehiculo();
BMW.encenderMotor();
BMW.rellenarDeposito(60);
BMW.aumentarVelocidad(80);
BMW.disminuirVelocidad(30);
BMW.apagarMotor();


//EJER2

/**
 *
 *
 * @class Animal
 */
class Animal {
    /**
     * Creates an instance of Animal.
     * @param {string} grupo, grupo al que pertenece el animal
     * @param {string} nombre, nombre del animal
     * @param {int} edad, edad que tiene
     * @param {string} formaDeMoverse, forma en la que se mueve
     * @param {string} habitat, habitat donde vive
     * @memberof Animal
     */
    constructor(grupo, nombre, edad, formaDeMoverse, habitat) {
        this.grupo = grupo;
        this.nombre = nombre;
        this.edad = edad;
        this.formaDeMoverse = formaDeMoverse;
        this.habitat = habitat;
        /**
         * Indica si el animal esta dormido o no, por defecto estara en false
         * @type {boolean}
         */
        this.dormir = false;
        /**
         * Indica si el animal esta despierto o no, por defecto estara en false
         * @type {boolean}
         */
        this.despertar = false;
        /**
         * Indica si el animal se esta moviendo o no, por defecto estara en false
         * @type {boolean}
         */
        this.moverse = false;
        /**
         * Indica si el animal esta quieto o no, por defecto estara en false
         * @type {boolean}
         */
        this.detenerse = false;
    }

    /**
     * Funcion que hace que el animal duerma si no está dormido, mostrando un mensaje en la consola.
     * @return {string} devuelve si esta dormido o si se ha dormido
     * @memberof Animal
     */
    dormir() {
        if (this.dormir) {
            return console.log(`${this.nombre} ya está durmiendo.`);
        }
        this.dormir = true;
        return console.log(`${this.nombre} se ha dormido.`);
    }

    /**
     * Funcion que hace que el animal despierte si no está despierto, mostrando un mensaje en la consola.
     * @return {string} devuelve si esta despierto o si se ha despertado
     * @memberof Animal
     */
    despertar() {
        if (this.despertar) {
            return console.log(`${this.nombre} ya está despierto.`);
        }
        this.despertar = true;
        return console.log(`${this.nombre} se ha despertado.`);
    }

    /**
     * Funcion que hace que el animal se mueva si no se estaba moviendo, mostrando un mensaje en la consola.
     * @return {string} devuelve si el animal se estaba moviendo o si ha empezado a moverse
     * @memberof Animal
     */
    moverse() {
        if (this.moverse) {
            return  console.log(`${this.nombre} ya se está moviendo.`);
        }
        this.moverse = true;
        return console.log(`${this.nombre} ha empezado a moverse`);  
    }

    /**
     * Funcion que hace que el animal se detenga si no se estaba detenido, mostrando un mensaje en la consola.
     * @return {string} devuelve si el animal estaba detenido o si se ha detenido
     * @memberof Animal
     */
    detenerse() {
        if (this.detenerse) {
            return console.log(`${this.nombre} ya estaba quieto.`);
        }
        this.detenerse = true;
        return console.log(`${this.nombre} se detuvo.`);
    }
    
    /**
     *Funcion que compara el peso de 2 animales
     * @static
     * @param {object} animal1 uno de los animales que se quiere comparar
     * @param {object} animal2 el otro animal que se quiere comparar
     * @return {string} 
     * @memberof Animal
     */
    static compararPeso(animal1, animal2){
        if(animal1.peso > animal2.peso){
            return animal1.nombre + " pesa mas que " + animal2.peso; 
          }else{
            return animal2.peso + " pesa mas que " + animal1.peso; 
          }
    }

    /**
     *Funcion que permite darle un peso a un animal
     * @param {int} peso el peso que se le quiere añadir
     * @memberof Animal
     */
    #setPeso(peso){
        this.peso = peso;
    }
}
  
/**
 *
 * Representa un mamifero
 * @class Mamifero
 * @extends {Animal}
 */
class Mamifero extends Animal {
    /**
     * Creates an instance of Mamifero.
     * @param {string} nombre nombre del animal
     * @param {int} edad edad del animal
     * @param {string} formaDeMoverse forma en la que se mueve
     * @param {string} habitat habitat donde vive
     * @param {int} numeroDePatas numero de patas que tiene el animal
     * @param {string} tieneCola si el animal tiene cola o no 
     * @memberof Mamifero
     */
    constructor(nombre, edad, formaDeMoverse, habitat, numeroDePatas, tieneCola) {
        super('mamífero', nombre, edad, formaDeMoverse, habitat);
        this.numeroDePatas = numeroDePatas;
        this.tieneCola = tieneCola;
    }
    }
    
    /**
     * Representa un reptil
     * @class Reptil
     * @extends {Animal}
     */
    class Reptil extends Animal {
        /**
         * Creates an instance of Reptil.
         * @param {string} nombre nombre del animal
         * @param {int} edad edad del animal
         * @param {string} formaDeMoverse forma en la que se mueve
         * @param {string} habitat habitat donde vive
         * @param {int} numeroDePatas numero de patas que tiene el animal
         * @param {string} tieneCola si el animal tiene cola o no 
         * @memberof Reptil
         */
        constructor(nombre, edad, formaDeMoverse, habitat, numeroDePatas, tieneCola) {
            super('reptil', nombre, edad, formaDeMoverse, habitat);
            this.numeroDePatas = numeroDePatas;
            this.tieneCola = tieneCola;
        }
    }
    
    /**
     * Representa un pez
     * @class Pez
     * @extends {Animal}
     */
    class Pez extends Animal {
        /**
         * Creates an instance of Pez.
         * @param {string} nombre nombre del animal
         * @param {int} edad edad del animal
         * @param {string} formaDeMoverse forma en la que se mueve
         * @param {string} habitat habitat donde vive
         * @param {int} numeroDeAletas numero de aletas que tiene el animal
         * @param {string} tieneCola si el animal tiene cola o no 
         * @memberof Pez
         */
        constructor(nombre, edad, formaDeMoverse, hábitat, numeroDeAletas, tieneCola) {
            super('pez', nombre, edad, formaDeMoverse, hábitat);
            this.numeroDeAletas = numeroDeAletas;
            this.tieneCola = tieneCola;
        }
    }
    
    let tiburon = new Pez("tiburon", 50, "nadando", "oceano", 3, "si");
    let gato = new Mamifero("gato",3,"andando","casa",4,"si");
    let serpiente = new Reptil("serpiente",7,"arrastrarse","campo",0,"si");
    
    tiburon.moverse(); 
    gato.dormir(); 
    serpiente.despertar(); 
    


/**
 *
 *Se usa para que herede de la clase que se quiere en este caso mamifero y despues le añado parametros de pez para conseguir crear un mamiPez
 * @param {clase} claseBase la clase de la que va a heredar
 */
let miMixin = (claseBase) => class extends claseBase{
    constructor(nombre, edad, formaDeMoverse, habitat, peso, numeroDePatas, tieneCola, numeroDeAletas) {
        super('mamiPez', nombre, edad, formaDeMoverse, habitat, peso);
        this.numeroDePatas = numeroDePatas;
        this.tieneCola = tieneCola;
        this.numeroDeAletas = numeroDeAletas;
}
}


/**
 *
 *Clase que representa la union de un mamifero y un pez, gracias a que hereda del mixin de arriba, que hereda de mamifero y ademas implementa 
 *elementos de un pez
 * @class Mamipez
 * @extends {miMixin((Mamifero))}
 */
class Mamipez extends miMixin((Mamifero)){}




