const introForm = document.getElementById('intro-form');
    const quizSection = document.getElementById('quiz-section');
    const quizQuestion = document.getElementById('quiz-question');
    const answer1Label = document.getElementById('answer-1-label');
    const answer2Label = document.getElementById('answer-2-label');
    const answer3Label = document.getElementById('answer-3-label');
    const answer4Label = document.getElementById('answer-4-label');
    const nextQuestionBtn = document.getElementById('nextQuestion');
    const submitQuiz = document.getElementById('submitQuiz');
    const radioButtons = document.getElementsByName('answer');

    const questions = [
        {
            question: "Feeling down, depressed, or hopeless?",
            answers: ["Nearly every day", "More than half of days", "Several days", "Not at all"]
        },
        {
            question: "Trouble falling or staying asleep, or sleeping too much?",
            answers: ["Nearly every day", "More than half of days", "Several days", "Not at all"]
        },
        {
            question: "Feeling tired or having little energy?",
            answers: ["Nearly every day", "More than half of days", "Several days", "Not at all"]
        }
    ];

    let currentQuestion = 0;

    function loadQuestion() {
        const currentData = questions[currentQuestion];
        quizQuestion.textContent = currentData.question;
        answer1Label.textContent = currentData.answers[0];
        answer2Label.textContent = currentData.answers[1];
        answer3Label.textContent = currentData.answers[2];
        answer4Label.textContent = currentData.answers[3];

        document.querySelectorAll('input[name="answer"]').forEach(radio => {
            radio.checked = false;
        });

        nextQuestionBtn.style.display = 'none';
        submitQuiz.style.display = 'none';

        if (currentQuestion === questions.length - 1) {
            submitQuiz.style.display = 'block';
            nextQuestionBtn.style.display = 'none';
            
        } 
    }

    document.getElementById('startQuiz').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const helpType = document.getElementById('help-type').value;

        if (name && age) {
            introForm.style.display = 'none';
            quizSection.style.display = 'block';
            loadQuestion();
        } else {
            alert('Please fill out all fields.');
        }
    });

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if(currentQuestion < questions.length - 1) {
                nextQuestionBtn.style.display = 'block';
            }
        });
    });

    nextQuestionBtn.addEventListener('click', () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
            
        }
    });

    submitQuiz.addEventListener('click', () => {
        alert('Thank you for completing the assessment!');
        location.reload();
    });