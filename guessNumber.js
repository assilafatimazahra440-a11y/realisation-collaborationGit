// function guessTheNumber (maxNumber,minNumber){
//   let persnid = prompt("Enter your name");
//   let secretNumber = Math.floor(Math.random()*(maxNumber - minNumber + 1)+ minNumber);
//   let theGuess = minNumber - 1;
//   let counter = 0;
//   while(theGuess !== secretNumber){
//     counter++;
//     theGuess = Number(prompt("Hi "+prid+ " Enter the number beetwen "+minNumber+" and "+maxNumber));
//     if (theGuess === secretNumber){
//       if(counter === 1){
//       alert ("Bravo "+persnid+ " you git it on the first try");
//                        }
//     else {
//       alert ("Bravo "+persnid+ " you guess correct");
//          }
//     break;
//         }
//         else if (theGuess < secretNumber){
//           alert ("You are so low!");
//         }
//         else{
//           alert ("You are so high");
//         }
//         if (counter === 3){
//           alert ("Sorry! "+persnid+" you reached the maximum id");
//         }
//       }
//     }
//     guessTheNumber(20,15);

let minNumber = 15;
let maxNumber = 20;
let secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let counter = 0;
let maxTries = 3;

function guessNumber() {
  let name = document.getElementById("name").value;
  let guess = Number(document.getElementById("guess").value);
  let message = document.getElementById("message");
  let tries = document.getElementById("tries");

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
}

//end

