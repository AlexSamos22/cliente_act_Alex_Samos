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

//EJER3

/**
 * Clase que genera un juego para ordenar un puzzle
 * @class tablero
 */
class tablero{
    /**
     * Crea una instacion de tablero.
     * @param {int} filas numero de filas que tendra el tablero
     * @param {int} columnas numero de columnas que tendra el tablero
     * @memberof tablero
     */
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;
        /**
         * Almacenera la posicion del espacio en blanco en el tablero
         * @type {object}
         */
        this.espacioBlanco;
        /**
         * Almacenara el tablero del juego
         * @type {Array}
         */
        this.tablero = [];
        /**
         * Almacenara todos los numeros que estaran en el tablero
         * @type {Array}
         */
        this.numeros = [];
        /**
         * Movimietos que lleva hechos el usuario
         * @type {int}
         */
        this.movimientos = 0;
        /**
         * El tiempo en el que el usuario empezo el juego, por defecto null
         * @type {date}
         */
        this.inicioJuego = null;
         /**
         * El tiempo en el que el usuario acabo el juego, por defecto null
         * @type {date}
         */
        this.finJuego = null;
    }
  
    
    /**
     * Funcion que genera un tablero y lo desordena
     *
     * @memberof tablero
     */
    generarTablero(){
        let contador = 0;
        for (let i = 1; i < this.filas * this.columnas; i++){
            this.numeros.push(i);
        }
        this.numeros.push(" ");
        this.numeros.sort(() => Math.random() - 0.5);

        for (let  i = 0; i < this.filas; i++) {
            this.tablero[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                    this.tablero[i][j] = this.numeros[contador];
                    contador ++;
            }   
        }

        this.inicioJuego = new Date();
    }
     /**
      * Funcion que muestra al usuario los numeros que puede mover y le pide uno de ellos para cambiarlo con el espacio en blanco
      * @memberof tablero
      */
     movimiento() {
            let numerosMovibles = this.movimientoValido();
            let listaNumeros = " ";
            let mover;
            let num;
            let encontrado = false;
            let posicion;
   
            for(let i = 0; i< numerosMovibles.length; i++){
                listaNumeros += numerosMovibles[i] + " ";
            }
           
            console.log("Los numeros que se pueden mover son: " + listaNumeros);
           
            do {
                num = prompt("¿Qué número quiere mover? (Dejar en blanco para reiniciar):  ");
                if(num === ""){
                    this.reiniciar();
                    encontrado = true;
                    return true;
                }else{
                    posicion = parseInt(num);
                     encontrado = numerosMovibles.includes(posicion);
                }
            } while (!encontrado);

           
           
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    if (this.tablero[i][j] === posicion) {
                        mover = {fila: i, columna: j};
                    }
                }
            }
           
           
            let posNumero = this.tablero[mover.fila][mover.columna];
   
            this.tablero[mover.fila][mover.columna] = " ";
            this.tablero[this.espacioBlanco.fila][this.espacioBlanco.columna] = posNumero;
   
            this.movimientos++;
            this.espacioBlanco = {fila: mover.fila, columna: mover.columna};
            this.verificarFinJuego();
       
    }

            

    /**
     *
     * Funcion que encunetra el espacio en blanco en el tablero
     * @return {object} devuelve un objeto con la fila y columna donde esta el espacio en blanco
     * @memberof tablero
     */
    encontrarEspacioBlanco() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (this.tablero[i][j] === " ") {
                    this.espacioBlanco = { fila: i, columna: j };
                    return this.espacioBlanco;
                }
            }
        }
    }

   /**
    *Funcion que muestra al usuario los numeros que puede mover
    *
    * @return {Array} Devuelve un array con los numeros movibles por el usuario
    * @memberof tablero
    */
   movimientoValido() {
        let espacioBlanco = this.espacioBlanco;
        let movimientosPosibles = [];

            if((espacioBlanco.fila - 1) != -1){
                movimientosPosibles.push(this.tablero[espacioBlanco.fila -1][espacioBlanco.columna]);
            }
            if((espacioBlanco.fila + 1) != (this.filas)){
                movimientosPosibles.push(this.tablero[espacioBlanco.fila +1][espacioBlanco.columna]);
            }
            if((espacioBlanco.columna - 1) != -1){
                movimientosPosibles.push(this.tablero[espacioBlanco.fila][espacioBlanco.columna - 1]);
            }
            if((espacioBlanco.columna + 1) != (this.columnas)){
                movimientosPosibles.push(this.tablero[espacioBlanco.fila][espacioBlanco.columna + 1]);
            }
        return movimientosPosibles;
    }
  
  
    /**
     *
     * Funcion que comprueba si el tablero esta ordenado
     * @return {boolean} Devuelve true si el tablero esta bien ordenado
     * @memberof tablero
     */
    verificarFinJuego(){
        let contador = 1;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if(contador != (this.filas * this.columnas)){
                    if(this.tablero[i][j] != contador){
                        return false;
                    }else{
                        contador++;
                    }
                }
            }
        }
    
        this.finJuego = new Date();
        return true; 
    }

    /**
     *Funcion que reinicia el juego
     * @memberof tablero
     */
    reiniciar(){
        this.generarTablero();
    }
  
    /**
     *Funcion que devuelve los movimientos hechos por el usuario y tiempo que tardo en completar el juego
     * @return {string} devuelve los movimientos y tiempo que se ha tardado en resolver el juego 
     * @memberof tablero
     */
    estadisticas(){
        let movimientos = this.movimientos;
        let tiempoJuego = ((this.finJuego - this.inicioJuego) / 1000) / 60;
  
        return console.log("Has tenido: " + movimientos + " movimientos y has tardado en acabar " + tiempoJuego + " minutos");
    }

    /**
     * Muestra el estado del juego
     * @memberof tablero
     */
    estadoDelJuego(){
        let tablero = "";
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                tablero += "| " + this.tablero[i][j] + " | ";
            }
            console.log(tablero);
            tablero = "";
        }
    }
    


  }
  
  let juego = new tablero(3, 3); 
  let reiniciar = "";
  juego.generarTablero();
  juego.encontrarEspacioBlanco();
  do {
    juego.estadoDelJuego();
    juego.movimiento();
} while (!juego.verificarFinJuego());

  
  juego.estadisticas(); 

//EJER 4

/**
 * Clase para hacer el juego 3 en ralla
 * @class TresEnRaya
 */
class TresEnRaya {
    /**
     * Crea una instancia de TresEnRaya.
     * @param {int} tamaño tamaño del tablero, por defecto sera 3x3
     * @memberof TresEnRaya
     */
    constructor(tamaño) {
        this.tamaño = tamaño || 3;
        /**
         * Almacena el tablero del juego
         * @type {Array}
         */ 
        this.tablero = this.crearTablero();
        /**
         * Almacena el turno del jugador
         * @type {string}
         */
        this.turnoActual = 'X';
        /**
         * Indica si hay un ganador o un empate
         * @type {string}
         */
        this.ganador = null;
        /**
         * Movimientos hechos por el usuario
         * @type {int}
         */
        this.movimientos = 0;
    }

    /**
     *Funcion que genera el tablero del juego
     * @return {Array} devuelve el tablero creado 
     * @memberof TresEnRaya
     */
    crearTablero() {
        let tablero = [];
        for (let i = 0; i < this.tamaño; i++) {
            let fila = [];
            for (let j = 0; j < this.tamaño; j++) {
                fila.push(' ');
            }
            tablero.push(fila);
        }
        return tablero;
    }

    /**
     *Funcion que imprime el tablero con un buen formato
     * @return {string} devuelve el tablero formateado
     * @memberof TresEnRaya
     */
    imprimirTablero() {
        let juego = "";
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j < this.tablero[i].length; j++) {
                juego += "| " + this.tablero[i][j] + " |";
            }
            juego += "\n"
        }
        return juego;
    }

    /**
     * Funcion que le muestra al usuario las posiciones libres y le permite hacer su movimeinto
     * @memberof TresEnRaya
     */
    hacerMovimiento() {
        let movimientoValido = false;
        let posicionesLibres = [];
        for (let i = 0; i < this.tamaño; i++) {
            for (let j = 0; j < this.tamaño; j++) {
                if (this.tablero[i][j] == ' ') {
                    posicionesLibres.push({ fila: i, columna: j });
                }
            }
        }
        let posicionesRestantes = "Posiciones libres: ";
        for (let posicion of posicionesLibres) {
            posicionesRestantes += `[${posicion.fila},${posicion.columna}] `;
        }
        console.log("Es el turno de: " + this.turnoActual);
        console.log(posicionesRestantes);
        
        let fila;
        let columna;
        do {
            fila = parseInt(prompt("Inserte la fila: "));
            columna = parseInt(prompt("Inserte la columna: "));
            for (let i = 0; i < posicionesLibres.length; i++) {
                if (posicionesLibres[i].fila == fila && posicionesLibres[i].columna == columna) {
                    movimientoValido = true;
                }
            }
        } while (!movimientoValido);

        if (this.tablero[fila][columna] == ' ') {
            this.tablero[fila][columna] = this.turnoActual;
            this.movimientos++;
            this.verificarGanador(fila, columna);
            this.cambiarTurno();
        }
    }

    /**
     * Funcion que se encarga de cambiar el turno entre X y O
     * @memberof TresEnRaya
     */
    cambiarTurno() {
        this.turnoActual = this.turnoActual == 'X' ? 'O' : 'X';
    }

    /**
     * Funcion que se encarga de ver si alguien ha ganado o ha sido empate
     * @param {int} fila fila donde el jugador puso la X o O
     * @param {int} columna columna donde el jugador puso la X o O
     * @memberof TresEnRaya
     */
    verificarGanador(fila, columna) {
        if (this.movimientos >= (this.tamaño * 2 - 1)) {
            if (
                this.verificarFila(fila) ||
                this.verificarColumna(columna) ||
                this.verificarDiagonales() ||
                this.verificarAntiDiagonales()
            ) {
                this.ganador = this.turnoActual;
            } else if (this.movimientos == this.tamaño * this.tamaño) {
                this.ganador = 'empate';
            }
        }
    }

    /**
     * Funcion que se encarga de verificar si una fila entera es del mismo turno
     * @param {int} fila fila donde se inserto la X o O
     * @return {bool} devuelve true si toda la fila pertenece al mismo turno o false si no es asi
     * @memberof TresEnRaya
     */
    verificarFila(fila) {
        for (let i = 0; i < this.tamaño; i++) {
            if (this.tablero[fila][i] != this.turnoActual) {
                return false;
            }
        }
        return true;
    }

    /**
     * Funcion que se encarga de verificar si una columna entera es del mismo turno
     * @param {int} columna columna donde se inserto la X o O
     * @return {boolean} devuelve true si toda la columna pertenece al mismo turno o false si no es asi
     * @memberof TresEnRaya
     */
    verificarColumna(columna) {
        for (let i = 0; i < this.tamaño; i++) {
            if (this.tablero[i][columna] != this.turnoActual) {
                return false;
            }
        }
        return true;
    }

    /**
     * Funcion que se encarga de verificar si una diagonal entera es del mismo turno
     * @return {boolean} devuelve true si toda la diagonal pertenece al mismo turno o false si no es asi
     * @memberof TresEnRaya
     */
    verificarDiagonales() {
        for (let i = 0; i < this.tamaño; i++) {
            if (this.tablero[i][i] != this.turnoActual) {
                return false;
            }
        }
        return true;
    }

    /**
     * Funcion que se encarga de verificar si una antidiagonal entera es del mismo turno
     * @return {boolean} devuelve true si toda la antidiagonal pertenece al mismo turno o false si no es asi
     * @memberof TresEnRaya
     */
    verificarAntiDiagonales() {
        for (let i = 0; i < this.tamaño; i++) {
            if (this.tablero[i][this.tamaño - 1 - i] != this.turnoActual) {
                return false;
            }
        }
        return true;
    }

    /**
     *Funcion que devuelve el ganador si lo hay o empate
     * @return {string} devuelve X si gano X, O si gano O o empate si ninguno gano
     * @memberof TresEnRaya
     */
    obtenerGanador() {
        return this.ganador;
    }

    /**
     * Funcion que indica el final del juego
     * @return {boolean} devuelve true si ganador es distinto de null o en caso contrario false
     * @memberof TresEnRaya
     */
    finjuego() {
        return this.ganador != null;
    }
}

let juego2  = new TresEnRaya(4); // Crea un juego Tres en Raya con un tablero de 3x3
do {
    console.log(juego2.imprimirTablero());
    juego2.hacerMovimiento();

    let ganador = juego2.obtenerGanador();
    if (ganador) {
        if (ganador === 'empate') {
            console.log('¡Es un empate!');
            console.log(juego2.imprimirTablero());
        } else {
            console.log(`¡El jugador ${ganador} ha ganado!`);
            console.log(juego2.imprimirTablero());
        }
    }
} while (!juego2.finjuego());
