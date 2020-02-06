// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var updercase = lowercase.toUpperCase();
var special = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numbners = "0123456789";

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
  while (
    params.length < 8 ||
    params.length > 128 ||
    params.length === undefined
  ) {
    params.length = parseInt(
      prompt("How long would you like your password to be? Greater than 8 but less than 128."
      ),
    )
  }
  const aNumber = Number(window.prompt("Type a number", ""))

  var password = generatePassword(params);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(options) {
  var password = ""

  for (let i = 0; i < options.length; i++) {
    if (options.uppercase) {
      password += getRandomValue(uppercase);
    }
    if (options.lowercase) {
      password += getRandomValue(lowercase);
    }
    if (options.specialchars) {
      password += getRandomValue(specialchars);
    }
    if (options.numericchars) {
      password += getRandomValue(numericchars);
    }
  }

  return password.slice(0, options.length);
}

generateBtn.addEventListener("click", writePassword)

function getRandomValue(str); {
  return str[Math.floor(Math.random()) * str.length];
}

