// if
var name = 'Antq';
if (name === "Ant") {
    console.log('Привет мне!')
} else if (name === "Женя") {
    console.log('Привет, жена!');
} else {
    console.log('Привет, незнакомец!');
}

// //while
// sheepCounted = 0;
// while (sheepCounted < 10) {
//     console.log('Counted sheeps is ' + sheepCounted);
//     sheepCounted++;
// }
// console.log('Hrrr....hrrrr.....hrrr');

//for
var list = ['a', 'b', 'c', 'd']
for (var i = 0; i < list.length; i++) {
    console.log('Index ' + i + ' - ' + list[i]);
}

console.log('-------------------------')

var string = 'Hello World'
for (var i = 0; i < string.length; i++) {
    console.log('Index ' + i + ' - ' + string[i]);
}

for (var x = 2; x < 10000; x = x * 2) {
    console.log(x);
}

console.log('-------------------------')

for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
}

console.log('-------------------------')

x = 3
while (x < 10000) {
    console.log(x);
    x *= 3;
}

// Exercise 1
var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (var i = 0; i < animals.length; i++) {
    animals[i] += " - прекрасное животное";
}
console.log(animals);

// Exercise 2
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
var randomString = "";
var len = 0;
while (len < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    len++;
}
console.log(randomString);

// Exercise 3
var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
        output += 4
    } else if  (input[i] === 'e') {
        output += 3
    } else if  (input[i] === 'i') {
        output += 1
    } else if  (input[i] === 'o') {
        output += 0
    } else if  (input[i] === ' ') {
        output += '_'
    }
    else {
        output += input[i]
    }
}
console.log(output);