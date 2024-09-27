let timerinterval;
let elapsed = 0;
function startTimer() {
    timerinterval = setInterval(() => {
        elapsed++;
        document.getElementById('timer').innerText = elapsed
    }, 1)
}
startTimer()
