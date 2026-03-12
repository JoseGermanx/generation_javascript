

const auto = {
    marca: "Mazda",
    modelo: "3 Sport",
    anio: 2020,
    origen: "Japón",
    descontinuado: false,
    color: "rojo",
    lugareDeVenta: ["Santiago", "Rancagua", "Melipilla"],
    accesorios: {
        ruedas: 4,
        sunroof: true,
        asientos: "cuero"
    }
};


auto.anio = 2021;
auto.descontinuado = false;
auto.color = "Azul";

console.log(auto);

console.log(auto.marca);
console.log(auto["marca"]);
console.log(auto.modelo);
console.log(auto.anio);
console.log(auto.descontinuado);

console.log(auto.accesorios.asientos)

for (lugar of auto.lugareDeVenta) {
    console.log(lugar)

}

const guitarra = {
    cuerdas: 6,
    color: "negro",
    anio: 1996
}

const casa = {
    cuartos: 4,
    banios: 2,
    patio: 1,
    color: "blancas",
    ubicacion: "calle siempre viva 912"
}


const carritoDeCompras = [{
    id: 43,
    titulo: "Zapatilla",
    precio: 23000,
    color: "blancas",
    marca: "Nike",
    cantidad: 1
}, {
    id: 56,
    titulo: "Televisor",
    precio: 230000,
    color: "negro",
    marca: "LG",
    cantidad: 1
}, {
    id: 100,
    titulo: "Teléfono",
    precio: 100000,
    color: "negro",
    marca: "Iphone",
    cantidad: 1
}]

const productosDom = document.getElementById("productos");

let html = "";

for (const producto of carritoDeCompras) {
    html += `
    <li>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title">${producto.titulo}</h5>
         <h6 class="card-title">${producto.color}</h6>
         <small> Código - ${producto.id}</small>
         <small>Precio: $${producto.precio}</small>
         </div>
    </div>
    </li>
    `
};

productosDom.innerHTML = html