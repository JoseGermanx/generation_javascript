
console.log("Módulos")

// Calculadora

export const add = (a, b) => a + b;

export const multiply = (a, b) => a * b;

export const texto = "Hola mundo"

const mensaje = function name() {
    console.log("Mensaje desde un módulo")
}

// Sólo exite una por módulo
export default mensaje