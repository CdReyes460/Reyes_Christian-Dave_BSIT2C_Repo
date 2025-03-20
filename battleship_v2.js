// declaring variable
var randomLoc = Math.floor(Math.random() * 5);

var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// Game logic

while (isSunk == false) {
    guess = prompt("Ready!,Aim!,Fire! (Enter number 0-6)");

    if (guess == null) {
        alert("Thank you for playing");
        break;
    }

    if (guess < 0|| guess > 6) {
        alert("Please enter a valid number!");
    }else {
        guesses = guesses + 1;
        alert("Miss");

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!🚢")
            }
        }
        else alert ("Miss");
    }
 }

 var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);
 

 var stats = "You sank my battleship at: " + guesses + "guesses" + "And your accuracy is: " + (3/guesses);

 alert(stats);

 
