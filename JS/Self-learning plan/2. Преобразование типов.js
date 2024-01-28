//Строковое преобразование

let value = true;
console.log(typeof value);
console.log(typeof String(value)); //метод String() явно преобразовывает тип данных в стрингу
console.log(String(undefined));
console.log();


//Численное преобразование

console.log(typeof ('6'/'2')); // Численное преобразование происходит в математических функциях и выражениях, например, когда операция деления применяется не к числу
let string = '999';
console.log(typeof string);
console.log(typeof Number(string)); //метод Number() явно преобразовывает тип данных в числовой
console.log(Number('q')); //если строка не может быть явно приведена к числу, то результатом преобразования будет NaN
console.log(Number(undefined)); //undefined преобразуется в NaN
console.log(Number(null)); //null преобразуется в 0
console.log(Number(true)); //true преобразуется в 1
console.log(Number(false)); //false преобразуется в 0
console.log(Number('\t \n 2')); //Пробельные символы (пробелы, знаки табуляции \t, знаки новой строки \n и т. п.) по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.
console.log(Number('         24       '));
console.log();

//Логическое преобразование

console.log(Boolean(1));//метод Number() явно преобразовывает тип данных в логический
console.log(Boolean('qqq'));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean('q' / 2));
console.log(Boolean(''));


