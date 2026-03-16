
console.log("Hola mundo . Prototipos")


function Usuario(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años.`)
    }
}

Usuario.prototype.despedirse = function(){
    console.log(`Por aca se despide ${this.nombre}!`)
}


const usuario1 = new Usuario("Luis", 34);
const usuario2 = new Usuario("Daniela", 22);
usuario1.saludar();
usuario2.saludar();
usuario1.despedirse();
console.log(usuario2);



