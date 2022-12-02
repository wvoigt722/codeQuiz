// dom elements on top 

var startBtn = document.querySelector('#start-btn');
var introEl = document.querySelector('#intro');
var counterEl = document.querySelector('#counter');
var overEL = document.querySelector('#end-screen');
var questionEL = document.querySelector('#question')
var timeLeft = 5;
var timer;

var qbank = [

    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: ['getElementByID()','getElementsByClassName()','Both A and B','None of the above'],
        correct: 'Both A and B'
    },
    {
        question: 'How can a datatype be declared to be a constant type?',
        answers: ['const','var','let','constant'],
        correct: 'const'
    },
    {
        question: 'Javascript is a/an _____ language.',
        answers: ['Object-Oriented','Object-Based','Procedural','None of the above'],
        correct: 'Object-Oriented'
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        answers: ['var','let','Both A and B','None of the above'],
        correct: 'Both A and B'
    }

]

// functions

function startQuiz() {
    introEl.setAttribute('class', 'hide');
    counterEl.textContent = timeLeft;
    timer = setInterval(countdown ,1000)
    getQuestion();
}


function countdown() {

    if (timeLeft === 1) {
        clearInterval(timer);
        endGame();
    }

    timeLeft--;
    counterEl.textContent = timeLeft;

}

function getQuestion() {

    for (var i = 0; i < qbank.length; i++) {
        questionEL.textContent = JSON.stringify(qbank[i]);
         
    }
    

}



// function to end the game

function endGame() {
    console.log('the game is over');
    questionEL.setAttribute('class', 'hide');
    overEL.classList.remove('hide');

}



// event listener for buttons

startBtn.addEventListener('click', startQuiz);
