// Game script
// source: in-class crystal game example

// create a counter for user's total

var counter = 0;
$("crystalSize").on("click", function) {

    // each time the user clicks the crystal the counter goes up by 1.
    counter += 1;

    // output the number of times the crystal is clicked.
    alert("you clicked this crystal" + counter);
}