
const inputs = Array.from(document.querySelectorAll('input'));
const checkBtn = document.getElementById("checkBtn");
const answerBtn = document.getElementById("answerBtn");
const scoreLabel = document.getElementById("scoreLabel");
const correctAnswers = {
    0 : "czystość",
    1 : "prawość",
    2 : "nieskazitelność",
    3 : "ramionach",
    4 : "ojczyzna",
    5 : "nauka",
    6 : "cnota",
    7 : "przyrzeczeniu harcerskim",
    8 : "heraldyczną",
}


function checkAnswers() {
    const inputValues = inputs.map(element => element.value);
    let score = 0;
    for (i=0; i<Object.keys(correctAnswers).length; i++) {
        if (inputValues[i].toLowerCase() == correctAnswers[i].toLowerCase()){
            score++;
        }
    }
    scoreLabel.innerHTML = `${score}/${Object.keys(correctAnswers).length}`;
}

function revealAnswers() {
    for (i=0; i<Object.keys(correctAnswers).length; i++) {
        inputs[i].value = correctAnswers[i];
    }
}

checkBtn.addEventListener('click', checkAnswers);
answerBtn.addEventListener('click', revealAnswers);
