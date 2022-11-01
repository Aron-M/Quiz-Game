let QUESTIONS = [{
    'question': "What is 2 + 2 ?",
    "option1": "2",
    "option2": "4",
    "option3": "6",
    "correctAnswer": "4"
  },

  {
    'question': "What is 5 + 7 ?",
    "option1": "6",
    "option2": "31",
    "option3": "12",
    "correctAnswer": "12"
  },

  {
    'question': "What is 15 + 27 ?",
    "option1": "36",
    "option2": "315",
    "option3": "42",
    "correctAnswer": "42"
  },

  {
    'question': "What is 51 + 117 ?",
    "option1": "168",
    "option2": "531",
    "option3": "110",
    "correctAnswer": "168"
  },

  {
    'question': "What is 151 + 1111 ?",
    "option1": "2544",
    "option2": "831",
    "option3": "1262",
    "correctAnswer": "1262"
  },

]


let questionIndex = 0;
let correctAnswer = "";
let totalScore = 0;
let questionNumber = 1;
const questionNumContainer = document.getElementById("question-1");
let link = document.createElement('link');

function displayQuestion() { 
  document.getElementById("question-content").innerHTML = QUESTIONS[questionIndex].question;
  document.getElementById("choice-text1").innerHTML = QUESTIONS[questionIndex].option1;
  document.getElementById("choice-text2").innerHTML = QUESTIONS[questionIndex].option2;
  document.getElementById("choice-text3").innerHTML = QUESTIONS[questionIndex].option3;
  correctAnswer = QUESTIONS[questionIndex].correctAnswer;
  document.getElementById("button-1").addEventListener('click', submitAnswer);
  document.getElementById("button-2").addEventListener('click', submitAnswer);
  document.getElementById("button-3").addEventListener('click', submitAnswer);
  displayQuestionNumber();
  
}

// Grab element 
// Do something with the element

function submitAnswer(event) {
  document.getElementById("button-1").removeEventListener('click', submitAnswer);
  document.getElementById("button-2").removeEventListener('click', submitAnswer);
  document.getElementById("button-3").removeEventListener('click', submitAnswer);
  let userAnswer = event.target.innerText;
  if ((userAnswer)) {
    questionNumber++;
  }
  
  if (checkAnswer(userAnswer)) {
    totalScore++;
    console.log('score ', totalScore)
    questionIndex++;
    
  } else {
    questionIndex++;
 
  }
  if (questionIndex < (QUESTIONS.length)) {
    displayQuestion()

  } else {
    endQuiz()
  }
}

 function displayQuestionNumber() {
  questionNumContainer.innerText = "QUESTION " + questionNumber;
  if (checkAnswer(userAnswer)) {
      questionNumber++;
    }
  }

function checkAnswer(userAnswer) {
  if (userAnswer === correctAnswer) {
    return true
  } else {
    return false
  }
}

function endQuiz() {
  window.location.href = "final-score-congrats.html";
  //congratulate and put final score 
}

function startQuiz() {
  displayQuestion();
  
};

startQuiz()