let guessVal = Math.ceil(Math.random() * 100)
console.log(guessVal)
let messageEl = document.getElementById("message")




function checkNumber() {
    let userInputVal = parseInt(document.getElementById("userInput").value)
    console.log(userInputVal)
    if (userInputVal === guessVal) {
        messageEl.textContent = "Congratulations! You got it right!"
    }

   else if (userInputVal < guessVal) {
        messageEl.textContent = "Tooo Low"
    }

    else{
        messageEl.textContent = "Tooo High"
    }
}