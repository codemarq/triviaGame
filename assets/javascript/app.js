$(document).ready(function () {
	// entire javascript goes here
	
	// global variables

	// timer variables
	var timerNumber = 30;

	// score variables
	var wins = 0;
	var numCorrect = 0;
	var numIncorrect = 0;
	var numAnswered = 0;

	// question and answer variables
	var multChoice = [];
	var currentQuestion = 0;


	// question object array
	var trivia = [
		q1 = {
			question: 'Which colour is not represented on the Mexican flag?',
			correct: 'Yellow',
			incorrect: ['Green', 'Red', 'White'],
		},
		q2 = {
			question: 'What is a "skink"?',
			correct: 'Lizard',
			incorrect: ['Chocolate Bar', 'Small River', 'Tree'],
		},
		q3 = {
			question: 'The ulna is a long bone in which part of the body?',
			correct: 'Arm',
			incorrect: ['Ear', 'Leg', 'Neck'],
		},
		q4 = {
			question: 'Micky Dolenz, Michael Nesmith, Peter Tork, and Davy Jones were members of which band?',
			correct: 'The Monkees',
			incorrect: ['The Animals', 'The Beatles', 'The Buggles'],
		},
		q5 = {
			question: 'Which steam locomotive carries the number "4472"?',
			correct: 'Flying Scotsman',
			incorrect: ['Duchess of Sutherland', 'Evening Star', 'Mallard']
		},
		q6 = {
			question: 'Digitalis is a plant commonly known as what?',
			correct: 'Foxglove',
			incorrect: ['Campanula', 'Delphinium', 'Penstemon'],
		},
		q7 = {
			question: 'What is Lapsang souchong?',
			correct: 'A type of tea',
			incorrect: ['A breed of dog', 'A language', 'A mountain range']
		},
		q8 = {
			question: 'Which retailer is a favourite of Edina and Patsy in "Absolutely Fabulous"?',
			correct: 'Harvey Nichols',
			incorrect: ['Harrods', 'John Lewis', 'Selfridges'],
		}
	];

	// helper functions

	// write question function
	var questionWrite = function () {
		// write question
		$('#questionDiv').html('<h2>' + trivia[currentQuestion].question + '</h2>');
		answerWrite();
	}

	var answerWrite = function () {
		for (var i = 0; i < answers.length; i++) {
			$('#answersDiv').html(answer)
		}
		
	}
	// Timer
	// Timer run function
	var start = function() {
		// starts timer counter
		counter = setInterval(countDown, 1000);

		// clear startTitle
		$('#startTitle').empty();

		//write question
		questionWrite();
		
	};

	// Timer countdown function
	var countDown = function () {
		// decrement timerNumber
		timerNumber --;
		// write timer to html timerDiv
		$('#timerDiv').html('<h2>' + timerNumber + '</h2>');

		// when timer reaches 0
		if (timerNumber == 0) {
			// stop
			stopTimer();
			// interact with game over
		}
	};

	// Timer stop function
	var stop = function () {
		clearInterval(counter);
	};

	// reset function
	var reset = function () {
		timerNumber = 30;
		$('#timerDiv').empty();
		$('#questionDiv').empty();
		$('#answersDiv').empty();
	};

	// click handlers	
	$('#start').on("click", start);
	$('#stop').on('click', stop);
	$('#reset').on('click', reset);


	// try to redo it with trivia api

})