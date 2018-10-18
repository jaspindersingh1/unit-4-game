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



$("#redGem").attr("data", redNumber);
console.log(redNumber)
$("#blueGem").attr("data", blueNumber);
console.log(blueNumber)
$("#greenGem").attr("data", greenNumber);
console.log(greenNumber)
$("#orangeGem").attr("data", orangeNumber);
console.log(orangeNumber)

$(".crystalSize").on("click", function() {

    // getting crystalValue
    var crystalValue = ($(this).attr("data"));
    crystalValue = parseInt(crystalValue);
    
    // each time the user clicks the crystal the counter goes up by the increment variable the computer selected radomly.
    yourCounter += crystalValue;

    // output the number of times the crystal is clicked on the DOM
    // alert("Your new score is: " + yourCounter);
    $("#yourNumber").text(yourCounter);

    // now check if the clicked number matches the targetNumber and the player wins and the DOM is updated.
    if (yourCounter === targetNumber) {
        winCounter++;
        alert("you win!");
        $("#wins").text(winCounter);
    }

    // now add the else if part so if they go above the number the user loses and updates the DOM 
    else if (yourCounter > targetNumber) {
        lossCounter++;
        alert("You lose!");
        $("#losses").text(lossCounter);
    }
});