//Условный оператор if
let a = '12';

if (a == 10) {
    console.log("Yes");
    console.log("You are right");
} else if (a == 11) {
    console.log("Cool");
} else {
    console.log("No");
}

//Условный оператор „?“
let age = 2;
let result = (age > 10) ? 'x' : 'y';
console.log(result)


let x = 1;
switch (x) {
    case 1:
        console.log("A");
        break;
    case 10:
        console.log("B");
        break;
    case 20:
        console.log("C");
        break;
    default:
        console.log("D");
}



// let age1 = prompt('Возраст?', 18);
// let message = (age1 < 3) ? 'Здравствуй, малыш!' :
//     (age1 < 18) ? 'Привет!' :
//         (age1 < 100) ? 'Здравствуйте!' :
//             'Какой необычный возраст!';
//
// console.log(message);


// let enteredValue = prompt("Enter some number", 0)
// if (enteredValue > 0) {
//     alert(1);
// } else if (enteredValue < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }


// let result = (a + b < 4) ? 'Little' : 'much';


// let message = (login == 'Сотрудник') ? 'Привет':
//     (login == 'Директор') ? 'Здравствуйте' :
//         (login == '') ? 'Нет логина' :
//             '';






