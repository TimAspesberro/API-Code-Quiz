
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var answerButtons = document.getElementById("answer-buttons");
var startBtn = document.getElementById("start-button");
var highscoreBtn = document.getElementById("highscore-btn");

var answerEl = `<button class="btn" id="answerOne">Answer 1</button>
<button class="btn" id="answerTwo">Answer 2</button>
<button class="btn" id="answerThree">Answer 3</button>
<button class="btn" id="answerFour">Answer 4</button>`;

const questions = ['Which of these is not a javascript data type?', 'Which html tag is used to create a navigation bar?', 'Which of these is the css universal selector?', 'Which one of these is not a programming language?'];

const questionOneAns = ['number', 'string', 'array', 'undefined']
const questionTwoAns = ['body', 'nav', 'div', 'main']
const questionThreeAns = ['*', '.selector' , '#all' , 'all-selector']
const questionFourAns = ['Javascript', 'C#', 'Python', 'Bootstrap']

const correct = 0;


const startQuiz = () => {
    setTimeout (() => {
        startBtn.remove();
        answerButtons.innerHTML += `${answerEl}`
    }, 600);
}

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    startQuiz();
});