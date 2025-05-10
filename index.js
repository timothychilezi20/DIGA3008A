//Conditionals control behaviour in JavaScript
let randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);

if (randomNumber < 20){
    console.log("Too low, try again!");
} else if (randomNumber === 20){
    console.log("Equal");
}
else {
    console.log("Too High, Try Again");
}

//Switch
let day = "Christmas";

switch(day){
    case "Sunday":
        console.log("Happy Sunday!");
        break;
    case "Spoon":
        console.log("That is not a day!");
        break;
    default:
    console.log("It must be a special day");
}

function getRandomNumber(){
    let random = Math.floor(Math.random() * 10); 
    console.log(random); 
}

//call 
getRandomNumber(); 

function getRandomNumberTwo(num){
    let random = Math.floor(Math.random() * num); 
    console.log(random); 
}

getRandomNumberTwo(200);

function getRandomNumberThree(num){
    let random = Math.floor(Math.random() * num);
    return random;
}

console.log(getRandomNumberThree()); 

var human = {
    age: 30, 
    height: 2, 
    career: "lawyer",
    walk: function() {
        console.log("walking"); 
    }
}

human.age = 40; 