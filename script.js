// Assignment code here
var choice = [];
var pswdValue =[];
var specialCase =["!","@","#","$","%","^","&","*","(",")","?","/",",",".","<",">","-","_","|"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e"," f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];



function takingInput(){
  
  choice = [];
  pswdValue = parseInt(prompt("How many characters would you like your password to contain?"));
  if(pswdValue < 8 || pswdValue > 128 || isNaN(pswdValue) ){       // for checking that user enters and integer within range defined
    alert("Wrong input");
    return false;
  }

  if(confirm("Click OK if you would like to include special characters")){
    choice = choice.concat(specialCase);
    
  }

  if(confirm("Click OK if you would like to include numbers")){
    choice = choice.concat(number);
    
  }
  
  if(confirm("Click OK if you would like to include lower case letters")){
    choice = choice.concat(lowerCase);
  
  }
  
  if(confirm("Click OK if you would like to include uppper case letters")){
    choice = choice.concat(upperCase);
    
  }
  
}

function generatePassword(){

  var password = "";
  for(var i = 0; i < pswdValue; i++){
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex];
  }
  return password;

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var check = takingInput();
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
