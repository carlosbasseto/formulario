function calculateScore() {
    var form = document.forms['quiz-form'];
    var totalScore = 0;
    for (var i = 1; i <= 10; i++) {
        var question = form['question' + i];
        for (var j = 0; j < question.length; j++) {
            if (question[j].checked) {
                totalScore += parseInt(question[j].value);
            }
        }
    }
    var resultText = '';
    if (totalScore <= 30) {
        resultText = 'Sua saúde fisica está horrível';
    } else if (totalScore <= 50) {
        resultText = 'Sua saúde fisica está ruim';
    } else if (totalScore <= 80) {
        resultText = 'Sua saúde fisica está boa';
    } else if (totalScore < 101) {
        resultText = 'Sua saúde fisica está ótima';
    } else {
        resultText = 'Pontuação inválida';
    }
    document.getElementById('result').textContent = resultText;
}