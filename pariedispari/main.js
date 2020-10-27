// Ex 2 -Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//!funzioni

//funzione che genera un numero random da 1 a 5

function randomNum(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

console.log(randomNum(0, 5));

// pari o dispari?

function isEven(num) {
  return num % 2 == 0;
}

console.log(isEven(6));

// !raccolta input

// elementi

var inputEl = document.getElementById("input");
var buttonEl = document.getElementById("button");
var winnerEl = document.getElementById("winner");
var resultEl = document.getElementById("result");

//

buttonEl.addEventListener("click", function () {
  // validazioni
  if (
    inputEl.value == "" ||
    parseInt(inputEl.value) > 5 ||
    parseInt(inputEl.value) < 1 ||
    isNaN(inputEl.value) ||
    (!document.getElementById("even").checked &&
      !document.getElementById("odd").checked)
  ) {
    alert(
      "Sicuro di aver messo un numero da 1 a 5? Hai selezionato pari o dispari?"
    );
  } else {
    //quale ha selezionato tra pari o dispari?
    evenToggle = false;
    if (document.getElementById("even").checked) {
      evenToggle = true;
    }

    randomNumComputer = randomNum(1, 5);
    summed = parseInt(randomNumComputer) + parseInt(inputEl.value);

    if (isEven(summed)) {
      resultEl.innerHTML =
        "Il computer ha tirato un " +
        randomNumComputer +
        " che sommato al tuo da " +
        summed +
        " che è pari!";
    } else {
      resultEl.innerHTML =
        "Il computer ha tirato un " +
        randomNumComputer +
        " che sommato al tuo da " +
        summed +
        " che è dispari!";
    }

    // vincitore o no?

    if ((isEven(summed) && evenToggle) || (!isEven(summed) && !evenToggle)) {
      winnerEl.innerHTML = "Hai vinto!";
    } else {
      winnerEl.innerHTML = "Hai perso!";
    }
  }
});
