const questions = document.querySelectorAll('.question');
const submitButton = document.querySelector('#submit');
const resultContainer = document.querySelector('#resultContainer');
let score = 0;

questions.forEach(question => {
    const answers = question.querySelectorAll('.answer');
    const correctAnswer = question.querySelector('.answer[data-correct="true"]');

    answers.forEach(answer => {
        answer.addEventListener('click', () => handleAnswerClick(answer, correctAnswer, answers));
    });
});

submitButton.addEventListener('click', () => showResult());
function handleAnswerClick(answer, correctAnswer, allAnswers) {
    allAnswers.forEach(a => a.disabled = true);

    if (answer === correctAnswer) {
        answer.classList.add('correct');
        score++;
    } else {
        answer.classList.add('incorrect');
        correctAnswer.classList.add('correct');
    }
}
function showResult() {
    const percentage = (score / questions.length) * 100;
    resultContainer.innerHTML = `
        <p>Правильных ответов: ${score}</p>
        <p>Процент правильных ответов: ${percentage.toFixed(2)}%</p>
    `;
}
