// Stopwatch Variables
let stopwatchInterval;
let stopwatchTime = 0;

// Timer Variables
let timerInterval;
let timerTime = 0;

// Stopwatch Functions
function startStopwatch() {
  if (stopwatchInterval) return;
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    document.getElementById("stopwatchDisplay").innerText =
      formatTime(stopwatchTime);
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").innerText =
    formatTime(stopwatchTime);
}

// Timer Functions
function setTimer() {
  const input = document.getElementById("timerInput").value;
  const parts = input.split(":");
  if (parts.length === 2) {
    const minutes = parseInt(parts[0]);
    const seconds = parseInt(parts[1]);
    timerTime = minutes * 60 + seconds;
    document.getElementById("timerDisplay").innerText = formatTime(timerTime);
  }
}

function incrementTimer(seconds) {
  timerTime += seconds;
  document.getElementById("timerDisplay").innerText = formatTime(timerTime);
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (timerTime <= 0) {
      stopTimer();
      alert("Time is up!");
    } else {
      timerTime--;
      document.getElementById("timerDisplay").innerText = formatTime(timerTime);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timerTime = 0;
  document.getElementById("timerDisplay").innerText = formatTime(timerTime);
}

// Helper Function
function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [
    h > 0 ? String(h).padStart(2, "0") : "00",
    String(m).padStart(2, "0"),
    String(s).padStart(2, "0"),
  ].join(":");
}
