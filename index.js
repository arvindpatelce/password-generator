const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordButton = document.getElementById("button-el")
let output1 = document.getElementById("output1")
let output2 = document.getElementById("output2")

function newPassword() {
    let temp1 = generatePW()
    output1.textContent = temp1
    let temp2 = generatePW()
    output2.textContent = temp2

}

function generatePW() {
    let string =  " "
    for(let i = 0; i < 10 ;i++){
        string += characters[Math.floor(Math.random()*characters.length)]
    }
    return string

}
