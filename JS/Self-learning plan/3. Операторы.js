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

// Оператор in - возвращает true, если свойство содержится в указанном объекте или в его цепочке прототипов

let car = {
    producer: 'VW',
    model: 'Golf 4',
    engineCapacity: 1.9
};

console.log('producer' in car); // вернет true, т.к. объект car имеет свойство producer
console.log('weight' in car); // вернет false, т.к. объект car не имеет свойства weight

let array = ['a', 'b', 'c', 'd']
console.log(0 in array); // вернет true, т.к. массив array имеет элемент с индексом 0
console.log(4 in array); // вернет false, т.к. массив array не имеет элемента с индексом 4
console.log('b' in array); // вернет false, т.к. првоерка наличия элемента осуществляется по индексу
console.log('length' in array); // вернет true, т.к. массив array имеет свойство length


//Арифметические операторы
