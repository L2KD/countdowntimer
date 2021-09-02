let isShow = true;
let isRun = false;
let showForm = true;

// Update the count down every 1 second
var x = setInterval(function() {
    const hourVal = document.getElementById("input-hour").value;
    const minuteVal = document.getElementById("input-minute").value;

    // Set the date we're counting down to
    const timeToEnd = new Date();

    timeToEnd.setHours(hourVal, minuteVal, 0, 0);
    if (hourVal == 0) return;
    if (!isRun) return;

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = timeToEnd - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("minute");
    const secondElement = document.getElementById("second");

    // If the count down is finished, write some text
    if (distance < 0 && isRun) {
        // clearInterval(x);
        const content = document.getElementById("content");
        content.style.fontSize = "170px";
        content.style.display = "block";
        content.style.textAlign = "center";
        content.innerHTML = "Happy birthday <br/> !!!";
        if (isShow) {
            content.style.color = "red";
            isShow = false;
        } else {
            content.style.color = "black";
            isShow = true;
        }
    } else if (distance >= 0) {
        hourElement.innerHTML = (hours < 10 ? "0" + hours : hours);
        minuteElement.innerHTML = (minutes < 10 ? "0" + minutes : minutes);
        secondElement.innerHTML = (seconds < 10 ? "0" + seconds : seconds);

        const dot1 = document.getElementById("dot-1");
        const dot2 = document.getElementById("dot-2");
        if (isShow) {
            dot1.style.color = "red";
            dot2.style.color = "red";
            isShow = false;
        } else {
            dot1.style.color = "black";
            dot2.style.color = "black";
            isShow = true;
        }
    }


}, 1000);

const buttonSet = document.getElementById("input-set");

buttonSet.onclick = function () {
   isRun = !isRun;

    const hourVal = document.getElementById("input-hour").value;
    const minuteVal = document.getElementById("input-minute").value;

    if (hourVal > 23 || hourVal < 0) {
        alert("Hour must be greater than or equal 0 and less than or equal 23.");
        isRun = false;
        return;
    }
    if (minuteVal > 59 || minuteVal < 0) {
        alert("Minute must be greater than or equal 0 and less than or equal 23.");
        isRun = false;
        return;
    }

   if (isRun) {
       alert("Countdown start !!!");
   } else {
       alert("Countdown stop !!!");
   }
}

const wrapper = document.getElementById("wrapper");
const form1 = document.getElementById("form1");
form1.hidden = true;

wrapper.onclick = function () {
    if (showForm) {
        form1.hidden = false;
    } else {
        form1.hidden = true;
    }

    showForm = !showForm;
}


