// alert ("working");
// var highScores = document.querySelector(".highscores");
// var scores = [C:/Users/eolso/Desktop/bootcamp/Challenges/Code-Quiz-Challenge-4/assets/scores.html]
var startQuiz = document.querySelector("#start");
var timerP = document.querySelector("#timer");
var count = 6;

// highScores.addEventListener("click", function() {
//     window.location.href = scores
    
// })

startQuiz.addEventListener("click", function(){
    var timer = setInterval(function(){
        if(count > 1){
            count--;
            timerP.textContent = count;
        }else {
            // clearInterval(timer)
            timerP.textContent = "Game Over";
        }

    },1000)
})