// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Add quiz questions dynamically to the quiz modal
var quizQuestions = [
    {
        question: "Which is more important for children?",
        options: ["book.jpg", "work.jpg"],
        correctAnswer: "book.jpg"
    },
    // Add more questions similarly
];

var currentQuestion = 0;
var score = 0;

function loadQuizQuestion() {
    var questionContainer = document.getElementById("quiz");
    var question = quizQuestions[currentQuestion];

    var html = "<h2>Question " + (currentQuestion + 1) + ":</h2>";
    html += "<p>" + question.question + "</p>";
    html += "<div class='options'>";
    for (var i = 0; i < question.options.length; i++) {
        html += "<img src='" + question.options[i] + "' alt='Option " + (i + 1) + "' onclick='answerQuestion(\"" + question.options[i] + "\")'>";
    }
    html += "</div>";

    questionContainer.innerHTML = html;
}

function answerQuestion(chosenOption) {
    var question = quizQuestions[currentQuestion];
    if (chosenOption === question.correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        loadQuizQuestion();
    } else {
        // End of quiz, display score
        alert("Quiz Complete! Your score: " + score + "/" + quizQuestions.length);
        closeModal('quizModal');
        // Reset quiz variables for next attempt
        currentQuestion = 0;
        score = 0;
    }
}

// Load the first quiz question when the quiz modal is opened
document.getElementById("quizModal").addEventListener('click', function() {
    loadQuizQuestion();
});