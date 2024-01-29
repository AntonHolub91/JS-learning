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
