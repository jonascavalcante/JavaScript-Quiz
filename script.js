const quizData = [
    {
        question: 'Como escrever uma condicional?',
        a: 'if (i == 5)',
        b: 'if i = 5 then',
        c: 'if i == 5 then',
        d: 'if i = 5',
        correct: 'a'
    },
    {
        question: 'Como fazer um loop FOR?',
        a: 'for (i <= 5; i++)',
        b: 'for (i = 0; i <= 5)',
        c: 'for (i = 0; i <= 5; i++)',
        d: 'for i = 1 to 5',
        correct: 'c'
    },
    {
        question: 'Como fazer uma condicional de negativa?',
        a: 'if (i <> 5)',
        b: 'if i =! 5 then',
        c: 'if (i != 5)',
        d: 'if i <> 5',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    
    answerEls.forEach(answerEl => {       
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {       
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();
    console.log(answer);

    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        } else {
            
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // TODO: Show results 
            quiz.innerHTML = `<h2>Você acertou ${score}/${quizData.length} questões.</h2> <button onclick="location.reload()";>Refazer</button>`;
        }
    }

});