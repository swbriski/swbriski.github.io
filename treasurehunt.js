var crown = Math.floor(Math.random()*16)
var skull = Math.floor(Math.random()*16)
var skull2 = Math.floor(Math.random()*16)
var clickCounter = 5
const treasure = (location) => {
    if(clickCounter > 0){
     clickCounter --;
        if(location === crown){
            document.getElementById(location).innerHTML = "👑";
            alert ("Congratulations! You have found the treasure!")
        } else if(location === skull){
            document.getElementById(location).innerHTML = "☠️";
            alert ("You have found a skull! Try again!")
        } else if(location === skull2){
            document.getElementById(location).innerHTML = "☠️";
            alert ("You have found a skull! Try again!")
        } else {
            document.getElementById(location).innerHTML = "🌴"
        }
    }
    document.getElementById("clicks").textContent = "Searches left: " + clickCounter
        if(clickCounter === 0) {
            return document.getElementById("message").textContent = "No more clicks left"
        } else {
            return document.getElementById("message").textContent = "No more clicks left"
        }
  }