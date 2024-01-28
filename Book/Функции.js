var randomElementFromList = function (list) {
    return list[Math.floor(Math.random() * list.length)]
}

var generateRandomInsult = function () {
    var randomBodyParts = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
    var randomInsult = "У тебя " + randomElementFromList(randomBodyParts) + " словно " + randomElementFromList(randomAdjectives) + " " + randomElementFromList(randomWords) + "!!!";
    console.log(randomInsult);
}

generateRandomInsult()
generateRandomInsult()
generateRandomInsult()
generateRandomInsult()
generateRandomInsult()

function fifthLetter(name) {
    if (name.length < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name[4] + ".";
};

console.log(fifthLetter('Anta'));