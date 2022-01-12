// General variables
var totalClicks = 0;
var totalClicksElement;

// Timer variables
var hoursLabel;
var minutesLabel;
var secondsLabel;
var totalSeconds = 0;

// Game 1 variables
var button1;
var money1 = 0;
var money1Element;

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
    button1 = document.getElementById("button1");
    money1Element = document.getElementById("money1");
    totalClicksElement = document.getElementById("clicks");

    button1.addEventListener('click', function() {
        // Update total clicks
        totalClicks += 1;
        totalClicksElement.innerHTML = totalClicks;

        // Update money
        money1 += 1;
        money1Element.innerHTML = money1;
    });
}