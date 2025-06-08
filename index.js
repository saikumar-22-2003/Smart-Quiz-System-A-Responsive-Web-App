const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which is the largest planet in the solar system?",
        options: ["Earth", "Jupiter", "Mars", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correct = questions[currentQuestionIndex].answer;
    if (selected === correct) {
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").innerHTML = `<h2>Quiz Completed!</h2><p>Your final score: ${score}/${questions.length}</p>`;
        document.getElementById("next-btn").style.display = "none";
    }
}

loadQuestion();
