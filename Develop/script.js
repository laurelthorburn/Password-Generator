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

// Write password to the #password input
var writePassword = function (){
  var userInput = Number(window.prompt("Please select a password length between 8-128 characters:")); //changes from typeof string to typeof #
    userInput = Math.floor(userInput)
    console.log(userInput)
      if (isNaN(userInput) || userInput < 8 || userInput > 128 || userInput == "") {
            alert("You may only enter a number between 8-128. \nPlease rethink your life choices and try again.");
      } else { //will put out a boolean
     var hasSpecialCharacters = window.confirm("Do you want special characters?");
     var hasLowerCase = window.confirm("Do you want lower case letters?");
     var hasUpperCase = window.confirm("Do you want upper case letters?");
     var hasNumbers = window.confirm("Do you want numbers?");
         if (hasSpecialCharacters === false && hasLowerCase === false && hasUpperCase === false && hasNumbers === false){
           alert("DUDE, really???");
         }
      }
    };

 
//   var password = generatePassword(); //WHAT'S THIS? - why local? everything gets written
//   var passwordText = document.querySelector("#password"); //This refers back to the index ID, where psswd written?

//   passwordText.value = password; //what's this?

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// const aNumber = Number(window.prompt("Type a number", ""));
