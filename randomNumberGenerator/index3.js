const roll = document.getElementById('roll');
const rolled = document.getElementById('rolled');
const min = 1;
const max = 6;
let randomNum;

roll.onclick = function () {
    randomNum = Math.floor(Math.random() * (max - min)) + min;
    rolled.textContent = randomNum;
}



