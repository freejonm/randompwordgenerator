// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwordField = document.querySelector("#password");


var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNum = "0123456789";
var charSpecial = "!@#$%&";


function getPassword(){
  var length = prompt("How long would you like your password to be (between 8 and 128 characters)?");
  
  if((length < 8) || (length > 128)){
    alert("Please enter a number between 8 and 128");
    getPassword();
  }
  
  var hasUpperC = confirm("Click OK to add upper case letters to the potential characters. Cancel to exclude.");
  var hasLowerC = confirm("Click on OK to add lower case letters to the potential characters. Cancel to exclude.");
  var hasNum = confirm("Click OK to add numbers to the potential characters. Cancel to exclude.");
  var hasSpecial = confirm("Cick OK to add special characters to potential characters. Cancel to exclude.");

  var passWordEl = '';

  function randomize(possibleChars){
    for(var i = 0; i < length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

// All possible characters
  if((hasUpperC === true) && (hasLowerC === true) && (hasNum === true) && (hasSpecial === true)){
    var possibleChars = charUpper + charLower + charNum + charSpecial;
    randomize(possibleChars);
  }

// Only upper-case letters
  if((hasUpperC === true) && (hasLowerC === false) && (hasNum === false) && (hasSpecial === false)){
    var possibleChars = charUpper;
    randomize(possibleChars);
  }

// Only lower-case letters
  if((hasUpperC === false) && (hasLowerC === true) && (hasNum === false) && (hasSpecial === false)){
    var possibleChars = charLower;
    randomize(possibleChars);
  }

  // Only numbers
  if((hasUpperC === false) && (hasLowerC === false) && (hasNum === true) && (hasSpecial === false)){
    var possibleChars = charNum;
    randomize(possibleChars);
  }

  // Only special characters
  if((hasUpperC === false) && (hasLowerC === false) && (hasNum === false) && (hasSpecial === true)){
      var possibleChars = charSpecial;
      randomize(possibleChars);
  }
  
  // Upper and lower-case letters
  if((hasUpperC === true) && (hasLowerC === true) && (hasNum === false) && (hasSpecial === false)){
    var possibleChars = charUpper + charLower;
    randomize(possibleChars);
  }

  // Upper-case letters and numbers
  if((hasUpperC === true) && (hasLowerC === false) && (hasNum === true) && (hasSpecial === false)){
    var possibleChars = charUpper + charNum;
    randomize(possibleChars);
  }

  // Upper-case letters and special characters
  if((hasUpperC === true) && (hasLowerC === false) && (hasNum === false) && (hasSpecial === true)){
    var possibleChars = charUpper + charSpecial;
    randomize(possibleChars);
  }

  // Lower-case letters and numbers
  if((hasUpperC === false) && (hasLowerC === true) && (hasNum === true) && (hasSpecial === false)){
    var possibleChars = charLower + charNum;
    randomize(possibleChars);
  }

   // Lower-case letters and special characters
   if((hasUpperC === false) && (hasLowerC === true) && (hasNum === false) && (hasSpecial === true)){
    var possibleChars = charLower + charSpecial;
    randomize(possibleChars);
  }
    // // Numbers and special characters
    if((hasUpperC === false) && (hasLowerC === false) && (hasNum === true) && (hasSpecial === true)){
      var possibleChars = charNum + charSpecial;
      randomize(possibleChars);
    }

    //  // All but upper-case 
     if((hasUpperC === false) && (hasLowerC === true) && (hasNum === true) && (hasSpecial === true)){
      var possibleChars = charLower + charNum + charSpecial;
      randomize(possibleChars);
    }
  
    // // All but lower-case 
    if((hasUpperC === true) && (hasLowerC === false) && (hasNum === true) && (hasSpecial === true)){
      var possibleChars = charUpper + charNum + charSpecial;
      randomize(possibleChars);
    }

    // // All but numbers
    if((hasUpperC === true) && (hasLowerC === true) && (hasNum === false) && (hasSpecial === true)){
      var possibleChars = charUpper + charLower + charSpecial;
      randomize(possibleChars);
    }

    // // All but special characters
    if((hasUpperC === true) && (hasLowerC === true) && (hasNum === true) && (hasSpecial === false)){
        var possibleChars = charUpper + charLower + charNum; 
        randomize(possibleChars);
      }
    

    //   // Null choices
      if((hasUpperC === false) && (hasLowerC === false) && (hasNum === false) && (hasSpecial === false)){
        alert("You must choose at least one type of character.");
        getPassword();
        } 
    
  pwordField.textContent = "Your password is " + passWordEl;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  getPassword();
})