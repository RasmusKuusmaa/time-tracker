let timerinterval;
let elapsed = 0;
function startTimer() {
    timerinterval = setInterval(() => {
        elapsed++;
        document.getElementById('timer').innerText = elapsed
    }, 1)
}
function stopTimer() {
    clearInterval(timerinterval);
}
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer)