$(document).ready(function () {
	// entire javascript goes here
	
	// global variables
	$('#image').css('display', 'none');
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
			gif: 'assets/images/mex.gif'
		},
		q2 = {
			question: 'What is a "skink"?',
			correct: 1,
			multChoice: ['Chocolate Bar', 'Lizard', 'Small River', 'Tree'],
			gif: 'assets/images/skink.gif'
		},
		q3 = {
			question: 'The ulna is a long bone in which part of the body?',
			correct: 3,
			multChoice: ['Ear', 'Leg', 'Neck', 'Arm'],
			gif: 'assets/images/arms.gif'
		},
		q4 = {
			question: 'Micky Dolenz, Michael Nesmith, Peter Tork, and Davy Jones were members of which band?',
			correct: 0,
			multChoice: ['The Monkees', 'The Animals', 'The Beatles', 'The Buggles'],
			gif: 'assets/images/monkees.gif'
		},
		q5 = {
			question: 'Which steam locomotive carries the number "4472"?',
			correct: 0,
			multChoice: ['Flying Scotsman', 'Duchess of Sutherland', 'Evening Star', 'Mallard'],
			gif: 'assets/images/scot.gif'
		},
		q6 = {
			question: 'Digitalis is a plant commonly known as what?',
			correct: 3,
			multChoice: ['Campanula', 'Delphinium', 'Penstemon', 'Foxglove'],
			gif: 'assets/images/digitalis.gif'
		},
		q7 = {
			question: 'What is Lapsang souchong?',
			correct: 1,
			multChoice: ['A breed of dog', 'A type of tea', 'A language', 'A mountain range'],
			gif: 'assets/images/tea.gif'
		},
		q8 = {
			question: 'In the TV show "South Park," after Kenny died "for good", this character was the gang\'s first replacement:',
			correct: 2,
			multChoice: ['Token', 'Jimmy', 'Butters', 'Timmy'],
			gif: 'assets/images/butters.gif'
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

	// write question function
	var questionWrite = function () {
		if (currentQuestion <= 7) { 
			$('#questionDiv').html('<h2>' + trivia[currentQuestion].question + '</h2>');
			answers = trivia[currentQuestion].multChoice;
			show('.answer');
			for (var i = 0; i < answers.length; i++) {
				$('#answer' + i).html('<h3>' + answers[i] + '</h3>');
			}
		}
		else {
			gameOver();
		}
	};

	// clears the html contents of the answers
	var answerClear = function () {
		// $('#answersDiv').empty();
		for (var i = 0; i < 4; i++) {
			$('#answer' + i).html('');
		}
		hide('.answer');
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

		//write question & answers
		questionWrite();	
	};

	// clears all content
	var clearScreen = function () {
		$('#startTitle').empty();
		$('#questionDiv').empty();
		$('#scoreDiv').empty();
		answerClear();
	}

	// Timer countdown function
	var countDown = function () {
		// decrement timerNumber
		timerNumber --;
		// write timer to html timerDiv
		$('#timerDiv').html('<h2> Time Remaining: ' + timerNumber + '</h2>');

		// when timer reaches 0
		if (timerNumber == 0) {
			gameOver();
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
	
	var gameOver = function() {
		// stop the timer
		stop();

		// clear the question and answers
		clearScreen();

		// interact with game over
		write('#startTitle', '<h3>Game Over!</h3>');
		$('#scoreDiv').append('<h3>Here are your results</h3>');
		$('#scoreDiv').append('<h3>Total Questions Answered: ' + numAnswered + '</h3>');
		$('#scoreDiv').append('<h3>Number of correct answers: ' + numCorrect + '</h3>');
		$('#scoreDiv').append('<h3>Number of incorrect answers: ' + numIncorrect + '</h3>');
		show('#reset');
	};

	//next question function
	var nextQuestion = function () {
		$('#image').css('display', 'none');
		$('#questionDiv').css('display', 'initial');
		$('#answersDiv').css('display', 'initial');
		$('#answerMsg').css('display', 'none');
		clearInterval();
		timerNumber = 31;
	}

	//check answer
	$('.answer').click(function () {
		var clicked = $(this);
		var value = clicked.attr('value');
		var correctAnswer = trivia[currentQuestion].correct;

		if (value == correctAnswer) {
			$('#questionDiv').empty();
			answerClear();
			$('#answersDiv').css('display', 'none');
			$('#questionDiv').css('display', 'none');
			$('#answerMsg').css('display', 'initial');
			$('#image').attr('src', trivia[currentQuestion].gif);
			$('#image').css('display', 'initial');
			$('#answerMsg').html('<h3> You chose ' + answers[value] + '.</h3> <br><h3>The correct answer was ' + answers[correctAnswer] + '.</h3>');
			setInterval(nextQuestion, 5 * 1000);
			numAnswered ++;
			numCorrect ++;
			currentQuestion ++;
			questionWrite();
		}
		else {
			numAnswered ++;
			numIncorrect ++;
			currentQuestion ++;
			timerNumber = 31;
			$('#questionDiv').empty();
			answerClear();
			questionWrite();
		}
	});

	 // click handlers	
	$('#start').on("click", start);
	$('#reset').on('click', reset);
})