// Piedra | Papel | Tijera

var op1 = 'Piedra';
var op2 = 'Papel';
var op3 = 'Tijera';

function Juego(user, cpu) {
    if (user != cpu) {
        if (user === op1 && cpu === op3) {
        console.log('el usuario GANO con ' + op1);
        } else if (user === op2 && cpu === op1) {
        console.log('el usuario GANO con ' + op2);
        } else if (user === op3 && cpu === op2) {
        console.log('el usuario GANO con ' + op3);
        } else {
        console.log('La CPU Gano!!');
        }
    } else if (user === cpu) {
        console.log('Empate');
    }
}

Juego(op1, op1);
Juego(op1, op3);
Juego(op2, op1);
Juego(op2, op3);
Juego(op3, op2);


// Versión con menos código

// let piedra = 1;
// let papel = 2;
// let tijera = 3;

// let result = (pc, user) => {
//     let options = [1, 2, 3, 1];
//     if (pc == user) return 'Empate';
//     return options[pc++] == user ? 'Tú ganas' : 'Tú pierdes';
// };

// console.log(result(papel, piedra));
// console.log(result(papel, tijera));
// console.log(result(piedra, tijera));
// console.log(result(piedra, piedra));
