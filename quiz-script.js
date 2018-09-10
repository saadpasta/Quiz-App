


var questions = [{
	"question": "How to write an IF statement for executing some code if i is NOT equal to 5?",
	"option1": "if (i <> 5) ",
	"option2": "if i =! 5 then ",
	"option3": "none of these ",
	"option4": "if (i != 5) ",
	"answer": "2"
}, {
	"question": "Where is the correct place to insert a JavaScript?",
	"option1": "Both the head section and the body section are correct ",
	"option2": " The head section",
	"option3": " The body section ",
	"option4": " none of these ",
	"answer": "1"
}, {
	"question": "The external JavaScript file must contain the <script> tag.",
	"option1": "True ",
	"option2": "False",
	"option3": " Depends on the type of include ",
	"option4": " none of these ",
	"answer": "2"
}, {
	"question": "How do you create a function in JavaScript?",
	"option1": " function = myFunction() ",
	"option2": " function:myFunction() ",
	"option3": "function myFunction() ",
	"option4": "function::myFunction() ",
	"answer": "3"
}, {
	"question": "How to write an IF statement in JavaScript?",
	"option1": "if (i == 5) ",
	"option2": " if i = 5 then ",
	"option3": " if i == 5 then ",
	"option4": " if i = 5 ",
	"answer": "1"
}, {
	"question": "How does a FOR loop start?",
	"option1": " for (i = 0; i <= 5; i++) ",
	"option2": " for (i <= 5; i++)",
	"option3": " for i = 1 to 5",
	"option4": " for (i = 0; i <= 5) ",
	"answer": "1"
}, {
	"question": "How do you call a function named myFunction?",
	"option1": " call function myFunction() ",
	"option2": "myFunction() ",
	"option3": "myFunction() ",
	"option4": " go myFunction()",
	"answer": "2"
}, {
	"question": "How can you add a comment in a JavaScript?",
	"option1": " 'This is a comment ",
	"option2": " //This is a comment ",
	"option3": " <!--This is a comment--> ",
	"option4": "#This is a comment ",
	"answer": "2"
}, {
	"question": "How do you round the number 7.25, to the nearest integer?",
	"option1": " rnd(7.25) ",
	"option2": " Math.rnd(7.25)",
	"option3": " Math.round(7.25) 	",
	"option4": " round(7.25)",
	"answer": "3"
}, {
	"question": "JavaScript is the same as Java.",
	"option1": " True",
	"option2": " False ",
	"option3": " Depends on the type of include ",
	"option4": " none of these ",
	"answer": "2"
}];








































var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score+"%";
		if (score>=60) {

		resultCont.textContent = 'You Have Pass The Quiz'+'Your Score: ' + score+"%";

		}

		if (score<60) {

		resultCont.textContent = ' Soory You Have Fail The Quiz'+'Your Score: ' + score+"%";

		}
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);