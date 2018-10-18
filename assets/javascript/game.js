// Game script
// source: in-class crystal game example
// source for random # between specific numbers: "https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript"

// source for unique random: https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100

// Number guessed by random and display on the browser
var targetNumber = "";
for (var j = 0; j < 1; j++) {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    // console.log(targetNumber);
}
$("#computerNumber").text(targetNumber);

// create a counter for user's total
var yourCounter = 0;

// game counter for wins and losses
var winCounter = 0;
var lossCounter = 0;

// create a var for each of the crystals on the page

var numForCrystals = [];
var redNumber = "";
var blueNumber = "";
var greenNumber = "";
var orangeNumber = "";

// create a for loop for each crystal and assign a random number between 1 and 19.
// This number should not repeat and be picked multiple times.

while (numForCrystals.length < 4) {
    var rand = Math.floor(Math.random() * 19) + 1;

    if (numForCrystals.indexOf(rand) === -1) {
        numForCrystals.push(rand)
    } else {
        continue
    }
}

redNumber = numForCrystals[0];
blueNumber = numForCrystals[1];
greenNumber = numForCrystals[2];
orangeNumber = numForCrystals[3];



$("#redGem").attr("data-redNumber", numForCrystals[0]);
$("#blueGem").attr("data-blueNumber", numForCrystals[1]);
$("#greenGem").attr("data-greenNumber", numForCrystals[2]);
$("#orangeGem").attr("data-orangeNumber", numForCrystals[3]);

$(".crystalSize").on("click", function() {

    // getting crystalValue
    var crystalValue = ($(numForCrystals).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    // each time the user clicks the crystal the counter goes up by the increment variable the computer selected radomly.
    yourCounter += crystalValue;

    // output the number of times the crystal is clicked.
    alert("Your new score is: " + yourCounter);

    // now check if the clicked number matches the targetNumber
    if (yourCounter === targetNumber) {
        alert("you win!");
    }

    // now add the else if part so if they go above the number the user loses
    else if (yourCounter >= targetNumber) {
        alert("you lose!")
    }
});

// keep track of how many games has been won and lost

function winLoss () {
    console.log("Wins: " + winCounter + " | Losses: " + lossCounter);

    // display the win results to the html
    if (yourCounter === targetNumber) {
        winCounter++;
        // alert("you win!");
        $("#wins").text(winCounter);

    } else if (yourCounter > targetNumber) {
        lossCounter++;
        // alert("You lose!");
        $("#losses").text(lossCounter);

    }
}