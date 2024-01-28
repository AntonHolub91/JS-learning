var availableWord = ['House', 'wife', 'cat', 'dog', 'family']
var word = availableWord[Math.floor(Math.random() * availableWord.length)]
word = word.toLowerCase();
console.log(word);

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray.push('_');
}

var remainingLetters = word.length;
var availableMistakes = 10;
var playerName = prompt('Enter your name');


while (remainingLetters > 0 && availableMistakes > 0) {
    if (playerName === null) {
        break;
    }
    alert(playerName + ', this is the unknown word:    ' + answerArray.join(' '));
    var guess = prompt(playerName + ", enter your letter");
    guess = guess.toLowerCase();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Answer can\'t be empty and can\'t contain more than one symbol');
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray.indexOf(guess) !== -1) {
                    break;
                } else {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }
        availableMistakes--;
        console.log(availableMistakes);
    }
}
if (remainingLetters === 0) {
    alert('Grac! You have just guessed the word!')
} else if (availableMistakes === 0) {
    alert('Game over! You spent all you tries!')
} else {
    alert('Return to us later!')
}