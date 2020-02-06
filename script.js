// Assignment Code
var generateBtn = document.querySelector("#generate");
// var generateBtn = document.getElementById("generate");
// Write password to the #password input
function writePassword() {
  var params = {
    length: prompt("How long would you like your password to be?"),
    lowercase: confirm("Would you like to use lowercase characters?"),
    uppercase: confirm("Would you like to use uppercase characters?"),
    specialChars: confirm("Would you like to use special characters?"),
    numericChars: confirm("Would you like to use numeric characters?")
  };
  var userInput = parseInt(prompt(
  ));
  function userLength() {

    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(userInput) === true) {
      alert("Password length must be provided as a number");
      return;
    }

    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (userInput < 8) {
      alert("Password length must be at least 8 characters");
      return;
    }

    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (userInput > 128) {
      alert("Password length must less than 129 characters");
      return;
    }
  }

  function lowerCase() {

    // Conditional statement to check if password is lowercase. Prompts end if this evaluates false
    if (islowerCase(userInput) === true) {
      alert("Password must contain lowercase characters");
      return;
    }
  }
  function upperCase() {

    // Conditional statement to check if password is Uppercase. Prompts end if this evaluates false
    if (isupperCase(userInput) === true) {
      alert("Password must contain uppercase characters");
      return;
    }
  }

  function specialChars() {

    // Conditional statement to check if password has special characters. Prompts end if this evaluates false
    if (specialChars(userInput) === true) {
      alert("Password must contain special characters");
      return;
    }
  }

  function numericChars() {

    // Conditional statement to check if password is numeric characters. Prompts end if this evaluates false
    if (numericChars(userInput) === true) {
      alert("Password must contain numeric characters");
      return;
    }
  }


  const aNumber = Number(window.prompt("Type a number", ""))

  var password = generatePassword(params);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(options) {
  if (options.uppercase) {
    return "SuperSecretPassword1098";
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


