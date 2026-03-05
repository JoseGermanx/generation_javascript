

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




