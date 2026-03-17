
console.log("Apis")

async function getRandomUser(){

    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); // envia una request a la api
        const data = await res.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
};

getRandomUser();


const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve("Promesa resuelta!!")
    }, 2000)
   
})

async function gestionPromesa() {
    const res = await promesa;
    console.log(res);
}

// gestionPromesa();


function obtenerUsuarios() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const exito = false; // se encontró el usuarios, todo ok!!
            if(exito){
                resolve(["juan", "ana", "luis"])
            } else {
                reject("Error al obtener los usuarios!!!")
            }
        }, 3000);
    })
}

async function mostrarUsuarios() {

    try {
        const usuarios = await obtenerUsuarios(); // función asincrónica
        console.log(usuarios)
    } catch (err) {
        console.log(err)
    }

}

// mostrarUsuarios();

