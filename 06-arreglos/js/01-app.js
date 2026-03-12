


const codigosDeDescuento = ["ABB", "FE1", "PROMOHALLOW"];

const listaDeFrutas = ["banana", "frutilla", "pera", "mango"];

const numeros = [1,2,3,4,5,6,7,8];

const elementos = [2, true, "string", [1,2,3]];


console.log(elementos[3])

for (const numero of elementos[3] ) {
    console.log(numero)
}



const nombresDeEstudiantes = ["Ana", "José", "Diego","Luis", "Jorge", "Diana", "Sebastian", "Alberto"]
//                              0       1       2       3


// acceso a valores
console.log(nombresDeEstudiantes[0]) // Ana
console.log(nombresDeEstudiantes[1]) // José
console.log(nombresDeEstudiantes[10]) // underfined
console.log(nombresDeEstudiantes.length) // 4
console.log(nombresDeEstudiantes[nombresDeEstudiantes.length-1])

// modificación de un valor
nombresDeEstudiantes[0] = "Ana Martínez"

// Iterarar un arreglo con for ... of

for (const nombre of nombresDeEstudiantes) {
    console.log(nombre)
}

for (let i = 0; i < nombresDeEstudiantes.length; i++ ) {
    console.log(` ${i + 1} - ${nombresDeEstudiantes[i]}`)
}

const listaHTML = document.getElementById("lista");

let html = "";

for (nombre of nombresDeEstudiantes) {
    if( nombre === "Diego"){
        html += `<li> ${nombre} </li>`
    }
}

listaHTML.innerHTML = html;

const productos = [
  ["Patineta", "Verde", 35990],
  ["Bicicleta", "Amarilla", 120990],
  ["Patines", "Morado", 60990],
  ["Scooter", "Negro", 250990]
]

const listaDeProductos = document.getElementById("productos");

let htmlProductos = "";

for(const producto of productos) {
    htmlProductos += `
    <li>
     <h3>Nombre: ${producto[0]}</h3>
     <p>Color: ${producto[1]}</p>
     <small>Precio: $${producto[2]}</small>    
    </li>
    `
};

listaDeProductos.innerHTML = htmlProductos;
