// Assignment Code

//query selectors
var generateBtn = document.querySelector("#generate");
 var password = document.querySelector("#password");
 
 //characters
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!@#$%^&*()_+{}[];:<>?~";
var passwordChar = "";

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


//for generating the password
function generatePassword () {
  password.value === "";
  var randomString = "";
  var passwordLengthUser = prompt("How many characters would you like your password to be? It must be in between 8-128 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);

//password criteria
  var lowercaseCharactersChoice = confirm("Would you like to add lowercase characters?");
  var uppercaseCharactersChoice = confirm("Wanna add some uppercase characters?");
  var numericalCharactersChoice = confirm("Would you like to see some numbers?");
  var specialCharacterChoice = confirm("Would you like some special characters?");
  
//If statement incase of length not meeting criteria
if (passwordLengthUser < 8 || passwordLengthUser > 128){
  alert("This password is not between 8 and 128 charcters. Try again.");
  var passwordLengthUser = prompt("How many characters would you like your password to be? It must be in between 8-128 characters.");
}
//If statement created to make sure there is atleast one password crieria that is met.
else if (lowercaseCharactersChoice === false && uppercaseCharactersChoice === false && numericalCharactersChoice === false && specialCharacterChoice === false) {
  alert("You must choose at least one of the password criteria");
  var lowercaseCharactersChoice = confirm("Would you like to add lowercase characters?");
  var uppercaseCharactersChoice = confirm("Wanna add some uppercase characters?");
  var numericalCharactersChoice = confirm("Would you like to see some numbers? ");
  var specialCharacterChoice = confirm("Would you like some special characters?");
}

//Uses the criteria selected to generate password
  if (lowercaseCharactersChoice) {
    passwordChar += lowercaseChar;
  } 
  if (uppercaseCharactersChoice) {
    passwordChar += uppercaseChar;
  }
  if (numericalCharactersChoice) {
    passwordChar += numericalChar;
  }
  if (specialCharacterChoice) {
    passwordChar += specialChar;
  }
  
  //chooses a character at random until the password length is met.
  for (var i = 0; i < passwordLengthUser; i++) {
    randomString += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
  }
  password.value = randomString;

}

//calling generate password
generatePassword();