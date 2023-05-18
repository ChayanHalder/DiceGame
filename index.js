let randNum1 = Math.floor(Math.random()*6+1);
let randNum2 = Math.floor(Math.random()*6+1);

document.querySelector(".img1").setAttribute("src",setImg(randNum1));
document.querySelector(".img2").setAttribute("src",setImg(randNum2));

document.querySelector("h1").innerHTML=setText(randNum1,randNum2);

function setImg(temp){
    let img = "";
    switch(temp){
        case 1:
            img="./images/dice1.png";
            break;
        case 2:
            img="./images/dice2.png";
            break;
        case 3:
            img="./images/dice3.png";
            break;
        case 4:
            img="./images/dice4.png";
            break;
        case 5:
            img="./images/dice5.png";
            break;
        case 6:
            img="./images/dice6.png";
            break;
    }
    return img;
}
function setText(n,m){
    if(n>m){
        return "🚩Player 1 Wins!";
    }else if(m>n){
        return "Player 2 Wins! 🚩";
    }else{
        return "Draw!";
    }
}