
//variables
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var resultsEl = document.querySelector("#results");
var timerEl = document.querySelector("#timer");
var buttonEl = document.querySelector("#start");
// var scoresEl = document.querySelector("#scores");


var questionIndex = 0;
var count = 0;

var time = 10;
var intervalId;



//created an array of questions
var questions = [
    {
        question: "Which one of the following is not a semantic element?",
        choices: ["<header>", "<div>", "<footer>", "<form>"],
        answer: "<div>"
    },
    {
        question: "Which one of the HTML tag doesn't need closing tag?",
        choices: ["<image>", "<p>", "<body>", "<h1>"],
        answer: "<image>"
    },
    {
        question: "What is CSS known as when refering to a human body part?",
        choices: ["skeleton", "brain", "skin", "heart"],
        answer: "skin"
    },
    {
        question: "What is the color property of #FF0000",
        choices: ["yellow", "blue", "green", "red"],
        answer: "red"
    },
];

function start(){
    timerEl.textContent = time;
    intervalId = setInterval(function(){
        time--;
        timerEl.textContent = time;

        if (time === 0){
            finishQuiz();
        }
    }, 1000);
    
    buildQuiz();
};

//added function of bulding the quiz
function buildQuiz() {
    questionsEl.textContent = questions[questionIndex].question;

    choicesEl.innerHTML = "";
    resultsEl.innerHTML = "";
    
    //for loop method
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var questionChoicesItem = document.createElement("li");
        questionChoicesItem.textContent = questions[questionIndex].choices[i];
        questionChoicesItem.addEventListener("click", function(event){
            showResults(event.target.innerText);
        });
        choicesEl.append(questionChoicesItem);
    }
    //added function for the atomatic next question after the time interval 
    // function nextQuestion() {
    //     questionIndex++;
    // }
    // if (time === 0) {
    //     updateTime();
    //     return;
    // }
    //putting time interval between questions
    // setTimeInterval(nextQuestion, 3000);
};

function nextQuestion() {
    questionIndex++;
    buildQuiz();
}
//added function of the results if the customer choses correct answer or wrong answer
function showResults(answer) {
console.log(answer, questions[questionIndex].answer);
    if (answer === questions[questionIndex].answer){
        resultsEl.textContent = "Correct";
        console.log(answer);
        count++;
        nextQuestion();
    } else {
        resultsEl.textContent = "Incorrect";
        nextQuestion();
    }
};

// added function 
function finishQuiz () {
    clearInterval(intervalId);
    var game = document.game;
    game.innerHTML = " You have scored " + count;
}
// buildQuiz();
buttonEl.addEventListener("click", start);


