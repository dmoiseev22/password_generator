
let symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randomNumber = ""

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let password3El = document.getElementById("password3")
let password4El = document.getElementById("password4")


function generatePasswords() {
    
    var passwordLength = window.prompt("Set password length");
    
    password1El.textContent = ""
    password2El.textContent = ""
    password3El.textContent = ""
    password4El.textContent = ""
    
    for (let i = 0; i < passwordLength ; i++) {
        randomNumber = Math.floor ( Math.random() * symbols.length)
        
        password1El.textContent += symbols[randomNumber]
    }
    for (let i = 0; i < passwordLength ; i++) {
        randomNumber = Math.floor ( Math.random() * symbols.length)
        password2El.textContent += symbols[randomNumber]
    }
    for (let i = 0; i < passwordLength ; i++) {
        randomNumber = Math.floor ( Math.random() * symbols.length)
        password3El.textContent += symbols[randomNumber]     
    }
    for (let i = 0; i < passwordLength ; i++) {
        randomNumber = Math.floor ( Math.random() * symbols.length)
        password4El.textContent += symbols[randomNumber]
    }
}

function copyPassword1() {
  /* Get the text field */
  let copyText = document.getElementById("password1");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}


// function copyPassword1() {
//  let element = document.getElementById("password1"); //select the element
//  let elementText = element.textContent; //get the text content from the element
//  console.log(elementText);
//  navigator.clipboard.writeText(elementText); //use the copyText function below
// }
