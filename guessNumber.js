function guessNumber() {
    let name = document.getElementById("name").value;
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");
    let tries = document.getElementById("tries");
}
let minNumber = 15;
let maxNumber = 20;
let secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let counter = 0;
let maxTries = 3;
