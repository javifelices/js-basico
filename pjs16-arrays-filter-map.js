var articulos = [
    { nombre: "Bicileta", coste: 3000 },
    { nombre: "Televisión", coste: 5000 },
    { nombre: "Libro", coste: 500 },
    { nombre: "Teléfono", coste: 2500 },
    { nombre: "Ordenador Portátil", coste: 3500 },
    { nombre: "Teclado", coste: 100 },
    { nombre: "Auriculares", coste: 1000 }
];

var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.coste <= 500;
});

articulosFiltrados

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});

nombreArticulos;

