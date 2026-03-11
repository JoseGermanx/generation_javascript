

//console.log("Hola mundo")


// función que no recibe parámetros (definición)
function saludo() {
    // instrucciones
    console.log("Hola mundo desde una función");
    let resultado;
    resultado = 2 + 2;
    console.log(resultado);
};

// Invocación
// saludo();

// Función que recibe 2 números y los suma entre si
// Función que recibe parámetros (no tiene retorno)
function suma(num1, num2) {
    console.log(`El resultado de la suma es: ${num1 + num2}`);
};

// Invocación
//suma(4,5);
//suma(10,5);

// funcion que recibe parámetros y retorna una valor
function mensaje(nombre, curso="básico") {
    // Construcción del mensaje -> string
    let mensaje = `Hola, ${nombre}. Bienvenido al curso ${curso}.`
    
    // Disponibilizando este valor hacia el exterior de la fn
    return mensaje
}

// Invocación
const mensajeParaImprimir = mensaje("Daniel", "avanzado");

console.log(mensajeParaImprimir);
// alert(mensajeParaImprimir)
// email
// whatsapp

function mostrarAlert(){
alert("Presionado el botón")
};


const boton = document.getElementById("btn"); // seleccionar

// boton.addEventListener("click", function(){
//     console.log("Vamos a ejecutar la función al disparar el click");
//     mostrarAlert();
// });

boton.addEventListener("click", () => {
    console.log("Vamos a ejecutar la función al disparar el click");
    mostrarAlert();
});

//definición
function ejecutarFuncion(fn){
    fn();
};

// Invocación
//ejecutarFuncion(mostrarAlert);


// funciones flecha

const resultado = (num1, num2) => num1 + num2; // return implicito

console.log(resultado(10,4))