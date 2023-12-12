const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const shuffledQuestions, currentQuestionsIndex 

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionIndex - 0
    questionContainerElement.classList.remove('hide')
    seeNextQuestion()
}
// start button is working however, not sure why there's an uncaught syntac error for the first line 

function setNextQuestion 

const question = [
    question: 'What is HTML',
    answers: [
        { text: 'standard markup language for creating Web pages', correct: false},
        { text: 'Hypertext Markup Language', correct: false},
        { text: 'Describes the structure of a web page', correct: false},
        { text: 'All of the above', correct: true}
    ]
]