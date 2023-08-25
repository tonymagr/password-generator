// Assignment code here
function generatePassword() {
  let validUserInput = false;
  let genPassword = "";
  let pwdLenNum;
  let randNumMult;
    
  // Index 0 = lower case. 
  // Index 1 = upper case. 
  // Index 2 = numeric. 
  // Index 3 = special characters. 
  const charTypeSelected = [false,false,false,false];
  const charTypeText = ["lower case", "upper case", "numeric", "special"];
  const charTypeString = ["abcdefghijklmnopqrstuvwxyz",
                          "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                          "0123456789",
                          "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  let allCharTypes = "";
  let charCount = 0;
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
        alert("Must be a number.");
      } else if (pwdLenNum < 8 || pwdLenNum > 128) {
        alert("Must be at least 8 and at most 128 characters.");
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
  // Ensure selected character types are included in password, 
  //   and build all-types string for only selected types
  for (i = 0; i < 4; i++) {
    if (charTypeSelected[i]) {
      randNumMult = Math.trunc(charTypeString[i].length * Math.random());
      genPassword = genPassword + charTypeString[i].charAt(randNumMult);
      allCharTypes = allCharTypes + charTypeString[i];
      charCount++
    }
  }

  // Build rest of password to correct length from all types
  i = charCount + 1;
  for (charCount = i; charCount < (pwdLenNum + 1); charCount++) {
    randNumMult = Math.trunc(allCharTypes.length * Math.random());
    genPassword = genPassword + allCharTypes.charAt(randNumMult);
  }

  return genPassword;
}   // End function generatePassword()

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