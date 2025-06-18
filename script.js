const min = 1;
const max = 100;
let randomNum = Math.floor((Math.random() * max) + min);
let attempts = 0;
let gameOn = true;
let value;

while(gameOn){
    value = window.prompt("Enter A Number Between 1 -100: ");

    if(value < 1 || value > 100){
        window.alert("Invalid Number.");
    }
    else if(value < randomNum){
        window.alert("Number is too low");
    }
    else if(value > randomNum){
        window.alert("Number is too high");
    }
    else{
        window.alert(`Your enterd number ${value} is matching with genarated value ${randomNum}, you tried ${attempts} attempts`);
        gameOn = false;
    }
    attempts++;
}