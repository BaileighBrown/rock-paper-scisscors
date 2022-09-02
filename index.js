const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
let userChoice 
let computerChoice 
let result
const possibleChoices = document.querySelectorAll('button');


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
  userChoice =  e.target.id
  yourChoiceDisplay.innerHTML = userChoice
  generateComputeChoice()
  getResult()
}))

function generateComputeChoice() {
    const randomNumber = Math.floor(Math.random() * 3) // or use possibleChoices.length
 
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw'
    } 
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lost!'
    }
    resultDisplay.innerHTML = result
}