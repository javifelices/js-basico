/*
    find() : Devuelve el primer elemento del array que cumpla con la condición dada. Si no encuentra nada devuelve undefined
    foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array. No crea un nuevo array. Regresa undefined en un array vacío
    map() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array. Sí crea un nuevo array. Regresa undefined en un array vacío
    some() : Comprueba si al menos un elemento del array cumple con la condición que le damos (boolean). Regresa false si no encuentra nada
    filter() : Devuelve todos los elementos del array que cumplan con la condición dada
*/

var articulos = [
    { nombre: "Bicicleta", coste: 3000 },
    { nombre: "Televisión", coste: 5000 },
    { nombre: "Libro", coste: 500 },
    { nombre: "Teléfono", coste: 2500 },
    { nombre: "Ordenador Portátil", coste: 3500 },
    { nombre: "Teclado", coste: 100 },
    { nombre: "Auriculares", coste: 1000 }
];

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Libro";
});

encuentraArticulo;

articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.coste <= 1000;
});

articulosBaratos;
