function playGame(human, machine) {
switch (human) {
case 'rock':
    switch (machine) {
    case 'scissors':
        console.log('You win!');
        break;
    case 'paper':
        console.log('You lose!');
        break;
    default:
        console.log('Its a tie!');
        break;
    }
    break;
case 'paper':
    switch (machine) {
    case 'rock':
        console.log('You win!');
        break;
    case 'scissors':
        console.log('You lose!');
        break;
    default:
        console.log('Its a tie!');
        break;
    }
    break;
case 'scissors':
    switch (machine) {
    case 'paper':
        console.log('You win!');
        break;
    case 'rock':
        console.log('You lose!');
        break;
    default:
        console.log('Its a tie!');
        break;
    }
    break;
}
console.log('H:' + human + ' M:' + machine);
}

var options = ['rock', 'paper', 'scissors'];
var machine = options[Math.floor(Math.random() * options.length)];
var choice = prompt('Enter your choice 1-rock, 2-paper or 3-scissors.');

playGame(options[choice - 1], machine);
