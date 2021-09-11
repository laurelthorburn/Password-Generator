// // Assignment Code - grabs buttons from index sheet using ID
var generateBtn = document.querySelector("#generate");

var generateCopy = document.querySelector("#copy");

//Creating Characters (uppercase)
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//Creating global variable for final password and content
var userPassword = function generatePassword(){
  var allCharacters = [];
  var finalPassword = '';

  //Initial user prompt, error msg if userInput criteria not within set range
  var userInput = window.prompt("Please select a password length between 8 and 128 characters:"); 
        if (isNaN(userInput) || userInput < 8 || userInput > 128 || userInput == "") {
            alert("You may only enter a number between 8 and 128. \nPlease rethink your life choices and try again.");
        }
// User prompts for which characters user wants in their password
        else {
              if(window.confirm("Do you want special characters? If so, click 'OK'.")){
                Array.prototype.push.apply(allCharacters, specialCharacters);
              }
              if(window.confirm("Do you want numbers? If so, click 'OK'.")){
                Array.prototype.push.apply(allCharacters, numbers);
              }
              if(window.confirm("Do you want lowercase letters? If so, click 'OK'." )){
                Array.prototype.push.apply(allCharacters, lowerCase);
              }
              if(window.confirm("Do you want uppercase letters? If so, click 'OK'.")){
                Array.prototype.push.apply(allCharacters, upperCase);
              }
// if user picks all false/'cancel', kick out error/try again msg
            if (allCharacters.length === 0){
                alert("Hm...let's try that again, remember to pick at least one character type next time.");
              } 
//Creating formula for random character sequence 
            else {
              for(var i=0; i<userInput; i++){
                var randomCharacters = Math.floor(Math.random()*allCharacters.length);
                finalPassword += allCharacters[randomCharacters];
              }
        }
}

//puts final password in main page
document.getElementById("password").innerHTML = finalPassword;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", userPassword);

//Creating copy function
var finalCopy = function(){
  var copyText = document.getElementById("password");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
  console.log("Thanks for checking out my password generator!");
};

// For fun, added a copy button
generateCopy.addEventListener("click", finalCopy);

