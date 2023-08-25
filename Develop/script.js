// Assignment code here
let validUserInput = false;

function generatePassword() {
  let genPassword = "";
  let pwdLenNum;
  let responseCode;
  let allStrings = "";
  let charCount = 0;
  let charTypeString = ["abcdefghijklmnopqrstuvwxyz",+
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",+
                        "0123456789",+
                        "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
    

  // Index 0 = lower case. 
  // Index 1 = upper case. 
  // Index 2 = numeric. 
  // Index 3 = special characters. 
  const charTypeSelected = [false,false,false,false];
  const charTypeText = ["lower case", "upper case", "numeric", "special"];
  let continuing = true;

  // Input password length
  while (!validUserInput) {
    let pwdLen = prompt("Password Length?\n(Between 8 and 128 characters)");
    if (pwdLen === null) {
      return "No password generated";
    } else {
      // Converts to a number
      pwdLenNum = +pwdLen;
      if (isNaN(pwdLenNum)) {
        responseCode = alert("Must be a number.");
      } else if (pwdLenNum < 8 || pwdLenNum > 128) {
        responseCode = alert("Must be at least 8 and at most 128 characters.");
      } else {
        validUserInput = true;
      }
    }
  }

  // Input character types

  // Index 0 = lower case. 
  // Index 1 = upper case. 
  // Index 2 = numeric. 
  // Index 3 = special characters. 
  while (!charTypeSelected[0] && !charTypeSelected[1] && !charTypeSelected[2] && !charTypeSelected[3] && continuing) {
    for (let i = 0; i < 4; i++) {
      charTypeSelected[i] = confirm("Include " + charTypeText[i] + " characters?\n(OK = Yes, Cancel = No)");
      // console.log(charTypeSelected[i], charTypeText[i]);
    }

    if (!charTypeSelected[0] && !charTypeSelected[1] && !charTypeSelected[2] && !charTypeSelected[3]) {
      continuing = confirm("No character types selected. Do you want to continue?\n(OK = Yes, Cancel = No)");
      if (!continuing) {
        return "No password generated";
      }
    }
  }
  
  // Generate password
  for (i = 0; i < 4; i++) {
    if (charTypeSelected[i]) {
      console.log(Math.random());
      console.log()
    }
  }


  return genPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);