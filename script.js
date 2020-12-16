// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwordField = document.querySelector("#password");


var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSetLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var special = "!@#$%&";


function getPassword(){
  var length = prompt("How long would you like your password to be (between 8 and 128 characters)?");
  
  if((length < 8) || (length > 128)){
    alert("Please enter a number between 8 and 128");
    getPassword();
  }
  
  var hasUpperC = confirm("Click OK to potentially include upper case letters.");
  var hasLowerC = confirm("Click on OK to potentially include lower case letters.");
  var hasNum = confirm("Click OK to potentially include numbers.");
  var hasSpecial = confirm("Cick OK to potentialy include special characters.");

  var passWordEl = '';

// All possible characters
  if((hasUpperC === true) && (hasLowerC === true) && (hasNum === true) && (hasSpecial === true)){
    var possibleChars = charSetUpper + charSetLower + num + special;

    for(var i = 0; i <= length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

// Only upper-case letters
  if((hasUpperC === true) && (hasLowerC === false) && (hasNum === false) && (hasSpecial === false)){
    var possibleChars = charSetUpper;

    for(var i = 0; i <= length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

// Only lower-case letters
  if((hasUpperC === false) && (hasLowerC === true) && (hasNum === false) && (hasSpecial === false)){
    var possibleChars = charSetLower;

    for(var i = 0; i <= length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

  // Only numbers
  if((hasUpperC === false) && (hasLowerC === false) && (hasNum === true) && (hasSpecial === false)){
    var possibleChars = num;

    for(var i = 0; i <= length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

  // Only special characters
  if((hasUpperC === false) && (hasLowerC === false) && (hasNum === false) && (hasSpecial === true)){
      var possibleChars = special;
  
      for(var i = 0; i <= length; i++){
        passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      } 
  }

  // Upper and lower-case letters
  if((hasUpperC === true) && (hasLowerC === true) && (hasNum === false) && (hasSpecial === false)){
    var possibleChars = charSetUpper + charSetLower;

    for(var i = 0; i <= length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

  // Upper-case letters and numbers
  if((hasUpperC === true) && (hasLowerC === false) && (hasNum === true) && (hasSpecial === false)){
    var possibleChars = charSetUpper + num;

    for(var i = 0; i <= length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

  // Upper-case letters and special characters
  if((hasUpperC === true) && (hasLowerC === false) && (hasNum === false) && (hasSpecial === true)){
    var possibleChars = charSetUpper + special;

    for(var i = 0; i <= length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

  // Lower-case letters and numbers
  if((hasUpperC === false) && (hasLowerC === true) && (hasNum === true) && (hasSpecial === false)){
    var possibleChars = charSetUpper + special;

    for(var i = 0; i <= length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

   // Lower-case letters and special characters
   if((hasUpperC === false) && (hasLowerC === true) && (hasNum === false) && (hasSpecial === true)){
    var possibleChars = charSetUpper + special;

    for(var i = 0; i <= length; i++){
      passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    } 
  }

    // Numbers and special characters
    if((hasUpperC === false) && (hasLowerC === false) && (hasNum === true) && (hasSpecial === true)){
      var possibleChars = charSetUpper + special;
  
      for(var i = 0; i <= length; i++){
        passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      } 
    }

     // All but upper-case 
     if((hasUpperC === false) && (hasLowerC === true) && (hasNum === true) && (hasSpecial === true)){
      var possibleChars = charSetLower + num + special;
  
      for(var i = 0; i <= length; i++){
        passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      } 
    }

    // All but lower-case 
    if((hasUpperC === true) && (hasLowerC === false) && (hasNum === true) && (hasSpecial === true)){
      var possibleChars = charSetUpper + num + special;
  
      for(var i = 0; i <= length; i++){
        passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      } 
    }

    // All but numbers
    if((hasUpperC === true) && (hasLowerC === true) && (hasNum === false) && (hasSpecial === true)){
      var possibleChars = charSetUpper + charSetLower + special;
  
      for(var i = 0; i <= length; i++){
        passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      } 
    }

    // All but special characters
       if((hasUpperC === true) && (hasLowerC === true) && (hasNum === true) && (hasSpecial === false)){
        var possibleChars = charSetUpper + charSetLower + num;
    
        for(var i = 0; i <= length; i++){
          passWordEl += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        } 
      }

      // Null choices
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