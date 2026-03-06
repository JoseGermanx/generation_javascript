

// OPERADORES ARTIMÉTICOS

let a = 10;
let b = 3;


console.log(a + b) // 13
console.log(a - b) // 7
console.log(a * b) // 30
console.log(a / b) // 3.33
console.log(a % b) // 1
console.log(a ** b) // 1000

// OPERADORES DE ASIGNACIÓN

let numero = 10;
const VARIACION = 1;
const PI = 3.1416

console.log(numero += VARIACION) //numero = numero + 5 

console.log(numero -= VARIACION)// numero = numero - 3

console.log(numero *= VARIACION) // numero = numero * 2

console.log(numero /= VARIACION) // numero = numero / 3

// OPERADORES DE COMPARACIÓN

console.log(5 == "5")
console.log(5 === "5") // se prefiere uso en igualdades
console.log("hola" != "hola")
console.log("mundo" != "Mundo")
console.log("12" != 12)
console.log("12" !== 12) // se prefiere uso en desigualdades
console.log(5 > 10)
console.log(5 > 5)
console.log(5 >= 5)
console.log(1 < 5)
console.log(4 <= 5)


// OPERADORES LÓGICOS

let edad = 20;
let tieneEntrada = true;

// && las dos evaluaciones deben ser true para que la expresión completa sea true
if(edad >= 18 && tieneEntrada) {
    console.log("Puede entrar")
} else {
    console.log("No puede entrar")
}

// || al menos una de las dos evaluaciones debe ser true para que la expresión completa sea true

let esAdmin = true;
let esEditor = false;

if (esAdmin || esEditor) {
    console.log("Tiene permisos!!")
} else {
    console.log("Área restringida - No Access")
}

// ! invertir el valor de un boleano

let activo = false;

if (!activo) {
    console.log("Contenido no se puede mostrar!!")
}

// OPERADORES DE INCREMENTO O DECREMENTO

let contador = 5;
contador++;
console.log(contador);
contador++;
console.log(contador);
contador++;
console.log(contador);

contador--;
console.log(contador);
contador--;
console.log(contador);
contador--;
console.log(contador);
contador--;
console.log(contador);

// OPERADOR DE CONCATENACIÓN +

let inicio = "Hola";
let mensaje = "que bueno que vives en";
let nombre = "Alberto";
let direccion = "Santiago";

// Hola Alberto, que bueno que vives en Santiago
let saludo = inicio + " " + nombre + ", " + mensaje + " " + direccion;

let saludoModerno = `${inicio} ${nombre}, ${mensaje} ${direccion}`;


console.log(saludo);
console.log(saludoModerno);

console.log(101 + 5 + " hola") // recordatorio de conversión implicita


// OPERADOR TERNARIO

// condicion ? siEsTrue : siEsFalse

let edadEstudiante = 14;

// condicion ? siEsTrue : siEsFalse
let mensajeEdad = edadEstudiante >= 18 ? "Es mayor de edad" : "Es menor de edad";

console.log(mensajeEdad)