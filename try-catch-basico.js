const gato = { nombre: 'Guizmo', raza: 'negra' };

function comprobarGato() {
    try {
        if (!ato.raza) throw new SyntaxError('Propiedad raza necesaria')
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error('Información incompleta', error);
        } else {
            throw error; //rethrow
        }
    }
}

try {
    comprobarGato()
} catch (error) {
    console.error('Otros errores', error);
}
