

// Crear un botón "Mostrar números" que al hacer clic muestre en pantalla los números del 1 al 10.

// Cada número debe aparecer dentro de un <li> dentro de una lista <ul>.

const botonNumeros = document.getElementById("btnNumeros");
const lista = document.getElementById("lista");

botonNumeros.addEventListener("click", function(){

    for (let i = 1; i <= 10; i++){
        const item = document.createElement("li");
        item.textContent = `Valor de la iteración: ${i}`;
        lista.appendChild(item);
    }
});



// Crear un botón "Contar hasta 5".

// Cuando el usuario haga clic, mostrar en un <p> los números 1 2 3 4 5 usando un ciclo while.




// Crear un input donde el usuario escriba un número.

// Al presionar "Contar hasta ese número", mostrar los números desde 1 hasta el número ingresado usando do...while.