
console.log("Hola mundo")

// document.getElementById()

let texto = "Texto"

texto.toUpperCase()

let lista = [1,2,3,4,5]

// lista.length // propiedad
// lista.push(6) // método

const contact = {
    nombre: "Alberto",
    apellido: "Ramirez",
    nombreCompleto: function () {
        return `${this.nombre} ${this.apellido}`
    },
    valorDeThis: function () {
        return this
    }
}
// console.log(contact.nombreCompleto());
// console.log(contact.valorDeThis());

// Función constructora
function Contact(parametroNombre, parametroApellido){
    this.nombre = parametroNombre;
    this.apellido = parametroApellido;
    this.nombreCompleto = function (){
        return ` ${this.nombre} ${this.apellido} `
    }
};

// Instacias de Contact
const contac1 = new Contact("Diana", "Díaz");
const contac2 = new Contact("Alberto", "López");

console.log(contac1)
console.log(contac2)