let timerstart
let time=0
const container = document.querySelector('.container')
const timer = document.querySelector('.timer')
const timerp = document.createElement('h1')
container.appendChild(timerp)
timerp.classList.add('timerp')
function start() {
    timerstart = setInterval(incre,10);
}
function incre() {
    timer.innerHTML =`<i class="fa-regular fa-hourglass-half"></i> ` + time.toFixed(2) + "secs"
    time += 0.01
}
function stop() {
    clearInterval(timerstart);
}
function reset() {
    time = 0;
    clearInterval(timerstart);
    timer.innerHTML = time + "secs"
}
