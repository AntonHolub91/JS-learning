// Exersise 1
var bodyPart = ['head', 'face', 'nose', 'body'];
var adjective = ['stupid', 'dull', 'ridiculous', 'ugly'];
var noun = ['bitch', 'faggot', 'pig', 'retard', 'idiot']
var insult = ['Your', bodyPart[Math.floor(Math.random() * bodyPart.length)], 'looks like', adjective[Math.floor(Math.random() * adjective.length)], noun[Math.floor(Math.random() * noun.length)] + '!!!'].join(' ');
console.log(insult)

// Exersise 2
var bodyPart = ['head', 'face', 'nose', 'body'];
var randomBodyPart = bodyPart[Math.floor(Math.random() * bodyPart.length)];
var adjective = ['stupid', 'dull', 'ridiculous', 'ugly'];
var randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
var noun = ['bitch', 'faggot', 'pig', 'retard', 'idiot']
var randomNoun = noun[Math.floor(Math.random() * noun.length)]
var insult = 'Your ' + randomBodyPart + ' looks like ' + randomAdjective + ' ' + randomNoun + '!!!'
console.log(insult)

// Exersise 4
var numbers = [3, 2, 1];
console.log(numbers.join(' больше, чем '));

// var numbers = [3, 2, 1];
// var add = 'больше, чем';
// var del1 = numbers.shift();
// var del2 = numbers.pop();
// numbers.unshift(add);
// numbers.unshift(del1);
// numbers.push(add);
// numbers.push(del2)
// console.log(numbers.join(' '))





