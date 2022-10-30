const QUESTIONS = [
{
    'question': "What is 2 + 2 ??",
    "option1":"2",
    "option2": "4",
    "option3": "6",
    "correctAnswer": "4"
    },

{
    'question': "What is 5 + 7 ??",
    "option1":"6",
    "option2": "31",
    "option3": "12",
    "correctAnswer": "12"
    },

{
    'question': "What is 15 + 27 ??",
    "option1":"36",
    "option2": "315",
    "option3": "42",
    "correctAnswer": "42"
    },

{
    'question': "What is 51 + 117 ??",
    "option1":"168",
    "option2": "231",
    "option3": "112",
    "correctAnswer": "168"
      },

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
   