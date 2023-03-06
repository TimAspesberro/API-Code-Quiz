
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var questionDiv = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var startBtn = document.getElementById("start-button");
var highscoreBtn = document.getElementById("highscore-btn");

const questions = ['Which of these is not a javascript data type?', 'Which html tag is used to create a navigation bar?', 'Which of these is the css universal selector?', 'Which one of these is not a programming language?'];

const answersOne = ['number', 'string', 'array', 'undefined']
const answersTwo = ['body', 'nav', 'div', 'main']
const answersThree = ['*', '.selector' , '#all' , 'all-selector']
const answersFour = ['Javascript', 'C#', 'Python', 'Bootstrap']


const questionEl = (question) => { 
    questionDiv.innerHTML += `
<p id="que-el">${question}</p>
`};

const answerEl = (answer) => {
    answerButtons.innerHTML += `
    <button class="btn" id="answerOne">${answer[0]}</button>
    <button class="btn" id="answerTwo">${answer[1]}</button>
    <button class="btn" id="answerThree">${answer[2]}</button>
    <button class="btn" id="answerFour">${answer[3]}</button>
    `};

const addElements = () => {
    document.getElementById("box-container").innerHTML += `
    <div id="question"></div>
    <div id="answer-buttons" class="btn-grid">`
}


const quizOne = () => {
    questionEl(questions[0]);
    answerEl(answersOne);

    document.getElementById("answerOne").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerTwo").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerThree").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerFour").addEventListener("click", () => {
        document.getElementById('que-el').remove();
        document.getElementById('answerOne').remove();
        document.getElementById('answerTwo').remove();
        document.getElementById('answerThree').remove();
        document.getElementById('answerFour').remove();
        quizTwo();
    });
    
}

const quizTwo = () => {
    answerEl(answersTwo);
    questionEl(questions[1]);
    
    document.getElementById("answerOne").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerTwo").addEventListener("click", () => {
        document.getElementById('que-el').remove();
        document.getElementById('answerOne').remove();
        document.getElementById('answerTwo').remove();
        document.getElementById('answerThree').remove();
        document.getElementById('answerFour').remove();
        quizThree();
    });
    document.getElementById("answerThree").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerFour").addEventListener("click", () => {
        console.log('wrong')
    });
}

const quizThree = () => {
    questionEl(questions[2]);
    answerEl(answersThree);

    document.getElementById("answerOne").addEventListener("click", () => {
        document.getElementById('que-el').remove();
        document.getElementById('answerOne').remove();
        document.getElementById('answerTwo').remove();
        document.getElementById('answerThree').remove();
        document.getElementById('answerFour').remove();
        quizFour();
    });
    document.getElementById("answerTwo").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerThree").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerFour").addEventListener("click", () => {
        console.log('wrong')
    });
}

const quizFour = () => {
    questionEl(questions[3]);
    answerEl(answersFour);

    document.getElementById("answerOne").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerTwo").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerThree").addEventListener("click", () => {
        console.log('wrong')
    });
    document.getElementById("answerFour").addEventListener("click", () => {
        document.getElementById('que-el').remove();
        document.getElementById('answerOne').remove();
        document.getElementById('answerTwo').remove();
        document.getElementById('answerThree').remove();
        document.getElementById('answerFour').remove();
        questionEl('Congratulations!');
    });
}


const startQuiz = () => {
    startBtn.remove();
    setTimeout (() => {
        quizOne();
    });
}

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    startQuiz();
});