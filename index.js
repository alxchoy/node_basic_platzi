const math = require('./math');
const greet = require('./greetings'); // trae el index.js
const hello = require('./greetings/hello');

console.log(math.add(4, 5));
console.log(math.divide(4, 5));
console.log(math.multiply(4, 5));
console.log(math.substract(4, 5));

console.log(greet.greet('Choy'));

console.log(hello.sayHello('Alex'));