var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Coche: ${miAuto.marca} ${this.modelo} de ${this.annio}`);
    }
}

miAuto.marca;
miAuto.detalleDelAuto();
