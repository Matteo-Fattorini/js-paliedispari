// Ex 1 -Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//!funzioni

//funzione che reversa una stringa

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

//funzione che controlla se una parola/frase è palindroma

function isPalindrom(string) {
  arePalindromes = false;
  if (string.includes(" ")) {
    string = string.split(" ").join("");
  }
  if (string.toLowerCase() == reverseString(string).toLowerCase()) {
    arePalindromes = true;
    return arePalindromes;
  } else {
    return arePalindromes;
  }
}

// !raccolta input

// elementi

var inputEl = document.getElementById("input");
var buttonEl = document.getElementById("button");
var firstWord = document.getElementById("first-Word");
var secondWord = document.getElementById("second-Word");
var resultEl = document.getElementById("result");

//

buttonEl.addEventListener("click", function () {
  console.log(inputEl.value);
  firstWord.innerHTML = inputEl.value;
  secondWord.innerHTML = reverseString(inputEl.value);
  if (isPalindrom(inputEl.value)) {
    resultEl.innerHTML = "Le Parole Sono Palindrome!";
  } else {
    resultEl.innerHTML = "Le Parole NoN Sono Palindrome!";
  }
});
