// Assignment Code - grabs button from index sheet using ID
var generateBtn = document.querySelector("#generate");

//Creating Characters (uppercase)
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var aNumber = [8-128];

// Creating function that generates random characters
function randomLower(){
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function randomUpper(){
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomNumber(){
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomSpecialCharacters(){
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

console.log(randomSpecialCharacters()); //checking function works correctly

// Write password to the #password input
var writePassword = function (){
  window.prompt("Please select a password length between 8-128 characters:");
}; if(aNumber == NaN || aNumber < 8 || aNumber > 128 || aNumber == ""){
window.prompt("You may only enter a number between 8-128. \nPlease try again:");
} else {
  alert("Woo!");
};
 
//   var password = generatePassword(); //WHAT'S THIS? - why local?
//   var passwordText = document.querySelector("#password"); //This refers back to the index ID, where psswd written?

//   passwordText.value = password; //what's this?

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// const aNumber = Number(window.prompt("Type a number", ""));
