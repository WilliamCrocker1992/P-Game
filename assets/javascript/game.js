var wins = 0;

var losses = 0;

var guesses = 9;

var userGuess = "";

var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// reset();

var ai = alph[Math.floor(Math.random() * alph.length)];

console.log(ai)

document.onkeyup = function(event) { 
	var userChoice = event.key;

	if (userChoice === ai) {
		wins++;
		guesses = 9
	}

	// else{
	// 	guesses--;
	// }

	else if (userChoice !== ai) {
		guesses--;
	}

	if (guesses < 1) {
		losses++;
		guesses = 9
	}



	if (alph.includes(userChoice)){
		if (userGuess == ""){
			userGuess = userChoice
		}
		else {
			userGuess = userGuess + " , " + userChoice
		}
	}


	// if (guesses > 1) {
	// 	guesses--
	// }
	// else{
	// 	guesses = 9
	// }





document.getElementById("wins").innerHTML =  wins;
document.getElementById("losses").innerHTML =  losses;
document.getElementById("guesses").innerHTML =  guesses;

var guessesDisplay = document.getElementById("user-guess")
guessesDisplay.textContent = userGuess;

}
 //end of the first function thingy

// function win(){
	// wins++;
	// reset();
// }

// function loss(){         
	// losses++;
	// reset();
// }



// function reset(){
	// guesses = 9;
	// userGuesses = [];
	
// }



