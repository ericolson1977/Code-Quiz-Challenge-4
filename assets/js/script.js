// alert ("working");
var startQuiz = document.querySelector("#start");
var timerP = document.querySelector("#timer");
var boxSection = document.querySelector(".box");
var questionSection = document.querySelector(".question-section");
var h3 = document.querySelector("#question");
var buttonEl = document.querySelectorAll(".button");
var scoreSection = document.querySelector(".score-section");
var submitBtn = document.querySelector("#submit");
var initialsEl = document.querySelector("#input-initials");
var scoreList = document.querySelector("#score-list");
var highScoreSection = document.querySelector(".high-score-list")
var startOverBtn = document.querySelector("#start-over");
var highScoresPage = document.querySelector("#high-score-link");
var count = 30;
var questionList = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyper Text Martian Language", "Happy Time Make Laugh", "Hyperion Telsa Maker Language"],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Commonly used data types DO NOT include",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        question: "What is your Quest?",
        choices: ["To learn coding", "To find the Holy Grail", "To learn Spanish", "To learn to bake"],
        answer: "To find the Holy Grail"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];
var question;
var currentIndex = 0;
var timer;
var gameOver = false;
var quizOver = false;

// links to Highscores section of page and only diplays that section
highScoresPage.addEventListener("click", function () {
    boxSection.style.display = "none";
    questionSection.style.display = "none";
    highScoreSection.style.display = "block"
})

// when user clicks start button, timer starts and quiz function is called
startQuiz.addEventListener("click", function () {
    boxSection.style.display = "none";
    questionSection.style.display = "block";
    quiz();
    timer = setInterval(function () {
        if (count > 1) {
            count--;
            timerP.textContent = "Time Remaining: " + count;
        } else {
            clearInterval(timer);
            timerP.textContent = "Game Over";
            gameOver = true;
        }
        checkTimer();
    }, 1000)
})

// event listeners to capture user choice and compare to actual correct answer
buttonEl[0].addEventListener("click", answer);
buttonEl[1].addEventListener("click", answer);
buttonEl[2].addEventListener("click", answer);
buttonEl[3].addEventListener("click", answer);

// this will start the quiz
function quiz() {
    if (quizOver) {
        questionSection.style.display = "none";
        scoreSection.style.display = "block";
        document.querySelector("#final-score").textContent = count;
        localStorage.setItem("Final Score", count)
    } else {
        question = questionList[currentIndex]
        h3.textContent = question.question;
        buttonEl[0].textContent = question.choices[0];
        buttonEl[1].textContent = question.choices[1];
        buttonEl[2].textContent = question.choices[2];
        buttonEl[3].textContent = question.choices[3];
    }
}

// ends quiz when timer reaches 0
function checkTimer() {
    if (count <= 0) {
        clearInterval(timer);
        timerP.textContent = "Game Over";
        gameOver = true;
        displayFinalScore();
    }
}

function displayFinalScore() {
    questionSection.style.display = "none";
    scoreSection.style.display = "block";
    document.querySelector("#final-score").textContent = count;
    localStorage.setItem("Final Score", count);
}

// this fuction allows use to select and answer, messages diplayed indicating correct of incorrect, and timer is decremented 10 sec forn incorret answer.
function answer(event) {
    if (gameOver) {
        return;
    }
    var correctAnswer = questionList[currentIndex].answer;
    var selectedAnswer = event.currentTarget.textContent;
    var result = document.querySelector("#result");
    if (selectedAnswer == correctAnswer) {
        result.textContent = "Correct!"
    } else {
        result.textContent = "Incorrect"
        count -= 10;
    }
    currentIndex++
    if (currentIndex < questionList.length) {
        quiz();
    } else {
        gameOver = true;
        clearInterval(timer);
        timerP.textContent = "Score: " + count;
        quizOver = true;
        quiz();
    }
}

//user can enter initals to have them added, with the score, to the high scores list
submitBtn.addEventListener("click", function (e) {
    scoreSection.style.display = "none";
    highScoreSection.style.display = "block";
    e.preventDefault()
    var userInitials = initialsEl.value
    localStorage.setItem("Initials", userInitials);
    var highScoreInitials = localStorage.getItem("Initials");
    var highScoreScore = localStorage.getItem("Final Score");
    var scoreListItem = document.createElement("li");
    scoreListItem.textContent = "Initials: " + highScoreInitials + ", Score: " + highScoreScore;
    scoreList.appendChild(scoreListItem);
})

//starts the quiz over
startOverBtn.addEventListener("click", function () {
    location.reload()
})
