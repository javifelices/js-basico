let respuesta = '{ "nombre": "Juan", "prfesion": "dev", "herramientas": ["Javascript", "Vue"]}'

function comprobarRespuesta() {
    const inicio = Date.now();
    try {
        // Check JSON
        respuesta = JSON.parse(respuesta)

        // Errores personalizados
        if (!respuesta.nombre || !respuesta.profesion) throw new SyntaxError("Necesitamos las propiedades");

        if (!respuesta.herramientas.includes("Vue")) throw new RangeError("Necesitas usar Vue!!");

        return true;
    } catch (error) {
        console.error(error);
        return false;
    } finally {
        console.info(Date.now() - inicio + " ms");
    }
}

const check = comprobarRespuesta();
