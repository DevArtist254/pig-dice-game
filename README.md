const player1 = []
const player2 = []

//Rolls dice fn

user rolls dice () => {
 const diceNumber [0 - 6] = Math.singleValue(Math.random() * 10)

 if(diceNumber <= 1) {
    switchPlayer()
 }else{
    pushToCurrentPlayer()
 }
}

//Updates the UI
<>
    <h1 display{score}>
    <img src="dice${diceNumber}" >
</h1>