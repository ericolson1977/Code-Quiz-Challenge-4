// alert ("working");
var startQuiz = document.querySelector("#start");
var timerP = document.querySelector("#timer");
var boxSection = document.querySelector(".box");
var questionSection = document.querySelector(".question-section");
var h3 = document.querySelector("#question");
var buttonEl = document.querySelectorAll(".button");
var scoreSection = document.querySelector(".score-section");
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
    }
];
var question;
var currentIndex = 0;
var timer;

// when use clicks start button, timer starts and quiz function is called
startQuiz.addEventListener("click", function(){
    boxSection.style.display = "none";
    questionSection.style.display = "block";
    quiz();
    timer = setInterval(function(){
        if(count > 1){
            count--;
            timerP.textContent = "Time Remaining: " + count;
        }else {
            clearInterval(timer);
            timerP.textContent = "Game Over";
            gameOver = true;
        }
    },1000)
})

var gameOver = false;


function answer(event){
    if(gameOver) {
        return;
    }
    var correctAnswer = questionList[currentIndex].answer;
    var selectedAnswer = event.currentTarget.textContent;
    var result = document.querySelector("#result");
    if(selectedAnswer == correctAnswer){
        result.textContent = "Correct!"
    }else{
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
    }
}

// event listeners to capture user choice and compare to actual correct answer
buttonEl[0].addEventListener("click", answer);
buttonEl[1].addEventListener("click", answer);
buttonEl[2].addEventListener("click", answer);
buttonEl[3].addEventListener("click", answer);

// this will call the first question
function quiz(){
    question = questionList[currentIndex]
    // console.log(question);
    if (question) {
        h3.textContent = question.question;
        buttonEl[0].textContent = question.choices[0];
        buttonEl[1].textContent = question.choices[1];
        buttonEl[2].textContent = question.choices[2];
        buttonEl[3].textContent = question.choices[3];
    } else {
        questionSection.style.display = "none";
        scoreSection.style.display = "block";
        document.querySelector("#final-score").textContent = "Final Score: " + count;
    } 
}
