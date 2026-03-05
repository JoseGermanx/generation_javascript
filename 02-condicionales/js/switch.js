
let dia = "Miércoles"

try {
    
    switch (dia) {
        case "Lunes":
            console.log("Lunes, día de lectura.");
            break;
        case "Martes":
            console.log("Martes, día de escuchar música.");
            break;
        case "Miércoles":
            throw new Error("Los miércoles son de hacer nada.")
            break;
        default:
            console.log("Para ese día no hay actividades definidas");
            break;
    }
} catch (error) {

    alert(error)
    
}

console.log("Hola después del switch")