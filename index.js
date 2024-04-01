let timerId = document.getElementById('clock');


const startButton = document.getElementById('start');
startButton.addEventListener('click', function() {
    timerId = setInterval(function(start) {
        updateClock(start)
    }, 1000);
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId);
});


function updateClock() {
    const clock = document.getElementById('clock');

    const now = new Date();
    const hours = now.getHours(now);
    const minutes = now.getMinutes(now);
    const seconds = now.getSeconds(now);
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}






