//Exercise 1
function add(one, two) {
    return one + two;
}

function multiply(one, two) {
    return one * two;
}

console.log(add(multiply(36325, 9824), 777))

//Exercise 2

function areArraysSame(one, two) {
    if (one.join('') === two.join('')) {
        return true
    }
        return false
}

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

function areArraysSame1(one, two) {
    for (var i = 0; i < one.length; i++) {
        if (one[i] !== two[i] || one.length !== two.length) {
            return false;
        }
    }
            return true;
}

console.log('_______________________________');
console.log(areArraysSame1([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame1([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame1([1, 2, 3], [1, 2, 3, 4]));