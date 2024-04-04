const questions = [
    {
        question: "Q1/10: How do you like to<br>prepare for gaming?",
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
        question: "Q2/10: What is your<br>greatest fear?",
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
        question: "Q3/10: What character<br>would you pick?",
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
        question: "Q4/12: What is your<br>ideal party?",
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
        question: "Q5/10: What is your favorite<br>day of the school year?",
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
        question: "Q6/10: What kind of driver<br>are you?",
        answers: {
            S: {
                text: "admire surroundings",
                scores: { D: 0, C: 0, H: 0, S: +1 },
            },
            D: {
                text: "often switch lanes",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            C: {
                text: "text and drive",
                scores: { D: 0, C: +1, H: 0, S: 0 },
            },
            H: {
                text: "passenger princess",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
        },
    },
    {
        question: "Q7/10: What is your<br>favorite drink?",
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
        question: "Q8/10: What do you like to<br>do after school?",
        answers: {
            D: {
                text: "read books",
                scores: { D: +1, C: 0, H: 0, S: 0 },
            },
            H: {
                text: "paint pictures",
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
        question: "Q9/10: When you play games,<br>what do you expect?",
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
        question: "Q10/10: Why do you<br>play games?",
        answers: {

            H: {
                text: "to meet new people",
                scores: { D: 0, C: 0, H: +1, S: 0 },
            },
            S: {
                text: "for the story",
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
        image: "Heart.png"
    },
    "SPADE": {
        image: "Spade.png"
    },
    "DIAMOND": {
        image: "Diamond.png"
    },
    "CLUB": {
        image: "Club.png"
    },
};

let currentQuestion = 0;

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
});


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
    const resultTitleContainer = document.querySelector('.result-title');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    let topDimension = '';

    // math
    for (const dimension in userAnswers) {
        if (!topDimension || userAnswers[dimension] > userAnswers[topDimension]) {
            topDimension = dimension;
        }
    }

    // images
    const resultImageName = {
        'C': 'Club.png',
        'S': 'Spade.png',
        'D': 'Diamond.png',
        'H': 'Heart.png'
    }[topDimension];


    // percentages
    const totalScore = Object.values(userAnswers).reduce((acc, curr) => acc + curr, 0);
    const percentages = {};
    for (const dimension in userAnswers) {
        percentages[dimension] = ((userAnswers[dimension] / totalScore) * 100).toFixed(2);
    }

    const sortedPercentages = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
    let percentagesHTML = '';
    for (const [dimension, percentage] of sortedPercentages) {
        const dimensionName = {
            'C': 'Club',
            'S': 'Spade',
            'D': 'Diamond',
            'H': 'Heart'
        }[dimension];
        percentagesHTML += `${dimensionName}: ${percentage}%<br>`;
    }
    percentagesHTML += '';

    //descriptions
    const resultDescriptions = {
        'C': '<h2><br>You enjoy trolling and wrecking havoc. You often spawn camp, friendly fire, exploit glitches etc. You also prefer multiplayer games<br></br>You might enjoy:<br>Red Dead Redemption<br>Minecraft<br>Rust</h2>',
        'S': '<h2><br>You enjoy open-world games and going on journeys. You are often seen alone in MMOs or you play single-player games.<br></br>You might enjoy:<br>Zelda<br>The Witness<br>Firewatch</h2>',
        'D': '<h2><br>You have a logical and analytical personality. You prefer to approach tasks methodically and solve problems efficiently.<br></br>You might enjoy:<br>Stardew Valley<br>Destiny 2<br>Hades</h2>',
        'H': '<h2><br>You enjoy talking and meeting new people in games. You often play multiplayer MMORPG games.<br></br>You might enjoy:<br>Among Us<br>Guild War2<br>Phasmophobia</h2>'
    };

    // title
    const resultTitle = {
        'C': 'The Killer',
        'S': 'The Explorer',
        'D': 'The Achiever',
        'H': 'The Socializer'
    }[topDimension];



    // Showing the result title, percentages, description, and image
    resultTitleContainer.innerText = `${resultTitle}`;
    resultTextContainer.innerHTML = percentagesHTML + resultDescriptions[topDimension];
    resultImage.src = "images/" + resultImageName;
    resultImage.alt = `${resultImageName} Image`;

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}


function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); 
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


