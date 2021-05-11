
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

var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var resultsEl = document.querySelector("#results");
var timerEl = document.querySelector("#timer");
// var scoresEl = document.querySelector("#scores");

var questionIndex = 0;
var correctCount = 0;

function buildQuiz() {
    questionsEl.textContent = questions[questionIndex].question;

    choicesEl.innerHTML = "";
    resultsEl.innerHTML = "";

    for (var i = 0; i < choices.length; i++) {
        var questionChoicesItem = document.createElement("li");
        questionChoicesItem.textContent = questions[questionIndex].choices;[i];
        choicesEl.append(questionChoicesItem);
    }
    function nextQuestion() {
        questionIndex++;
        buildQuiz();
    }
};

function showResults(event) {
    if (answer === questions[questionIndex].answer){
        resultsEl.textContent = "Correct";
    } else {
        resultsEl.textContent = "Incorrect";
    }
}

// submitButton.addEventListener("click", showResults);
