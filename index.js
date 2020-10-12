var randomNumber = Math.floor((Math.random() * 6) + 1);
//alert(randomNumber);
var randomDiceImage = "dice"+randomNumber+".png";
//alert(randomDiceImage);
var randomImageSource ="images/"+randomDiceImage;
document.querySelector("img").setAttribute("src",randomImageSource);
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomImageSource1 ="images/"+randomDiceImage1;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);

if(randomNumber==randomNumber1)
{
  document.querySelector("h1").innerHTML ="DRAW";
}
else if(randomNumber>randomNumber1)
{
  document.querySelector("h1").innerHTML ="🏅PLAYER 1 WINS";
}
else{
  document.querySelector("h1").innerHTML ="PLAYER 2 WINS🏅";
}
