// General variables
var totalClicks = 0;
var totalClicksElement;
var currCPS = 0;
var currCPSElement;

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
    makeCPS();
    makeTimer();
    makeTotalClicks();
    makeButton1();
});

function makeCPS() {
    currCPSElement = document.getElementById("cps");

    setInterval(setCPS, 1000);
}

function setCPS() {
    currCPSElement.innerHTML = currCPS + " CPS";
    currCPS = 0;
}

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

function makeTotalClicks() {
    totalClicksElement = document.getElementById("total-clicks");
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

    button1.addEventListener('click', function() {
        // Update total clicks
        totalClicks += 1;
        totalClicksElement.innerHTML = totalClicks;

        // Update money
        money1 += 1;
        money1Element.innerHTML = money1;

        // Update CPS
        currCPS += 1;
    });
}