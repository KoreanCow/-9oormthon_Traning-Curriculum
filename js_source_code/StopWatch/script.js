const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');

const buttonStart = document.getElementById('button_start');
const buttonStop = document.getElementById('button_stop');
const buttonReset = document.getElementById('button_reset');

let seconds = 0;
let tens = 0;
let interval;

buttonStart.onclick = () => {
    interval = setInterval(startTimer, 10);
}

buttonStop.onclick = () => {
    clearInterval(interval);
}

buttonReset.onclick = () => {
    clearInterval(interval);
    
    seconds = 0;
    tens = 0;

    appendSeconds.innerText = 0;
    appendTens.innerText = 0;
}

function startTimer() {
    tens++;

    if(tens > 99) {
        seconds++;
        appendSeconds.innerText = seconds;

        tens = 0;
        appendTens.innerText = 0;
    }else {
        appendTens.innerHTML = tens;
    }
}