
console.log("Hola mundo . Clases");


class Usuario {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, nombre es ${this.nombre}!`);
    };

    decirEdad(){
        console.log(`Tengo ${this.edad} años.`);
    };
};


const usuario1 = new Usuario("Ana", 40);
const usuario2 = new Usuario("Luis", 23);

usuario1.saludar();
usuario1.decirEdad();
usuario2.saludar();
usuario2.decirEdad();

console.log(usuario1.nombre)
console.log(usuario1.edad)