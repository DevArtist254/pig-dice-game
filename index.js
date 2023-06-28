const globalScoreP1 = document.getElementById("global-score-p1")
const currentScoreP1 = document.getElementById("current-score-p1")
const globalScoreP2 = document.getElementById("global-score-p2")
const currentScoreP2 = document.getElementById("current-score-p2")
const roll = document.getElementById("roll")
const hold = document.getElementById("hold")

//init state
const globalP1 = []
const currentP1 = []

const globalP2 = []
const currentP2 = []

function rollDice() {
    //if a number between 1 - 6
    const randomNumber = Math.trunc(Math.random() * 6) + 1

    console.log(randomNumber === 1);
}

function holdDice() {
    
}


hold.addEventListener('click', holdDice)
roll.addEventListener('click', rollDice)
