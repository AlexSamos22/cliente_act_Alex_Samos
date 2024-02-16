//EJER1 
function potenciaRecursiva(a,b){
    if (b == 0) {
        return 1;
    }
  
    return a * potenciaRecursiva(a, b - 1);
  };
  
  console.log(potenciaRecursiva(2,3));

  //EJER2
function cadenaConcatenada(...cadena) {
    return cadena.join(" ");
}
  
  console.log(cadenaConcatenada("hola", "adios", "bye", "hello"));

//EJER3
function operacion(num1, num2, op) {
    return op(num1,num2);
  }
  
let potencia = (a,b) => (a**b);
let division = (a,b) => (a/b);
  
console.log(operacion(10,5,potencia));
console.log(operacion(10,5,division));