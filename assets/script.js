// dom elements on top 

var startBtn = document.querySelector('#start-btn');
var introEl = document.querySelector('#intro');
var counterEl = document.querySelector('#counter');
var overEL = document.querySelector('#end-screen');
var timeLeft = 5;
var timer;

var qbank = [

    {
        question: 'Random Question-1',
        answers: ['1','2','3','4'],
        correct: '1'
    },
    {
        question: 'Random Question-2',
        answers: ['1','2','3','4'],
        correct: '1'
    },
    {
        question: 'Random Question-3',
        answers: ['1','2','3','4'],
        correct: '1'
    },
    {
        question: 'Random Question-4',
        answers: ['1','2','3','4'],
        correct: '1'
    }

]

// functions

function startQuiz() {
    introEl.setAttribute('class', 'hide');
    counterEl.textContent = timeLeft;
    timer = setInterval(countdown ,1000)
}


function countdown() {

    if (timeLeft === 1) {
        clearInterval(timer);
        endGame();
    }

    timeLeft--;
    counterEl.textContent = timeLeft;

}

// function to end the game

function endGame() {
    console.log('the game is over');
    overEL.classList.remove('hide');

}



// event listener for buttons

startBtn.addEventListener('click', startQuiz);
