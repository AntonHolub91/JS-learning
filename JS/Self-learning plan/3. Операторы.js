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
1 + 2
2 - 1
2 * 3
6 / 2
9 % 4 // остаток от деления
2 ** 3 // возведение в степень
4 ** (1/2) // извлечение корня
x = 10 // присваивание

//сложение строк
let string1 = 'Hello' + 'World'
console.log(string1) //вернет HelloWorld
let string2 = 1 + 'World' //если хотя бы один операнд является строкой, то второй будет также преобразован в строку
console.log(string2) //вернет 1World
let string3 = 2 + 2 + 'World'
console.log(string3) //вернет 4World
console.log('6' - '2') // вернет 4
console.log(+'6') // унарный операнд + или - преобразует тип данных в число


