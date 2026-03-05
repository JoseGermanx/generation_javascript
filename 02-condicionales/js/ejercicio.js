

// Validación mayor de edad
const inputEdad = document.getElementById("edad");
const boton = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function(){

const edad = inputEdad.value;

if (edad === "") {
    resultado.textContent = "Debes ingresar una edad."
} else if (edad >= 18) {
    resultado.textContent = "Eres mayor de edad."
} else {
    resultado.textContent = "Eres menor edad."
}
})


// Día de la semana
const selecDia = document.getElementById("dia");
const botonDia = document.getElementById("btnDia");
const resultadoDia = document.getElementById("resultadoDia");


botonDia.addEventListener("click", function(){


    const dia = selecDia.value;

    switch (dia) {
        case "lunes":
        case "martes":
        case "miércoles":
        case "jueves":
        case "viernes":
            resultadoDia.textContent = "Es día laborable."
            break;
        case "sabado":
        case "domingo":
            resultadoDia.textContent = "Es fin de semana."
            break;
        default:
            resultadoDia.textContent = "No es un día válido."
            break;
    }
})


// Cálculo de la raíz
const inputNumero = document.getElementById("numero");
const botonCalcular = document.getElementById("btnCalcular");
const resultadoRaiz = document.getElementById("resultadoRaiz");

botonCalcular.addEventListener("click", function(){

try {
     const valor = inputNumero.value;

     const numero = Number(valor);

     if (valor === ""){
        throw new Error("Deber ingresar un valor.");
     }

     if (isNaN(numero)) {
        throw new Error("Debe ingresar un número válido.");
     }

     if (numero < 0) {
        throw new Error("Debes ingresar un número positivo.");
     }


    const raiz = Math.sqrt(numero);

    resultadoRaiz.textContent = `La raíz cuadrada de ${numero} es: ${raiz}`;

} catch (error) {

    resultadoRaiz.textContent = `Error: ${error.message} `,
    
}
   


})









