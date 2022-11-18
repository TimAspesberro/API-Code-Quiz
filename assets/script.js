
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var startBtn = document.getElementById("start-btn");
var highscoreBtn = document.getElementById("#highscore-btn")

const questions = ['Which of these is not a javascript data type?', 'Which html tag is used to create a navigation bar?', 'Which of these is the css universal selector?', 'Which one of these is not a programming language?'];

const questionOneAns = ['number', 'string', 'array', 'undefined']
const questionTwoAns = ['body', 'nav', 'div', 'main']
const questionThreeAns = ['*', '.selector' , '#all' , 'all-selector']
const questionFourAns = ['Javascript', 'C#', 'Python', 'Bootstrap']

const correct = 0;


var fillEl = () => {

}


startBtn.addEventListener('click', (event) => {
    event.preventDefault();
})