function Hit1(){
    var randomNumber = Math.floor(Math.random() * 1) + 1;
    var displayText = (randomNumber === 1) ? "Ace" : randomNumber;
    document.getElementById("card1").textContent = displayText;

}

function dturn(){}
