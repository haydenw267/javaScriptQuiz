
//these are all the constants I made to target elements of the HTML
const answerButton1 = document.getElementById('button1')
const answerButton2 = document.getElementById('button2')
const answerButton3 = document.getElementById('button3')
const answerButton4 = document.getElementById('button4')
const finalScore = document.getElementById('finalScore')
const startButton = document.getElementById('startButton')
const questionContainerELement = document.getElementById('questionContainer')
const nextButton = document.getElementById('nextButton')

let shuffledQuestions, currentQuestionIndex 

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerButtons')
const clockElement = document.getElementById('clock')

//these are the event listeners
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', setNextQuestion)
answerButton1.addEventListener('click', selectAnswer0)
answerButton2.addEventListener('click', selectAnswer1)
answerButton3.addEventListener('click', selectAnswer2)
answerButton4.addEventListener('click', selectAnswer3)

//universal variables
let correctAnswers = 0
let timeLeft = 120
let gameStart = 0
let gameEndState = 0

function startGame(){
    startButton.classList.add('hide');
    clockElement.classList.remove('hide');
    clockElement.innerText = timeLeft
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerELement.classList.remove('hide');
    setNextQuestion();
    nextButton.classList.remove('hide');
    gameStart = 1;
    
}

function gameEnd(){
    gameEndState = 1
    questionElement.classList.add('hide');
    answerButtonsElement.classList.add('hide');
    nextButton.classList.add('hide');
    clockElement.classList.add('hide');
    clockElement.classList.remove('clock');
    finalScore.innerText = correctAnswers + '/10';
    finalScore.classList.remove('hide');    
}

//tickDown is the function the setInterval method uses to start the timer

function tickDown(){
    if(gameStart == 1 && timeLeft > 0){
    timeLeft--
    console.log('THERE IS ' + timeLeft + 'SECONDS LEFT!')
    clockElement.innerText = timeLeft
    }else if(gameEndState != 1 && gameStart == 1){
       gameEnd();
    }
}

//setNextQuestion checks the current question index and shows the question and answers for that question

function setNextQuestion(){
    if(currentQuestionIndex < 10){
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        showAnswer(shuffledQuestions[currentQuestionIndex]);
        console.log('THE CURRENT QUESTION IS ' + currentQuestionIndex);
        currentQuestionIndex++;
    }else{
        gameEnd();
    }
}

//showQuestion and showAnswer populate the question and answer boxes

function showQuestion(question) {
    questionElement.innerText = question.question
}

function showAnswer(question) {
    answerButton1.innerHTML = question.answers[0].text;
    answerButton2.innerHTML = question.answers[1].text;
    answerButton3.innerHTML = question.answers[2].text;
    answerButton4.innerHTML = question.answers[3].text;
}

//This section is dedicated to the functions that go off when you click an answer option

function selectAnswer0(){
    if(shuffledQuestions[currentQuestionIndex-1].answers[0].correct == true){
        correctAnswers++
        shuffledQuestions[currentQuestionIndex-1].answers[0].correct = false
        showQuestion(correct[0])
        showAnswer(correct[0])
    }else{
        timeLeft = timeLeft - 5
        clockElement.innerText = timeLeft
        showQuestion(incorrect[0])
        showAnswer(incorrect[0])
    }
    console.log('YOUVE GOTTEN ' + correctAnswers + ' RIGHT!');
    
}
function selectAnswer1(){
        if(shuffledQuestions[currentQuestionIndex-1].answers[1].correct == true){
        correctAnswers++
        shuffledQuestions[currentQuestionIndex-1].answers[1].correct = false
        showQuestion(correct[0])
        showAnswer(correct[0])

    }else{
        timeLeft = timeLeft - 5
        clockElement.innerText = timeLeft
        showQuestion(incorrect[0])
        showAnswer(incorrect[0])
    }
    console.log('YOUVE GOTTEN ' + correctAnswers + ' RIGHT!');
}
function selectAnswer2(){
    if(shuffledQuestions[currentQuestionIndex-1].answers[2].correct == true){
        correctAnswers++
        shuffledQuestions[currentQuestionIndex-1].answers[2].correct = false
        showQuestion(correct[0])
        showAnswer(correct[0])
    }else{
        timeLeft = timeLeft - 5
        clockElement.innerText = timeLeft
        showQuestion(incorrect[0])
        showAnswer(incorrect[0])
    }
    console.log('YOUVE GOTTEN ' + correctAnswers + ' RIGHT!');
}
function selectAnswer3(){
    if(shuffledQuestions[currentQuestionIndex-1].answers[3].correct == true){
        correctAnswers++
        shuffledQuestions[currentQuestionIndex-1].answers[3].correct = false
        showQuestion(correct[0])
        showAnswer(correct[0])
    }else{
        timeLeft = timeLeft - 5
        clockElement.innerText = timeLeft
        showQuestion(incorrect[0])
        showAnswer(incorrect[0])
    }
    console.log('YOUVE GOTTEN ' + correctAnswers + ' RIGHT!');
}

//Added correct and incorrect question states to allow one to know if they got a question right or wrong

const correct = [
    {
        question: 'GOOD JOB!',
        answers: [
            {text: 'YOU DID IT', correct: false},
            {text: 'CONGRATS', correct: false},
            {text: 'NO REALLY GOOD JOB', correct: false},
            {text: 'IM SO PROUD OF YOU', correct: false}
        ]
    }
]

const incorrect = [
    {
        question: 'YOU FOOL. YOU IDIOT. BASK IN YOUR OWN INCOMPETENCE.',
        answers: [
            {text: 'HOW COULD YOU', correct: false},
            {text: 'YOUVE SQUANDERED THIS CHANCE', correct: false},
            {text: 'YOU ARE NOW 10% MORE INCORRECT', correct: false},
            {text: 'DUDE I REALLY CANT BELIEVE YOU', correct: false}
        ]
    }
]

//Im treating the questions and answers as objects.

const questions = [
    {
        question: 'Which of these is a data type in Javascript?',
        answers: [
            {text: 'String', correct: true},
            {text: 'Web', correct: false},
            {text: 'Net', correct: false},
            {text: 'Homunculus', correct: false}
        ]

    },
    {
        question: 'What is the use of the isNaN function?',
        answers: [
            {text: 'It returns true if the argument is not a number; otherwise, it is false', correct: true},
            {text: 'isNaN do what now?', correct: false},
            {text: 'It returns false if the argument is not a number; otherwise, it is true', correct: false},
            {text: 'It solves world hunger, Im really unsure why we havent run it yet', correct: false}
        ]
    },
    {
        question: 'Who developed JavaScript?',
        answers: [
            {text: 'Netscape', correct: true},
            {text: 'Skitscape', correct: false},
            {text: 'Landscape... on the net', correct: false},
            {text: 'epacsteN', correct: false}
        ]
    },
    {
        question: 'What does "3 >= 2" output?',
        answers: [
            {text: 'true', correct: true},
            {text: 'not true', correct: false},
            {text: 'false', correct: false},
            {text: 'correct', correct: false}
        ]
    },
    {
        question: 'How many functions are there?',
        answers: [
            {text: 'A lot, like at least 4', correct: false},
            {text: 'EXCATLY 312', correct: false},
            {text: '24', correct: false},
            {text: 'You can make your own, so technically infinite', correct: true}
        ]
    },
    {
        question: 'Which data type would "megamind" fall into?',
        answers: [
            {text: 'Not a string', correct: false},
            {text: 'Number (really?)', correct: false},
            {text: 'String', correct: true},
            {text: 'Villain (kinda)', correct: false}
        ]
    },
    {
        question: 'How do you create a function?',
        answers: [
            {text: 'Yell at your computer', correct: false},
            {text: 'function() []', correct: false},
            {text: 'function "name"(){} ', correct: true},
            {text: 'yes', correct: false}
        ]
    },
    {
        question: 'What is the current industry standard syntax for JavaScript?',
        answers: [
            {text: 'ES4', correct: false},
            {text: 'ES5', correct: false},
            {text: 'ES6', correct: true},
            {text: 'ES3', correct: false}
        ]
    },
    {
        question: 'Is JavaScript really cool?',
        answers: [
            {text: 'no', correct: false},
            {text: 'also no', correct: false},
            {text: 'yes', correct: true},
            {text: 'no but im twisting my mustache', correct: false}
        ]
    },
    {
        question: 'JavaScript wasnt always called that. What other name has it had?',
        answers: [
            {text: 'Florida', correct: false},
            {text: 'Janka', correct: false},
            {text: 'Mocha', correct: true},
            {text: 'A McDonalds #9', correct: false}
        ]
    }
]

setInterval(tickDown, 1000);