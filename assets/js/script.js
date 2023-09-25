// alert ("working");
// var highScores = document.querySelector(".highscores");
// var scores = [C:/Users/eolso/Desktop/bootcamp/Challenges/Code-Quiz-Challenge-4/assets/scores.html]
var startQuiz = document.querySelector("#start");
var timerP = document.querySelector("#timer");
var boxSection = document.querySelector(".box");
var questionSection = document.querySelector(".question-section");
var h3 = document.querySelector("#question");
var buttonEl = document.querySelectorAll(".button")
var count = 60;
var questionList = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyper Text Martian Language", "Happy Time Make Laugh", "Hyperion Telsa Maker Language"],
        answer: "Hyper text markup language",
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
        choices: ["To learn coding", "To find the Holy Grail", "To learn Spainish", "To learn to bake"],
        answer: "To find the Holy Grail"
    }
];
var question;

startQuiz.addEventListener("click", function(){
    boxSection.style.display = "none";
    questionSection.style.display = "block";
    quiz();
    var timer = setInterval(function(){
        if(count > 1){
            count--;
            timerP.textContent = "Time Remaining: " + count;
        }else {
            // clearInterval(timer)
            timerP.textContent = "Game Over";
        }
    },1000)
})

function quiz(){
    question = questionList[Math.floor(Math.random()*questionList.length)]
    console.log(question);
    h3.textContent = question.question;
    buttonEl[0].textContent = question.choices[0];
    buttonEl[1].textContent = question.choices[1];
    buttonEl[2].textContent = question.choices[2];
    buttonEl[3].textContent = question.choices[3];
}



// var h1El = createElement("h1")
// h1El.textContent = questions[1].question

// highScores.addEventListener("click", function() {
//     window.location.href = scores
    
// })