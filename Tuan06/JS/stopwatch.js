let startBtn = document.getElementsByClassName('clock');
let stopBtn = document.getElementsByClassName('clock');
let resetBtn = document.getElementsByClassName('clock');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
let active;
startBtn[0].addEventListener('click', function() {
    active = true;
    stopWatch();
});

stopBtn[1].addEventListener('click', function() {
    active = false;
});

resetBtn[2].addEventListener('click', function() {
    active = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    document.getElementById('hour-clock').innerHTML = "00";
    document.getElementById('minute-clock').innerHTML = "00";
    document.getElementById('second-clock').innerHTML = "00";
    document.getElementById('count-clock').innerHTML = "00";
});

function stopWatch() {
    if (active) {
        ++count;

        if (count == 100) {
            ++second;
            count = 0;
        }

        if (second == 60) {
            ++minute;
            second = 0;
        }

        if (minute == 60) {
            ++hour;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('hour-clock').innerHTML = hrString;
        document.getElementById('minute-clock').innerHTML = minString;
        document.getElementById('second-clock').innerHTML = secString;
        document.getElementById('count-clock').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}