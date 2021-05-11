const timer = document.getElementById('watch');
const inpute = document.querySelector("#text-area");
const originText = document.querySelector("#text-area").innerHTML;
var min = 0;
var sec = 0;
var millsec = 0;
var stoptime = true;
//chronometre
function startTimer() {
  if (stoptime == true) {
      stoptime=false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == true) {
    stoptime = false;
  }
}
var interval;
function timerCycle() {
    if (stoptime == false) {
    millsec = parseInt(millsec);
    sec = parseInt(sec);
    min = parseInt(min);

   millsec = millsec + 1;

    if (millsec == 60) {
      sec = sec + 1;
      millsec = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
      millsec = 0;
    }

    if (millsec < 10 || millsec == 0) {
      millsec = '0' + millsec;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if ( min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = min + ':' + sec + ':' + millsec;

    interval=setTimeout("timerCycle()", 10);
  }
}
function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    min = 0;
    sec = 0;
    millsec = 0;
}

//Text_verification

var array =['JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les technologies HTML et CSS, JavaScript est parfois considéré comme l une des technologies cœur du World Wide Web',
'Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains.',
'Business intelligence (BI) leverages software and services to transform data into actionable insights that inform an organization’s strategic and tactical business decisions. BI tools access and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs, charts and maps to provide users with detailed intelligence about the state of the business.'];
var textContent;

const updateText = () => {
  textContent = array[Math.floor(Math.random() * array.length)];
  document.querySelector(".text").textContent = textContent;
}
updateText();
function TypeCheck() {
  let textEntered = inpute.value;
  let originTextMatch = originText.substring(0,textEntered.length);

  if (textEntered == originText) {
      clearInterval(interval);
      inpute.style.border = "6px solid blue";
  } else {
      if (textEntered == originTextMatch) {
         inpute.style.border = "6px solid red ";
      } else {
        inpute.style.border = "6px solid green ";
      }
  }

}







inpute.addEventListener("keypress", startTimer, false);
inpute.addEventListener("keyup", TypeCheck, false);
