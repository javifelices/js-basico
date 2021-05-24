function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.detalle = function () {
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.annio}\n`;
    };
}

var noAutosARegistrar = prompt("¿Cuátos autos quieres registrar?");

var lstAutos = [];
for (var i = 0; i < noAutosARegistrar; i++) {
    var marca = prompt(`Marca del auto ${i + 1}:`);
    var modelo = prompt(`Modelo del auto ${i + 1}:`);
    var annio = prompt(`Año del auto ${i + 1}:`);
    lstAutos.push(new auto(marca, modelo, annio));
}

function printDetalleAutos(autos) {
    var lstDetalleAutos = "";
    autos.forEach((auto) => {
        lstDetalleAutos += auto.detalle() + "\n";
    });
    console.log(`########## Autos registrados ###########\n\n${lstDetalleAutos}`);
}

printDetalleAutos(lstAutos);
