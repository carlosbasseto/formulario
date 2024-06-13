function calculateScore() {
    const questions = document.querySelectorAll('.question');
    let totalScore = 0;

    questions.forEach(question => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');
        if (selectedAnswer) {
            totalScore += parseInt(selectedAnswer.value);
        }
    });

    document.getElementById('result').innerText = `Sua pontuação total é: ${totalScore}`;
}
