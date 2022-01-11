// Timer variables
var hoursLabel;
var minutesLabel;
var secondsLabel;
var totalSeconds = 0;

// Game 1 variables
var money1 = 0;

// Main
document.addEventListener('DOMContentLoaded', function() {
    console.log("Loading scripts...");
    makeTimer();
    makeButton1();
});

function makeTimer() {
    hoursLabel = document.getElementById("timer-hours");
    minutesLabel = document.getElementById("timer-minutes");
    secondsLabel = document.getElementById("timer-seconds");

    setInterval(setTime, 1000);
}

function setTime() {
    totalSeconds += 1;

    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    hoursLabel.innerHTML = pad(parseInt((totalSeconds / 60) / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function makeButton1() {
    var button1 = document.getElementById("button1");

    button1.addEventListener('click', function() {
        money1 += 1;

        console.log("Adding to total...");

        var total1 = document.getElementById("total1");
        total1.innerHTML = money1;
    });
}