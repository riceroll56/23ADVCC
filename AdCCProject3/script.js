const questions = [
    {
        question: "Q1/10: How do you like to prepare for gaming?",
        // image: "images/Q1.gif",
        answers: {
            D: {
                text: "analyzing gameplay",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            C: {
                text: "I don't prepare...",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
            H: {
                text: "messaging friends",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            S: {
                text: "arm myself",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
        },
    },
    {
        question: "Q2/10: What is your greatest fear?",
        // image: "images/Q2.gif",
        answers: {
            S: {
                text: "not knowing",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
            H: {
                text: "being alone",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            D: {
                text: "losing",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            C: {
                text: "I fear nothing",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
        },
    },
    {
        question: "Q3/10: What kind of character would you pick?",
        // image: "images/Q3.gif",
        answers: {
            D: {
                text: "gun slinger",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            S: {
                text: "fearless explorer",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
            H: {
                text: "healer",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            C: {
                text: "assassin",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
        },
    },
    {
        question: "Q4/12: What is your ideal party?",
        // image: "images/Q4.gif",
        answers: {
            D: {
                text: "celebrating success",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            C: {
                text: "surprise party",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
            H: {
                text: "crowded parties",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            S: {
                text: "don't like parties",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
        },
    },
    {
        question: "Q5/10: What is your favorite day of the school year?",
        // image: "images/Q5.gif",
        answers: {
            S: {
                text: "first day of school",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
            D: {
                text: "last day of school",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            H: {
                text: "everyday",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            C: {
                text: "none",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
        },
    },
    {
        question: "Q6/10: What kind of driver are you?",
        // image: "images/Q6.gif",
        answers: {
            S: {
                text: "admire surroundings",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
            D: {
                text: "switch lanes to get to destination faster",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            C: {
                text: "text and drive",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
            H: {
                text: "I don't drive, I am a passenger princess",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
        },
    },
    {
        question: "Q7/10: What is your favorite drink?",
        // image: "images/Q7.gif",
        answers: {
            D: {
                text: "coffee",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            C: {
                text: "alcohol",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
            H: {
                text: "tea",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            S: {
                text: "water",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
        },
    },
    {
        question: "Q8/10: What do you like to do after school?",
        // image: "images/Q8.gif",
        answers: {
            D: {
                text: "read books",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            H: {
                text: "a good time",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            C: {
                text: "do puzzles",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
            S: {
                text: "playing pranks",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
        },
    },
    {
        question: "Q9/10: When you play games, what do you expect to happen?",
        answers: {
            D: {
                text: "stupid teammates",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            H: {
                text: "a good time",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            S: {
                text: "a long game session",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
            C: {
                text: "get reported",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },

        },
    },
    {
        question: "Q10/12: Why do you play games?",
        // image: "images/Q10.gif",
        answers: {

            H: {
                text: "to meet new people",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            S: {
                text: "for the story and the world",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
            D: {
                text: "for completion",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            C: {
                text: "to pass the time",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
        },

    },

];

const resultOptions = {
    "HEART": {
        image: ".png"
    },
    "SPADE": {
        image: "2light.png"
    },
    "DIAMOND": {
        image: "3UFO.png"
    },
    "CLUB": {
        image: "4nebula.png"
    },
};


let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


