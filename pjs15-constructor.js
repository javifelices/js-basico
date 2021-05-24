// var autoNuevo = new auto("Tesla", "Model 3", "2020");
// var autoNuevo2 = new auto("Tesla", "Model X", "2018");
// var autoNuevo3 = new auto("Toyota", "Corolla", "2019");

var listaAutos = [];

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


function agregarAuto(marca, modelo, anio){
    var nuevoAuto = new auto(marca, modelo, anio);
    listaAutos.push(nuevoAuto);
};


function registrarAutoNuevo(){
    var marca = prompt("Ingresa la marca: ");
    var modelo = prompt("Ingresa el modelo: ");
    var anio = prompt("Ingresa el año: ");
    agregarAuto(marca, modelo, anio);
    console.log("¡Agregaste tu nuevo carro con éxito!");
};

//Paso 5: Mostramos el arreglo actualizado
listaAutos;
