const question = document.getElementById('question-block');
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(question)

let currentQuestion = {};
let acceptingAnswers = true ;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = {
  questions : [
    {   question: 'What is 2 + 2 ?',
        option1: '2',
        option2: '4',
        option3: '6',
        answer: 2
    },
    {   question: 'What is 4 + 4 ?',
        option1: '6',
        option2: '10',
        option3: '8',
        answer: 3
    },

   {   question: 'What is 12 + 12 ?',
        option1: '24',
        option2: '14',
        option3: '71',
        answer: 1
    }
    ]
}