// Global variables
let questionIndex = 0;
let correctAnswer = "";
let totalScore = 0;
let questionNumber = 1;
let userAnswer = 0;
let questionNumContainer; // Define questionNumContainer globally

document.addEventListener('DOMContentLoaded', function() {
    const homeScreen = document.getElementById('home-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const congratsScreen = document.getElementById('congrats-screen');
    const startButton = document.getElementById('start-button');

    let questions = []; // Array to store questions

    // Function to shuffle an array using Fisher-Yates algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to load questions from JSON file and shuffle them
    async function loadQuestions() {
        try {
            const response = await fetch('assets/questions/questions.json');
            if (!response.ok) {
                throw new Error('Failed to load questions');
            }
            questions = await response.json();
            questions = shuffleArray(questions); // Shuffle the questions array
            displayQuestion(); // Call displayQuestion after questions are loaded
        } catch (error) {
            console.error('Error loading questions:', error);
            // Display error message to the user
            questionContent.textContent = 'Error loading questions. Please try again later.';
        }
    }

    // Function to hide home screen and show quiz screen
    function startQuiz() {
        // Hide the home-screen content
        homeScreen.classList.add('d-none');
        
        // Show the quiz-screen content
        quizScreen.classList.remove('d-none');
        
        // Load questions
        loadQuestions(); 
    }

    // Add event listener to start button
    startButton.addEventListener('click', startQuiz);

    // Function to display questions and provide the multiple choice options
    function displayQuestion() {
        // Get the current question object from the QUESTIONS array
        const currentQuestion = questions[questionIndex];

        // Display the question content
        document.getElementById("question-content").textContent = currentQuestion.question;

        // Display the options
        const options = currentQuestion.options;
        for (let i = 0; i < options.length; i++) {
            document.getElementById(`button-${i + 1}`).textContent = options[i];
        }

        // Set the correct answer for this question
        correctAnswer = currentQuestion.correctAnswer;

        // Add event listeners to option buttons
        document.getElementById("button-1").addEventListener('click', submitAnswer);
        document.getElementById("button-2").addEventListener('click', submitAnswer);
        document.getElementById("button-3").addEventListener('click', submitAnswer);

        // Display the question number
        questionNumContainer.innerText = "QUESTION " + questionNumber;
    }

    // Function to submit an answer
    function submitAnswer(event) {
        let userAnswer = event.target.innerText;
        if ((userAnswer)) {
            questionNumber++;
        }

        if (checkAnswer(userAnswer)) {
            totalScore++;
            console.log('score ', totalScore);
            questionIndex++;

        } else {
            questionIndex++;

        }
        if (questionIndex < (questions.length)) {
            displayQuestion();

        } else {
            endQuiz();
        }
    }

    // Checking if user answer is the same as the correct answer
    function checkAnswer(userAnswer) {
        if (userAnswer === correctAnswer) {
            return true;
        } else {
            return false;
        }
    }

    // Function to end the quiz
    function endQuiz() {
        localStorage.setItem("totalScore", totalScore);
        quizScreen.classList.add('d-none');
        congratsScreen.classList.remove('d-none');
        totalScore = 0;
    }

    // Get the container for question number
    questionNumContainer = document.getElementById("question-1");

    // Add event listener to start over button
const startOverButton = document.getElementById('start-over-button');
startOverButton.addEventListener('click', startOver);

// Function to start over the quiz
function startOver() {
    // Reset variables
    questionIndex = 0;
    totalScore = 0;
    questionNumber = 1;

    // Show the home-screen content
    homeScreen.classList.remove('d-none');

    // Hide the congrats-screen content
    congratsScreen.classList.add('d-none');

    // Hide the quiz-screen content
    quizScreen.classList.add('d-none');
}

});


