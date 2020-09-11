console.log("🎾 -----Quizz----- 🎾");

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log("all choices", choices);
// const questionCounterText = document.getElementById("questionCounter");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
// progressBar ref:
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
];

// constants

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log("all questions available in array:", availableQuestions);
  getNewQuestion();
};

// pick up a question:
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score)
    // then go to end page:

    return window.location.assign("../end.html");
  }

  questionCounter++;
  // update text HTML - Question nr:
  // questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS
  // string interpolation:
  // questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  // Update ID progressBarFull CSS, using % to pixel width:
  console.log((questionCounter / MAX_QUESTIONS) * 100);
  // String concat + adding '%' for CSS to work:
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  // put Question to HTML:
  question.innerHTML = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  // remove from array the question used:
  availableQuestions.splice(questionIndex, 1);
  // console.log("questions left in array:", availableQuestions);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    // console.log("what click event:", event.target);
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    // console.log(selectedAnswer == currentQuestion.answer);

    // change class based on answer:
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    // console.log(classToApply);

    // call incrementScore function and add Bonus points:
    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    // change back class based on time, then new question:
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1500);
  });
});

// update score:
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();

// console.log("question counter:", questionCounter);
