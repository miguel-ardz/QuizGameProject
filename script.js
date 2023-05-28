var currentQuestion = 0;
var score = 0;
var questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
        correctAnswer: 1
    }
];

var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var nextButton = document.getElementById("nextButton");
var containerElement = document.querySelector(".container");

function loadQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var choice = questions[currentQuestion].choices[i];
        var button = document.createElement("button");
        button.textContent = choice;
        button.value = i;
        choicesElement.appendChild(button);
    }
}

function checkAnswer(event) {
    var userAnswer = parseInt(event.target.value);

    if (userAnswer === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    containerElement.classList.add("finished");

    questionElement.textContent = "Quiz Complete!";
    choicesElement.innerHTML = "<p>Your score: " + score + " out of " + questions.length + "</p>" + 
        "<p>To try again, please refresh the page!" + "</p>";
    
}


choicesElement.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", function () {
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

loadQuestion();
