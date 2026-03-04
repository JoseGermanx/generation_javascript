function ejemplo() {
 console.log(x);
 // undefined (hoisting)
 
 var x = 10;
 console.log(x);
 // 10
}


// var ignora bloques:
if (true) {
 var color = "azul";
}

ejemplo()

// console.log(color);
// "azul" — ¡accessible!