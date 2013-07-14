var runGame = function() {
	
	var retryGame = function() {
		var answer = prompt("Retry?");
		if (answer) {
			if (answer === "yes") {
				return runGame();
			} else if (answer === "no") {
				return alert("Thanks for playing!");
			} else {
				alert("Enter a correct value.");
				retryGame();
			}
		} else {
			return alert("Thanks for playing!");
		}
	};
		
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    
    if (userChoice) {
		if (userChoice !== "rock" && userChoice!== "paper" && userChoice !== "scissors") {
			alert("Enter a correct value! (rock, paper, scissors)");
			return retryGame();
			}
			
		else {
			var computerChoice = Math.random();
			if (computerChoice < 0.34) {
				computerChoice = "rock";
			} else if (computerChoice <= 0.67) {
				computerChoice = "paper";
			} else {
				computerChoice = "scissors";
			}
        
			choice1 = userChoice;
			choice2 = computerChoice;
    
			if (choice1 === choice2) {
				alert("The result is a tie!");
				return retryGame()
			}
			else if (choice1 === "rock") {
				if (choice2 === "scissors") {
					alert("You win! Your rock crushed the scissors.");
					return retryGame();
				} else {
					alert("You lose! A paper covered your rock.");
					return retryGame();
				}
			}
			else if (choice1 === "paper") {
				if (choice2 === "rock") {
					alert("You win! Your paper covered the rock.");
					return retryGame();
				} else {
					alert("You lose! Your paper was cut by the scissors.");
					return retryGame();
				}
			}
			// choice1 is scissors below (last possible value)
			else {
				if (choice2 === "rock") {
					alert("You lose! A rock crushed your scissors.");
					return retryGame();
				} else {
					alert("You win! Your scissors cut the paper.");
					return retryGame();
				}
			}
		}
	} else {
		return alert("Thanks for playing!");
	}
};

runGame();
