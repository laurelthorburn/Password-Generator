// Assignment Code - grabs button from index sheet using ID
var generateBtn = document.querySelector("#generate");

//Creating Characters (uppercase)
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var aNumber = [8-128];
//Creating object
const randomPassword = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSpecialCharacters
};

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
           alert("Hm...let's try that again, remember to pick at least one character next time.");
         }
         else if (hasSpecialCharacters === true && hasNumbers === true && hasUpperCase === true && hasLowerCase === true){
           alert("Cool, you want everything");
         }
         else if (hasSpecialCharacters === true && hasNumbers === true && hasUpperCase === true){
          alert("Cool,so no lowercase");
        }
        else if (hasSpecialCharacters === true && hasNumbers === true && hasLowerCase === true){
          alert("Cool, so no uppercase");
        }
        else if (hasSpecialCharacters === true && hasUpperCase === true && hasLowerCase === true){
          alert("Cool, so no numbers");
        }
        else if (hasNumbers === true && hasUpperCase === true && hasLowerCase === true){
          alert("Cool, so no symbols");
        }
        else if (hasSpecialCharacters === true && hasNumbers === true){
          alert("Cool, so no letters");
        }
        else if (hasUpperCase === true && hasLowerCase === true){
          alert("Cool, only letters");
        }
        else if (hasSpecialCharacters === true && hasLowerCase === true){
          alert("Cool, symbols and lowercase");
        }
        else if (hasNumbers === true && hasLowerCase === true){
          alert("Cool, numbers and lowercase");
        }
        else if (hasSpecialCharacters === true && hasUpperCase === true ){
          alert("Cool, symbols and uppercase");
        }
        else if (hasNumbers === true && hasUpperCase === true){
          alert("Cool, numbers and uppercase");
        }
      }
    };

// how do i use the true boolean to grab it... i don't want to create a crap ton of functions


//  function iDk(){
//   var password = generatePassword(); //WHAT'S THIS? - why local? everything gets written
//   var passwordText = document.querySelector("#password"); //This refers back to the index ID, where psswd written?

//   passwordText.value = password; //what's this?

// };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

