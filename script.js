
let weaponX
let visWeapon
let winStatus
let money = 500
let endGame
let endGameColor 

rock = 1
paper = 2
scisccors = 3

document.getElementById("rock").onclick = function(){
    
    if(money == 1000){
        money = 500
        endGameColor.style.color = "black"
    }
    else if (money == 0){
        money = 500
        endGameColor.style.color = "black"
    }

    weaponX = Math.floor(Math.random() * 3) + 1

    if(weaponX == 1){
        visWeapon = "Rock"
    }
    else if (weaponX == 2){
        visWeapon = "Paper"
    }
    else {
        visWeapon = "Scissors"
    }

    if(weaponX == 1){
        winStatus = "Draw"
    }
    else if(weaponX == 2){
        winStatus = "You Lose!"
    }
    else if(weaponX == 3){
        winStatus = "You Win!"
    }


    document.getElementById("weaponTwo").innerHTML = visWeapon
    document.getElementById("winStatus").innerHTML = winStatus

    let winSta = document.getElementById("winStatus")


    if (winStatus == "You Win!"){
        winSta = winSta.style.color = "green"
    }
    else if(winStatus == "You Lose!"){
        winSta = winSta.style.color = "red"
    }
    else if(winStatus == "Draw"){
        winSta = winSta.style.color = "blue"
    }

    if (winStatus == "You Win!"){
        money += 100
    }
    else if (winStatus == "You Lose!"){
        money -= 100
    }

    document.getElementById("money").innerHTML = money

    endGameColor = document.getElementById("gameOver")

    if (money == 1000){
        endGame = "Game Over, You Win the Game!"
        endGameColor.style.color = "green"
        
    }
    else if (money == 0){
        endGame = "Game Over, You're a Loser"
        endGameColor.style.color = "red"
    }
    else if (money => 100 && money <= 900){
        endGame = ""
    }

    document.getElementById("gameOver").innerHTML = endGame

}

document.getElementById("paper").onclick = function(){

    if(money == 1000){
        money = 500
        endGameColor.style.color = "black"
    }
    else if (money == 0){
        money = 500
        endGameColor.style.color = "black"
    }
    

    weaponX = Math.floor(Math.random() * 3) + 1

    if(weaponX == 1){
        visWeapon = "Rock"
    }
    else if (weaponX == 2){
        visWeapon = "Paper"
    }
    else {
        visWeapon = "Scissors"
    }

    if(weaponX == 1){
        winStatus = "You Win!"
    }
    else if(weaponX == 2){
        winStatus = "Draw"
    }
    else if(weaponX == 3){
        winStatus = "You Lose!"
    }


    document.getElementById("weaponTwo").innerHTML = visWeapon
    document.getElementById("winStatus").innerHTML = winStatus

    let winSta = document.getElementById("winStatus")


    if (winStatus == "You Win!"){
        winSta = winSta.style.color = "green"
    }
    else if(winStatus == "You Lose!"){
        winSta = winSta.style.color = "red"
    }
    else if(winStatus == "Draw"){
        winSta = winSta.style.color = "blue"
    }

    if (winStatus == "You Win!"){
        money += 100
    }
    else if (winStatus == "You Lose!"){
        money -= 100
    }

    document.getElementById("money").innerHTML = money

    endGameColor = document.getElementById("gameOver")

    if (money == 1000){
        endGame = "Game Over, You Win the Game!"
        endGameColor.style.color = "green"
    }
    else if (money == 0){
        endGame = "Game Over, You're a Loser"
        endGameColor.style.color = "red"
    }
    else if (money => 100 && money <= 900){
        endGame = ""
    }

    document.getElementById("gameOver").innerHTML = endGame

   

}

document.getElementById("scissors").onclick = function(){
    
    if(money == 1000){
        money = 500
        endGameColor.style.color = "black"
    }
    else if (money == 0){
        money = 500
        endGameColor.style.color = "black"
    }

    weaponX = Math.floor(Math.random() * 3) + 1

    if(weaponX == 1){
        visWeapon = "Rock"
    }
    else if (weaponX == 2){
        visWeapon = "Paper"
    }
    else {
        visWeapon = "Scissors"
    }

    if(weaponX == 1){
        winStatus = "You Lose!"
    }
    else if(weaponX == 2){
        winStatus = "You Win!"
    }
    else if(weaponX == 3){
        winStatus = "Draw"
    }


    document.getElementById("weaponTwo").innerHTML = visWeapon
    document.getElementById("winStatus").innerHTML = winStatus

    let winSta = document.getElementById("winStatus")


    if (winStatus == "You Win!"){
        winSta = winSta.style.color = "green"
    }
    else if(winStatus == "You Lose!"){
        winSta = winSta.style.color = "red"
    }
    else if(winStatus == "Draw"){
        winSta = winSta.style.color = "blue"
    }

    if (winStatus == "You Win!"){
        money += 100
    }
    else if (winStatus == "You Lose!"){
        money -= 100
    }

    document.getElementById("money").innerHTML = money

    endGameColor = document.getElementById("gameOver")

    if (money == 1000){
        endGame = "Game Over, You Win the Game!"
        endGameColor.style.color = "green"
    }
    else if (money == 0){
        endGame = "Game Over, You're a Loser"
        endGameColor.style.color = "red"
    }
    else if (money => 100 && money <= 900){
        endGame = ""
    }

    document.getElementById("gameOver").innerHTML = endGame


}




