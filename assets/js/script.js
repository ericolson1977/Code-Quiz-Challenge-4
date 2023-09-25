// alert ("working");
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
        choices: ["To learn coding", "To find the Holy Grail", "To learn Spainish", "To learn to bake"],
        answer: "To find the Holy Grail"
    }
];
var question;
var currentIndex = 0

// when use clicks start button, timer starts and quiz function is called
startQuiz.addEventListener("click", function(){
    boxSection.style.display = "none";
    questionSection.style.display = "block";
    quiz();
    var timer = setInterval(function(){
        if(count > 1){
            count--;
            timerP.textContent = "Time Remaining: " + count;
        }else {
            timerP.textContent = "Game Over";
        }
    },1000)
})

// event listeners in 62-65 capture user choice and compare to actual correct answer
function answer(event){
    var correctAnswer = questionList[currentIndex].answer
    var selectedAnswer = event.currentTarget.textContent
    if(selectedAnswer == correctAnswer){
        alert("correct")
    }else{
        alert("wrong")
    }
    currentIndex++
    quiz()
}

buttonEl[0].addEventListener("click", answer);
buttonEl[1].addEventListener("click", answer);
buttonEl[2].addEventListener("click", answer);
buttonEl[3].addEventListener("click", answer);

// this will call the first question
function quiz(){
    question = questionList[currentIndex]
    // console.log(question);
    h3.textContent = question.question;
    buttonEl[0].textContent = question.choices[0];
    buttonEl[1].textContent = question.choices[1];
    buttonEl[2].textContent = question.choices[2];
    buttonEl[3].textContent = question.choices[3];
}
