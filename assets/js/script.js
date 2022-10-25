const QUESTIONS = [
    {
    'question': "What is 2 + 2 ??",
    "option1":"2",
    "option2": "4",
    "option3": "6",
    "correctAnswer": "4"
    },
    {
    'question': "in which continent is Japan?",
    "option1":"Europe",
    "option2": "Asia",
    "option3": "America",
    "correctAnswer": "Asia"
    }
    ]
    let questionIndex = 0;

    function displayQuestion() {
      document.getElementById("question-content").innerHTML =  QUESTIONS[questionIndex].question
      document.getElementById("choice-text1").innerHTML =  QUESTIONS[questionIndex].option1
      document.getElementById("choice-text2").innerHTML =  QUESTIONS[questionIndex].option2
      document.getElementById("choice-text3").innerHTML =  QUESTIONS[questionIndex].option3
    }
    displayQuestion();

    function submitAnswer() {
    }
    function checkAnswer() {
    }
    function endQuiz() {
    }
   

    /*
    document.getElementById('submit').addHandler("click", submitAnswer)*/