function hit1(){
  var randomNumber = Math.floor(Math.random * 2) + 1;
  if (randomNumber === 1) document.getElementById("card1").textContent= "ace";
  document.getElementById("card2").textContent="none";
}

function dturn(){}
