const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

const questions = [
  {
    question: "What is HTML",
    answers: [
      { text: "standard markup language for creating Web pages", correct: false },
      { text: "Hypertext Markup Language", correct: false },
      { text: "Describes the structure of a web page", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
];

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  if (currentQuestionIndex < shuffledQuestions.length) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    showQuestion(currentQuestion);
  } else {
    endGame();
  }
}

function showQuestion(question) {
  // Implement logic to display the question and its answers in your HTML
}

function resetState() {
  // Implement logic to reset the question container for the next question
}

function endGame() {
  // Implement logic to end the game, e.g., show a "Game Over" message
}