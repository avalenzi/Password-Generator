// Assignment Code
​
var generateBtn = document.querySelector("#generate");
// var generateBtn = document.getElementById("generate");
​
// Write password to the #password input
function writePassword() {
  var params = {
    length: prompt("How long would you like your password to be?"),
    lowercase: confirm("Would you like to use lowercase characters?"),
    uppercase: confirm("Would you like to use uppercase characters?"),
    specialChars: confirm("Would you like to use special characters?"),
    numericChars: confirm("Would you like to use numeric characters?")
  };
​
const aNumber = Number(window.prompt("Type a number", ""))

  var password = generatePassword(params);
  var passwordText = document.querySelector("#password");
​
  passwordText.value = password;
}
​
function generatePassword(options) {
  if(options.uppercase){
​
  }
  return "SuperSecretPassword1098";
}
​
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function myPassword() {
  var text;
  var length = prompt("How long would you like your password to be?", "7");
  switch(length) 
    break;
  var lowerCase = prompt("Would you like to use lowercase characters", "yes");
    switch(lowerCase)
   document.getElementById("example").innerHTML = text;
 }