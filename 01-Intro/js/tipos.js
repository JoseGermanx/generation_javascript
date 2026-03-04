
// Strings

let nombre = "Jose";

let saludo = 'Hola';

let listaDeNumeros = "1 2 3 4 5 6 7 hjk      lkndsfklgn d elkgjekrg      8 9 fghfghgh fg fgh fgh fgh fgh fgh fgh fg h 0";
console.log(typeof listaDeNumeros);

let conversion = Number("123.7");
console.log(typeof conversion);

let mensaje = `${saludo} ${nombre}`; // string literales

let mensajeConcatenado = saludo + " " + nombre; // concatenación

console.log(mensajeConcatenado.length);
console.log(mensajeConcatenado.toUpperCase());

// Number

let edad = 27;
let promedio = 6.4;
console.log(typeof edad);
console.log(typeof promedio);

console.log(edad + 5);
console.log(promedio * 2);
console.log(edad > promedio);
console.log(Math.round(promedio));


// Boolean

let esMayorDeEdad = true;
let tienePermiso = false;
let esAdulto = edad >= 18;
console.log(typeof esMayorDeEdad);
console.log(typeof tienePermiso);
console.log(esAdulto);


// Undefined

let apellido;

console.log(apellido);

// Null

let direccion = null;

// Tipos de de ES6

// Symbol

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1.description);
console.log(id2.description);

console.log(id1 == id2);

let id3 = "id";
let id4 = "id";

console.log(id3 === id4);

// bigint

let numeroMuyGrande = 12312312312312312312312312312311313n;
let otroNumeroGrande = 10n;
console.log(numeroMuyGrande + otroNumeroGrande);
