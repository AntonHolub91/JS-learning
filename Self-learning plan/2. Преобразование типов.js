var age1; //переменная, задаваемая через var имеет полную область видимости. Можно присвоить значение сразу, а можно потом.
let age2; //переменная, задаваемая через let имеет ограниченную область видимости. Можно присвоить значение сразу, а можно потом.
const age3 = 10; //Значение присваивается сразу (принцип бронирования места под ячейку памяти)

let age = 10;
let theBiggestNumber = Infinity; //самое большое число (можно получить делением 1 на 0)
let theSmallestNumber = -Infinity; //самое большое отрицательное число (можно получить делением -1 на 0)
let errorInMathAction = NaN; //вычислительная ошибка (можно получить используя нечисловое значение в математической оперции). Но NaN ** 0 = 1
let distanceToTheSunInMeters = 10n; //±((2 в степени 53) - 1)
let firstName = 'Jack';
let lastName = "Brown";
let phrase = `Hello ${firstName} ${lastName}!`; // обратные кавычки позволяют встраивать выражения в эту строку
let isWeekend = true;
let firstNameLetter = Symbol('A');
let favouriteFood = null;
let favouriteColor = undefined;
let favouriteAnimal; // вернет undefined
let car = {
    producer: 'VW',
    model: 'Golf 4',
    engineCapacity: 1.9
};

console.log(favouriteColor)
