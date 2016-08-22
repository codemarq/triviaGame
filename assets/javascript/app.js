$(document).ready(function () {
	// entire javascript goes here
	
	// global variables

	// timer variables
	var timerNumber = 31;

	// score variables
	var numCorrect = 0;
	var numIncorrect = 0;
	var numAnswered = 0;

	// question and answer variables
	var answers = [];
	var currentQuestion = 0;


	// question object array
	var trivia = [
		q1 = {
			question: 'Which colour is not represented on the Mexican flag?',
			correct: 2,
			multChoice: ['Green', 'Red', 'Yellow', 'White'],
		},
		q2 = {
			question: 'What is a "skink"?',
			correct: 1,
			multChoice: ['Chocolate Bar', 'Lizard', 'Small River', 'Tree'],
		},
		q3 = {
			question: 'The ulna is a long bone in which part of the body?',
			correct: 3,
			multChoice: ['Ear', 'Leg', 'Neck', 'Arm'],
		},
		q4 = {
			question: 'Micky Dolenz, Michael Nesmith, Peter Tork, and Davy Jones were members of which band?',
			correct: 0,
			multChoice: ['The Monkees', 'The Animals', 'The Beatles', 'The Buggles'],
		},
		q5 = {
			question: 'Which steam locomotive carries the number "4472"?',
			correct: 0,
			multChoice: ['Flying Scotsman', 'Duchess of Sutherland', 'Evening Star', 'Mallard']
		},
		q6 = {
			question: 'Digitalis is a plant commonly known as what?',
			correct: 3,
			multChoice: ['Campanula', 'Delphinium', 'Penstemon', 'Foxglove'],
		},
		q7 = {
			question: 'What is Lapsang souchong?',
			correct: 1,
			multChoice: ['A breed of dog', 'A type of tea', 'A language', 'A mountain range']
		},
		q8 = {
			question: 'Which retailer is a favourite of Edina and Patsy in "Absolutely Fabulous"?',
			correct: 1,
			multChoice: ['Harrods', 'Harvey Nichols', 'John Lewis', 'Selfridges'],
		}
	];

	// helper functions
	//  helper function to hide html elements
	var hide = function (elementId) {
		$(elementId).css("visibility", "hidden");
	};
	// helper function to show html elements
	var show = function (elementId) {
		$(elementId).css("visibility", "visible");
	};
	// helper function for writing html elements
	var write = function (elementId, thing) {
		$(elementId).html('<h3>' + thing + "</h3>")
	};

	// create random array of answers --Work on this
	answers = trivia[currentQuestion].multChoice;

	// write question function
	var questionWrite = function () {
		// write question
		$('#questionDiv').html('<h2>' + trivia[currentQuestion].question + '</h2>');

	};

	var answerWrite = function () {
		$('#answersDiv').empty();
		for (var i = 0; i < answers.length; i++) {
			$('#answersDiv').append('<div class="btn col-lg-12" value="' + i + '"><h3>' + answers[i] + '</h3></div>');
		}
	};

	// Timer
	// Timer run function
	var start = function() {
		// starts timer counter
		counter = setInterval(countDown, 1000);

		// clear startTitle
		$('#startTitle').empty();

		// hide start button
		hide('#start');

		//write question
		questionWrite();
		// write answers
		answerWrite();
		
	};

	var clearScreen = function () {
		$('#startTitle').empty();
		$('#questionDiv').empty();
		$('#answersDiv').empty();
		$('#scoreDiv').empty();
	}

	// Timer countdown function
	var countDown = function () {
		// decrement timerNumber
		timerNumber --;
		// write timer to html timerDiv
		$('#timerDiv').html('<h2> Time Remaining: ' + timerNumber + '</h2>');

		// when timer reaches 0
		if (timerNumber == 0) {
			// stop
			stop();

			// clear the question and answers
			clearScreen();

			// interact with game over
			write('#startTitle', '<h3>Game Over-you ran out of time!</h3>');
			$('#scoreDiv').append('<h3>Here are your results</h3>');
			$('#scoreDiv').append('<h3>Total Questions Answered: ' + numAnswered + '</h3>');
			$('#scoreDiv').append('<h3>Number of correct answers: ' + numCorrect + '</h3>');
			$('#scoreDiv').append('<h3>Number of incorrect answers: ' + numIncorrect + '</h3>');
			show('#reset');
		}
	};

	// Timer stop function
	var stop = function () {
		clearInterval(counter);
	};

	// reset function
	var reset = function () {
		stop();
		timerNumber = 31;
		answers = [];
		currentQuestion = 0;
		clearScreen();
		$('#timerDiv').empty();
		write('#startTitle', 'Press Start Button to Begin!');
		show('#start');
		hide('#reset');
	};

	// click handlers	
	$('#start').on("click", start);
	$('#stop').on('click', stop);
	$('#reset').on('click', reset);

	//check answer
	$('#answersDiv').click(function () {
		var clicked = $(this);
		var value = clicked.val();
		console.log('============');
		console.log('clicked: ' + clicked);
		console.log('value: ' + value);
		choice = answers[value];
		console.log('choice: ' + choice);

		if (choice == trivia[currentQuestion].correct) {
			numAnswered ++;
			console.log('============');
			console.log('numAnswered: ' + numAnswered);
			numCorrect ++;
			console.log('numCorrect: ' + numCorrect);
			timerNumber = 31;
			currentQuestion ++;
			console.log('currentQuestion: ' + currentQuestion);
			answers = [];
			console.log('answers[]: ' + answers);

			$('#questionDiv').empty();
			$('#answerDiv').empty();
			questionWrite();
			answerWrite();
		}
		// else {
		// 	numAnswered ++;
		// 	nummultChoice ++;
		// 	currentQuestion ++;
		// 	timerNumber = 30;
		// 	answers = [];
		// 	$('#questionDiv').empty();
		// 	$('#answerDiv').empty();
		// 	questionWrite();
		// }
	});
	// try to redo it with trivia api

	 // clear answersDiv, check correct answers
	 // update score in html
	 // game over
	 // messages
	 // timer to go to next question
	 // styling


})