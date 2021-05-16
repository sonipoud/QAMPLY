
//variables
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var resultsEl = document.querySelector("#results");
var timerEl = document.querySelector("#timer");
var buttonEl = document.querySelector("#start");
var scoresEl = document.querySelector("#scores");

var questionIndex = 0;
var count = 0;

var time = 30;
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
        question: "What is the color property of #FF0000?",
        choices: ["yellow", "blue", "green", "red"],
        answer: "red"
    },
];

//function for the timer to start
function start() {
    timerEl.textContent = time;
    intervalId = setInterval(function () {
        time--;
        timerEl.textContent = time + 1;
        if (time <= 0) {
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
        questionChoicesItem.addEventListener("click", function (event) {
            showResults(event.target.innerText);
        });
        choicesEl.append(questionChoicesItem);
    }
};

//function for the next question to occur 
function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
        time = 0;
        finishQuiz();
    }
    if (time <= 0) {
        finishQuiz();
    }
    buildQuiz();
}
//added function of the results if the customer choses correct answer or wrong answer
function showResults(answer) {
    if (answer === questions[questionIndex].answer) {
        resultsEl.textContent = "Correct!";
        count++;
    } else {
        resultsEl.textContent = "Incorrect!";
        time = time - 5;
        timerEl.textContent = time;
    }
    setTimeout(nextQuestion, 1000);
};

// added function for the finishquiz
function finishQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = " All Done, You have scored " + count;

    //created form to write iniitials
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    var initials = document.createElement("input");
    initials.setAttribute("type", "text");
    initials.setAttribute("placeholder", "Enter your Initials");

    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");

    form.appendChild(initials);
    form.appendChild(submit);
    body.appendChild(form);

    // event listener to capture initials and local storage for initials and score
    // submit.addEventListener("click", function (event) {


    //     var initials = createInput.value;

    //     if (initials === null) {

    //         console.log("No value entered!");

    //     } else {
    //         var finalScore = {
    //             initials: initials,
    //             score: timeRemaining
    //         }
    //         console.log(finalScore);

    //         var scores = localStorage.getItem("scores");
    //         if (scores === null) {
    //             scores = [];
    //         } else {
    //             scores = JSON.parse(scores);
    //         }
    //         scores.push(finalScore);

    //     }
    //     var newScore = JSON.stringify(scores);
    //     localStorage.setItem("scores", newScore);
    //     // Travels to final page
    //     window.location.replace("./highscore.html");
    // }

    // });


};

//timer to start
buttonEl.addEventListener("click", start);


