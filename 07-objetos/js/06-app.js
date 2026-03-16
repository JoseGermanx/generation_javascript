
console.log("Hola mundo . Ejemplo password");


class User {
    #password

    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.#password = password;
    }

    saludar(){
        `Hola soy ${this.nombre}!`;
    };

    cambiarPassword(nuevaPassword){
        this.#password = nuevaPassword;
    }

    validarPassword(password){
        return this.#password === password;
    };

};

const usuario = new User("Luisa", "luisa@luisa.com", "123456");
console.log(usuario)

const login = prompt("Ingresa tu contraseña");

if (usuario.validarPassword(login)){
    console.log("Bienvenido al sistema, ingreso correcto.")
} else {
    console.error("Hubo un error, contraseña inválida!!")
}

