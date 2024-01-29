//Оператор typeof - возвращает тип аргумента.

typeof undefined // "undefined"
typeof 0 // "number"
typeof 1n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol() // "symbol"
typeof {} // "object"
typeof null // "object"  (1)
typeof function () {} // "function"  (2)




//Оператор instance of - позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования.

class Rabbit {}
let rabbit = new Rabbit();

class Letter {}
let letter = new Letter()

// это объект класса Rabbit?
console.log(rabbit instanceof Rabbit); // true
console.log(letter instanceof Rabbit); // false

//Также это работает с функциями-конструкторами:
// вместо класса
// function Rabbit() {}
//
// alert( new Rabbit() instanceof Rabbit ); // true

//И для встроенных классов, таких как Array
let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof Object ); // true