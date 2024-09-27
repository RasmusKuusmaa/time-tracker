let timerinterval;
let elapsed = 0;

function formatTime(seconds){
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) /60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0'); 
    return `${hours}:${minutes}:${secs}`
}
let isStarted = false;
function startTimer() {
    if (!isStarted) {
        isStarted = true
        timerinterval = setInterval(() => {
            elapsed++;
            document.getElementById('timer').innerText = formatTime(elapsed)
        }, 1000)
    }
}
function stopTimer() {
    isStarted = false;
    clearInterval(timerinterval);
}
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer)