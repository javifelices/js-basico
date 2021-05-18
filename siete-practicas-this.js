// https://dmitripavlutin.com/javascript-this-interview-questions/

// const object = {
//     message: 'Hello, World!',

//     getMessage() {
//         const message = 'Hello, Earth!';
//         return this.message;
//     }
// };
// console.log(object.getMessage()); // What is logged?


// function Pet(name) {
//     this.name = name;
//     this.getName = () => this.name;
// }
// const cat = new Pet('Fluffy');
// console.log(cat.getName()); // What is logged?
// const { getName } = cat;
// console.log(getName());


// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message); // What is logged?
//     }
// };
// setTimeout(object.logMessage, 1000);


// const object = {
//     message: 'Hello, World!'
// };
// function logMessage() {
//     console.log(this.message); // "Hello, World!"
// }
// // Using func.call() method
// logMessage.call(object);

// // Using func.apply() method
// logMessage.apply(object);

// // Creating a bound function
// const boundLogMessage = logMessage.bind(object);
// boundLogMessage();


// const object = {
//     who: 'World',

//     greet() {
//         return `Hello, ${this.who}!`;
//     },

//     farewell: () => {
//         return `Goodbye, ${this.who}!`;
//     }
// };

// console.log(object.greet());    // What is logged?
// console.log(object.farewell()); // What is logged?


// var length = 4;
// function callback() {
//   console.log(this.length); // What is logged? // 4
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     }
// };

// object.method(callback, 1, 2);


var length = 4;
function callback() {
    console.log(this.length); // What is logged?
}

const object = {
    length: 5,
    method() {
        arguments[0]();
    }
};

object.method(callback, 1, 2);
