// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creating Characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function randomLower(){
  return String.lowerCase(Math.floor(Math.random() * 26));
}

function randomUpper(){
  return String.upperCase(Math.floor(Math.random() * 26));
}

function randomNumber(){
  return String.numbers(Math.floor(Math.random() * 9));
}

function randomSpecialCharacters(){
  return String.specialCharacters(Math.floor(Math.random() * 33));
}

console.log(randomUpper());

// // Write password to the #password input
// var writePassword = function (){
//   window.prompt("Please select a password length between 8-128 characters:");
// };
 
//   var password = generatePassword(); //WHAT'S THIS? - why local?
//   var passwordText = document.querySelector("#password"); //This refers back to the index ID, where psswd written?

//   passwordText.value = password; //what's this?

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // const aNumber = Number(window.prompt("Type a number", ""));
