function Hit1(){
    var randomNumber = Math.floor(Math.random() * 13) + 1;
    var card;
    
    switch(randomNumber) {
        case 1:
            card = "Ace";
            break;
        case 11:
            card = "Jack";
            break;
        case 12:
            card = "Queen";
            break;
        case 13:
            card = "King";
            break;
        default:
            card = randomNumber.toString();
            break;
    }

    document.getElementById("card1").textContent = card;
}


function dturn(){}
