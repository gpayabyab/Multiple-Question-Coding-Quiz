const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");

let shuffledQuestions, currentQuestionIndex; // Use 'let' instead of 'const' since you'll be assigning values later

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0; // Fix the typo here
  questionContainerElement.classList.remove("hide");
  seeNextQuestion();
}

// Define the missing part of the function
function setNextQuestion() {
  // Implement the logic to set the next question
}

// Define the 'questions' array
const questions = [
  {
    question: "What is HTML",
    answers: [
      {
        text: "standard markup language for creating Web pages",
        correct: false,
      },
      { text: "Hypertext Markup Language", correct: false },
      { text: "Describes the structure of a web page", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
];
