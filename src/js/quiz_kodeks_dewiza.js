
const inputs = Array.from(document.querySelectorAll('input'));
const checkBtn = document.getElementById("checkBtn");
const answerBtn = document.getElementById("answerBtn");
const scoreLabel = document.getElementById("scoreLabel");
const correctAnswers = {
    0 : "Drogowskazem",
    1 : "Zobacz",
    2 : "Biernymi",
    3 : "Życiu",
    4 : "Kodeks Wędrowniczy",
    5 : "Duchowa",
    6 : "Horyzontów",
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
