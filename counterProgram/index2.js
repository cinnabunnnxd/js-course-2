
const decBtn = document.getElementById('decBtn');
const resBtn = document.getElementById('resBtn');
const addBtn = document.getElementById('addBtn');
const countLabel =document.getElementById('countLabel');
let count = 0;

addBtn.onclick = function (){
    count++;
    countLabel.textContent = count;
}

decBtn.onclick = function (){
    count--;
    countLabel.textContent = count;
}

resBtn.onclick = function (){
    count = 0;
    countLabel.textContent = count;
}

