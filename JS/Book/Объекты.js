// Exersise 1
var scores = {};
scores.Tom = 0;
scores.Jerry = 0;
console.log(scores);
scores.Tom += 10;
scores.Jerry += 5;
console.log(scores);

// Exersise 2
var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};
console.log(myCrazyObject["some array"][2].number)
