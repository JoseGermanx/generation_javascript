

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
