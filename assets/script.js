// dom elements on top 

var startBtn = document.querySelector('#start-btn');
var introEl = document.querySelector('#intro');
var counterEl = document.querySelector('#counter');
var overEL = document.querySelector('#end-screen');
var questionEl = document.querySelector('#question');
var choicesEl = document.querySelector('#choices');
var timeLeft = 100;
var timer;

var currentQuestion = 0;
var qBank = [

    question0 = {
        text: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: ['getElementByID()','getElementsByClassName()','Both A and B','None of the above'],
        correct: 'Both A and B'
    },
    question1 = {
        text: 'How can a datatype be declared to be a constant type?',
        answers: ['const','var','let','constant'],
        correct: 'const'
    },
    question2 = {
        text: 'Javascript is a/an _____ language.',
        answers: ['Object-Oriented','Object-Based','Procedural','None of the above'],
        correct: 'Object-Oriented'
    },
    question3 = {
        text: 'Which of the following keywords is used to define a variable in Javascript?',
        answers: ['var','let','Both A and B','None of the above'],
        correct: 'Both A and B'
    }

]


// functions

// major function of the game

function startQuiz() {
    introEl.setAttribute('class', 'hide');
    counterEl.textContent = timeLeft;
    timer = setInterval(countdown ,1000)
    setQuestion();
    
}

// countdown function

function countdown() {

    if (timeLeft === 1) {
        clearInterval(timer);
        endGame();
    }

    timeLeft--;
    counterEl.textContent = timeLeft;

}


// function to set the question on the page

function setQuestion() {

    var selectedQuestion = qBank[currentQuestion].text;
    questionEl.textContent = selectedQuestion;
    console.log(selectedQuestion);

    choicesEl.innerHTML = '';

    for (var i = 0; i < qBank[currentQuestion].answers.length; i++) {
        var liElement = document.createElement('li');
        var btnElement = document.createElement('button');
        btnElement.setAttribute('data-index', i)
        choicesEl.appendChild(liElement);
        liElement.appendChild(btnElement);
        const aChoices = qBank[currentQuestion].answers[i];
        btnElement.innerHTML = aChoices;
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

choicesEl.addEventListener('click', function(event){

console.log(event.target)
    if (event.target.matches('button')) {
        console.log('this worked')
        currentQuestion++
        console.log(currentQuestion)

        
        // then we compare if button selected matches correct answer

    }
})

