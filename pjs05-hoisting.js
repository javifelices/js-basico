/* Con ES6 esto ya no ocurre gracias al uso de let y const */

// console.log(miNombre);
// var miNombre = "Javi";

/* Esto ocurre en el caso anterior */
// var miNombre = undefined;
// console.log(miNombre + " Soy hoisting");
// miNombre = "Victoria";

hey();
function hey() {
    console.log("Hola Hulio, soy " + miNombre);
}
var miNombre = "Javi";
