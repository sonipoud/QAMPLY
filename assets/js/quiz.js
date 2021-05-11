
var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var resultsEl = document.querySelector("#results");
var scoresEl = document.querySelector("#scores");
var questionIndex = 0;
var correctCount = 0;

var questions = [
    {
        question: "Which one of the following is not a semantic element?",
        choices: ["<header>", "<div>", "<footer>", "<form>"],
        answer: "<div>",
    },
    {
        question: "Which one of the HTML tag doesn't need closing tag?",
        choices: ["<image>", "<p>", "<body>", "<h1>"],
        answer: "<image>",
    },
    {
        question: "What is CSS known as when refering to a human body part?",
        choices: ["skeleton", "brain", "skin", "heart"],
        answer: "skin",
    },
    {
        question: "What is the color property of #FF0000",
        choices: ["yellow", "blue", "green", "red"],
        answer: "red",
    },
];

function fourQuestion() {
    questionsEl.textContent = questions[questionIndex].question;

    optionListEl.innerHTML = "";

    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;

    for (var i = 0; i < choicesLenth; i++) {
        var questionListItem = document.createElement("li");
        questionListItem.textContent = choices[i];
        optionListEl.append(questionListItem);
    }
    renderQuestion();
};
