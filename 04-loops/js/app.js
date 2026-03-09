


// FizzBuzz
// Juego matemático --> contar números de manera especial
// 123456789
// Si un número es múltiplo de 3 --> Fizz
// Si un número es múltiplo de 5 --> Buzz
// Si un número es múltiplo 3 y de 5 --> FizzBuzz

// 1 2 Fizz 4 Buzz Fizz 7 8 Buzz

// == comparador sin tomar en consideración el tipo de dato
// === comparador /estricto) que si toma en consideración el tipo de dato


// ciclo for

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


const listaFrutas = ["Pera", "Mango", "Frutilla", "Platano", "Mandarina"] 

for (let i = 0; i < listaFrutas.length; i++){
    console.log(listaFrutas[i])
}