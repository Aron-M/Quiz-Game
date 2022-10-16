const question = document.getElementById('question-block');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true ;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

