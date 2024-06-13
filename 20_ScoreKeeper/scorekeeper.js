const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const p1score = document.querySelector("#p1score");
const p2score = document.querySelector("#p2score");
const reset = document.querySelector("#reset");
const upto = document.querySelector("#upto");

let scoreOne = 0;
let scoreTwo = 0;
let winningScore = 10;
let gameOver = false;

btnOne.addEventListener('click', function () {
    if (!gameOver) {
        scoreOne += 1;
        if (scoreOne === winningScore) {
            gameOver = true;
            p1score.classList.add('has-text-success');
            p2score.classList.add('has-text-danger');
            btnOne.disabled = true;
            btnTwo.disabled = true;
        }
        p1score.textContent = scoreOne;
    }
});


btnTwo.addEventListener('click', function () {
    if (!gameOver) {
        scoreTwo += 1;
        if (scoreTwo === winningScore) {
            gameOver = true;
            p2score.classList.add('has-text-success');
            p1score.classList.add('has-text-danger');
            btnOne.disabled = true;
            btnTwo.disabled = true;
        }
        p2score.textContent = scoreTwo;
    }
});

reset.addEventListener('click', resetVal);

upto.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetVal();
});

function resetVal() {
    gameOver = false;
    scoreOne = 0;
    scoreTwo = 0;
    p1score.textContent = 0;
    p2score.textContent = 0;
    p1score.classList.remove('has-text-success', 'has-text-danger');
    p2score.classList.remove('has-text-success', 'has-text-danger');
    btnOne.disabled = false;
    btnTwo.disabled = false;

}