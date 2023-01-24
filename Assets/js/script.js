const answerButton1 = document.getElementById('button1')
const answerButton2 = document.getElementById('button2')
const answerButton3 = document.getElementById('button3')
const answerButton4 = document.getElementById('button4')

const startButton = document.getElementById('startButton')
const questionContainerELement = document.getElementById('questionContainer')
const nextButton = document.getElementById('nextButton')

let shuffledQuestions, currentQuestionIndex 

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerButtons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', setNextQuestion)
answerButton1.addEventListener('click', selectAnswer0)
answerButton2.addEventListener('click', selectAnswer1)
answerButton3.addEventListener('click', selectAnswer2)
answerButton4.addEventListener('click', selectAnswer3)

let correctAnswers = 0

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerELement.classList.remove('hide')
    setNextQuestion();
    nextButton.classList.remove('hide')
    
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    showAnswer(shuffledQuestions[currentQuestionIndex]);
    console.log('THE CURRENT QUESTION IS ' + currentQuestionIndex);
    currentQuestionIndex++;
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function showAnswer(question) {
    answerButton1.innerHTML = question.answers[0].text;
    answerButton2.innerHTML = question.answers[1].text;
    answerButton3.innerHTML = question.answers[2].text;
    answerButton4.innerHTML = question.answers[3].text;
}

function selectAnswer0(){
    if(shuffledQuestions[currentQuestionIndex-1].answers[0].correct == true){
        correctAnswers++
        shuffledQuestions[currentQuestionIndex-1].answers[0].correct = false
        showQuestion(correct[0])
        showAnswer(correct[0])
    }else{
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
        showQuestion(incorrect[0])
        showAnswer(incorrect[0])
    }
    console.log('YOUVE GOTTEN ' + correctAnswers + ' RIGHT!');
}

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

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '5', correct: false},
            {text: '1', correct: false}
        ]

    },
    {
        question: 'You come across a band of goblins, what do?',
        answers: [
            {text: 'Befriend them and teach them the value of life', correct: true},
            {text: 'Ignore them, they are just goblins', correct: false},
            {text: '[Insert YouTube Friendly Way of Saying "Kill Them"]', correct: false},
            {text: 'Play Rock Paper Scissors with Them, betting your life savings on the result', correct: false}
        ]
    },
    {
        question: 'When was I born?',
        answers: [
            {text: '04-04-2002', correct: false},
            {text: 'April 4th, 2002', correct: false},
            {text: '04/04/2002', correct: true},
            {text: '04-04-2002 (British Edition)', correct: false}
        ]
    },
    {
        question: 'Who made this Quiz?',
        answers: [
            {text: 'Hayden', correct: true},
            {text: 'Not Hayden', correct: false},
            {text: 'Not Hayden MK.2', correct: false},
            {text: 'Not Hayden MK.3', correct: false}
        ]
    },
    {
        question: 'Do you remember?',
        answers: [
            {text: 'The 21st night of September.', correct: false},
            {text: 'No.', correct: false},
            {text: 'Wake Up', correct: false},
            {text: 'Im just trying to grade your quiz dude', correct: true}
        ]
    },
    {
        question: 'You were the chosen one!',
        answers: [
            {text: 'You were supposed to destroy the Sith!', correct: false},
            {text: 'I make my own destiny.', correct: false},
            {text: 'Hayden seriously.', correct: true},
            {text: 'How did you come up with these', correct: false}
        ]
    },
    {
        question: 'This is our last attempt to reach you. Youve been asleep for years.',
        answers: [
            {text: 'waKE uP', correct: false},
            {text: 'WAke Up', correct: false},
            {text: 'WAKE up', correct: true},
            {text: 'wake UP', correct: false}
        ]
    },
    {
        question: 'Can I have your credit card information?',
        answers: [
            {text: 'No.', correct: false},
            {text: 'No pt.2', correct: false},
            {text: 'Okay fine you lil rascal you', correct: true},
            {text: 'No but in a funny accent', correct: false}
        ]
    },
    {
        question: 'How much money is in my wallet?',
        answers: [
            {text: '$2', correct: false},
            {text: '$3', correct: false},
            {text: 'No dollars', correct: true},
            {text: 'Please help Im poor', correct: false}
        ]
    },
    {
        question: 'When can I come over?',
        answers: [
            {text: 'Tonight', correct: false},
            {text: 'Tomorrow Night', correct: false},
            {text: 'Never', correct: true},
            {text: 'Last Night', correct: false}
        ]
    }
]