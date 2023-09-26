// # 04 Web APIs: Code Quiz

// - Create file/folder structure
//     - Two seperate HTML pages (one for the quiz, one for hiscores)
// - Once a start button is clicked
//     - Quiz starts, timer starts counting down (Set Interval)

//     - When an answer is selected
//         - IF an answer is wrong, then decrement our timer (15 seconds)
//             - Display that user choice was incorrect, move to the next question
//         - IF an answer is correct
//             - Display that user choice was correct
//             - We want to either display score with remaining time OR increment score(Up to you)
//         - For loop to loop thru questions array to the next question

//     - When timer hits 0 OR no more questions in our array
//         - Then we have to clear Interval
//         - Then allow user to input initials (prevent default on our html form)
//         - Display the users score and Then link to hiscores page
//         - Save data to local storage

//     - We will use javascript to dynamically create our HTML 
//         - createElement to create 
//             - Maybe H1 for our question, buttons for our choices, maybe an H2 to display wrong/right to user

// var questions = [
//     {
//         question: "What does HTML stand for?",
//         choices: ["Hyper text markup language", "Hyper text martian language", "answer 3", "Answer 4"],
//         answer: "Hyper text markup language",
//     },
//     {
//         question: "Commonly used data types DO NOT include",
//         choices: ["Strings", "booleans", "alerts", "numbers"],
//         answer: "alerts",
//     },
//     {
//         question: "The condition in an if / else statement is enclosed within ____.
//         choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//         answer: "parentheses",
//     }
// ]
// var h1El = createElement("h1")
// h1El.textContent = questions[1].question

// Acceptance Criteria
//     GIVEN I am taking a code quiz
//     WHEN I click the start button  = DONE
//     THEN a timer starts and I am presented with a question
//     WHEN I answer a question
//     THEN I am presented with another question  DONE
//     WHEN I answer a question incorrectly
//     THEN time is subtracted from the clock = DONE
//     WHEN all questions are answered or the timer reaches 0
//     THEN the game is over = DONE
//     WHEN the game is over
//     THEN I can save my initials and score