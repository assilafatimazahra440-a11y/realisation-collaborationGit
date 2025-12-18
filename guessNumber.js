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

    if (!name) {
    message.textContent = "Please enter your name!";
    return;
  }

  counter++;

  if (guess === secretNumber) {
    message.textContent = counter === 1
      ? "Bravo " + name + "! First try 👏"
      : "Bravo " + name + "! You guessed it 🎉";
    return;
  }

  if (counter === maxTries) {
    message.textContent = "Sorry " + name + ", you reached the maximum tries 😢";
    return;
  }

  if (guess < secretNumber) {
    message.textContent = "Too low ⬇️";
  } else {
    message.textContent = "Too high ⬆️";
  }
  

  tries.textContent = "Try: " + counter + " / " + maxTries;


