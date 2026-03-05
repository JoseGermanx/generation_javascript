
try {
   let value = ""
    // Intentamos ejecutar una instrucción donde pudiera habaer un error
    if (value === "") {
        throw new Error("El campo no puede estar vacio!")
    }
    
} catch (error) {
    // acá se capturan excepciones ---> Errores
    alert(error)
    
}




