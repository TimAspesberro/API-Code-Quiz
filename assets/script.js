
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var questionDiv = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var startBtn = document.getElementById("start-button");
var highscoreBtn = document.getElementById("highscore-btn");

const questions = ['Which of these is not a javascript data type?', 
    'Which html tag is used to create a navigation bar?', 
    'Which of these is the css universal selector?', 
    'Which one of these is not a programming language?'];

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
};


var isWrong = false;

const wrongAns = () => {
    if (isWrong === false) {
        isWrong = true
    }
};

//countdown timer

var isDone = false;
const quizDone = () => {
    isDone = true;
};


const countdown = () => {
    var time = 59;
    const countdownEl = document.getElementById('countdownEl');

    const timerInterval = setInterval(() => {
        countdownEl.innerHTML = `Remaining Time: ${time}`;
        time--;

        if (isWrong){
            time = time - 5;
            document.getElementById('wrongEl').innerHTML = `-5 seconds`
            const wrongMsg = () => {setTimeout(()=> {
                document.getElementById('wrongEl').innerHTML = ``;
            }, 2000)
            }
            wrongMsg();
            isWrong = false;
        }

        if (time <= 0){
            clearInterval(timerInterval);
            countdownEl.innerHTML = 'No Time Left, Try again.'
            document.getElementById('que-el').remove();
            document.getElementById('answerOne').remove();
            document.getElementById('answerTwo').remove();
            document.getElementById('answerThree').remove();
            document.getElementById('answerFour').remove();
            document.getElementById('startEl').innerHTML = `<button id="start-button" class="start-btn btn">Start Quiz</button>`;
            document.getElementById('start-button').addEventListener('click', () => {
                document.getElementById('start-button').remove();
                startQuiz();
                
            });
        }

        score = '';
        myScore = '';
        
        const highscore = (time) => {
            score = time;
            myScore = 59 - score;
            document.getElementById('doneEl').innerHTML = `You finished the quiz in ${myScore} seconds!`
        };

        if (isDone === true){
            clearInterval(timerInterval)
            console.log('stopped timer')
            highscore(time);
            console.log(myScore)

            topScore = localStorage.getItem('score')
            if (myScore <= topScore || !topScore){
            localStorage.setItem('score', myScore);
            document.getElementById('top-score').innerHTML = `Highscore: ${myScore}`;
            console.log('new top score!')
            }
    
        };

    }, 1000);
    
};


const quizOne = () => {
    questionEl(questions[0]);
    answerEl(answersOne);

    document.getElementById("answerOne").addEventListener("click", () => {
        wrongAns()
    });
    document.getElementById("answerTwo").addEventListener("click", () => {
        wrongAns()
    });
    document.getElementById("answerThree").addEventListener("click", () => {
        wrongAns()
    });
    document.getElementById("answerFour").addEventListener("click", () => {
        document.getElementById('que-el').remove();
        document.getElementById('answerOne').remove();
        document.getElementById('answerTwo').remove();
        document.getElementById('answerThree').remove();
        document.getElementById('answerFour').remove();
        quizTwo()
    });
    
}

const quizTwo = () => {
    answerEl(answersTwo);
    questionEl(questions[1]);
    
    document.getElementById("answerOne").addEventListener("click", () => {
        wrongAns()
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
        wrongAns()
    });
    document.getElementById("answerFour").addEventListener("click", () => {
        wrongAns()
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
        wrongAns()
    });
    document.getElementById("answerThree").addEventListener("click", () => {
        wrongAns()
    });
    document.getElementById("answerFour").addEventListener("click", () => {
        wrongAns()
    });
}

const quizFour = () => {
    questionEl(questions[3]);
    answerEl(answersFour);

    document.getElementById("answerOne").addEventListener("click", () => {
        wrongAns()
    });
    document.getElementById("answerTwo").addEventListener("click", () => {
        wrongAns()
    });
    document.getElementById("answerThree").addEventListener("click", () => {
        wrongAns()
    });
    document.getElementById("answerFour").addEventListener("click", () => {
        document.getElementById('que-el').remove();
        document.getElementById('answerOne').remove();
        document.getElementById('answerTwo').remove();
        document.getElementById('answerThree').remove();
        document.getElementById('answerFour').remove();
        questionEl('Congratulations!');
        quizDone();
    });
}

const getScore = () => {
    var topScore = localStorage.getItem('score');
    if (!topScore){
        document.getElementById('top-score').innerHTML = `Highscore: N/A`
    } else {
    document.getElementById('top-score').innerHTML = `Highscore: ${topScore}`;
    }   
}


const startQuiz = () => {
    startBtn.remove();
    document.getElementById('button').remove();
    quizOne();
    countdown();
}

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    startQuiz();
});

getScore();