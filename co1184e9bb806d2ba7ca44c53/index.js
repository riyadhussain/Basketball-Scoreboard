let homeScore1 = document.querySelector(".home-btn1");
let awayScore1 = document.querySelector(".away-btn1");
let homeScoreEl = document.querySelector("#home-score");
let awayScoreEl = document.querySelector("#away-score");
let timeCounterEl = document.querySelector("#timeCounter");

const resetBtn = document.querySelector(".gameReset");
const startBtn = document.querySelector(".gameStart");
const homePenaltyBtn = document.querySelector(".penaltyHomeBtn");
const awayPenaltyBtn = document.querySelector(".penaltyAwayBtn");
const timerCount = document.querySelector("#timeCounter");
const homePenaltyCount = document.querySelector(".homePenalty");
const awayPenaltyCount = document.querySelector(".awayPenalty");

let isTimerRunning = false;
let homePenaltyTiming = 2 * 60;
let awayPenaltyTiming = 2 * 60;
let initialTiming = 20 * 60;
let startTiming = initialTiming;
let homePenaltyIntervalID;
let awayPenaltyIntervalID;
let homeScore = 0;
let awayScore = 0;

// Home/Away Score Increments
function updateHomeScore() {
  homeScore++;
  homeScoreEl.textContent = homeScore;
}

function updateAwayScore() {
  awayScore++;
  awayScoreEl.textContent = awayScore;
}

// function higherScore() {
//   if (homeScore > awayScore) {
//     container.classList.toggle("highScore");
//   }
// }

function increaseScoresBy1() {
  homeScore1.addEventListener("click", updateHomeScore);
  awayScore1.addEventListener("click", updateAwayScore);
}

increaseScoresBy1();
// higherScore();

// Goal Horns
function playGoalHorn() {
  let homeHorn = new Audio("audio/rangers.mp3");
  homeHorn.play();
}

function playBooHorn() {
  let awayHorn = new Audio("audio/boo.mp3");
  awayHorn.play();
}

// Period Timer
function updateTimer() {
  const minutes = Math.floor(startTiming / 60);
  let seconds = startTiming % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerCount.innerHTML = `${minutes}:${seconds}`;
  startTiming--;

  if (startTiming < 0) {
    clearInterval(intervalID);
    isTimerRunning = false;
  }
}

// Penalty Timers
function startHomePenaltyTimer() {
  const minutes = Math.floor(homePenaltyTiming / 60);
  let seconds = homePenaltyTiming % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  homePenaltyCount.innerHTML = `${minutes}:${seconds}`;
  homePenaltyTiming--;

  if (homePenaltyTiming < 0) {
    clearInterval(homePenaltyIntervalID);
    alert("Home penalty over!");
    isTimerRunning = true;
  }
}

function startAwayPenaltyTimer() {
  const minutes = Math.floor(awayPenaltyTiming / 60);
  let seconds = awayPenaltyTiming % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  awayPenaltyCount.innerHTML = `${minutes}:${seconds}`;
  awayPenaltyTiming--;

  if (awayPenaltyTiming < 0) {
    clearInterval(awayPenaltyIntervalID);
    alert("Away penalty over!");
    isTimerRunning = true;
  }
}

// Start and stop the timers
function toggleTimers() {
  if (isTimerRunning) {
    clearInterval(intervalID);
    isTimerRunning = false;
  } else {
    intervalID = setInterval(function () {
      updateTimer();
      startHomePenaltyTimer();
      startAwayPenaltyTimer();
    }, 1000);
    isTimerRunning = true;
  }
}

// Start/Stop Game (starts or stops the timer)
startBtn.addEventListener("click", function () {
  toggleTimers();
});

homePenaltyBtn.addEventListener("click", function () {
  homePenaltyTiming = 2 * 60;
  startHomePenaltyTimer();
  homePenaltyIntervalID = setInterval(startHomePenaltyTimer, 1000);
  isTimerRunning = true;
});

awayPenaltyBtn.addEventListener("click", function () {
  awayPenaltyTiming = 2 * 60;
  startAwayPenaltyTimer();
  awayPenaltyIntervalID = setInterval(startAwayPenaltyTimer, 1000);
  isTimerRunning = true;
});

// Start Game (starts timer)
startBtn.addEventListener("click", function () {
  clearInterval(intervalID);

  if (!isTimerRunning) {
    startTiming = initialTiming;
    updateTimer();
    intervalID = setInterval(updateTimer, 1000);
    isTimerRunning = true;
  }
});

// Reset Game (resets timer and score)
resetBtn.addEventListener("click", function () {
  clearInterval(intervalID);
  clearInterval(homePenaltyIntervalID);
  clearInterval(awayPenaltyIntervalID);
  startTiming = initialTiming;
  homePenaltyTiming = 2 * 60;
  awayPenaltyTiming = 2 * 60;
  updateTimer();
  homePenaltyCount.innerHTML = "0:00";
  awayPenaltyCount.innerHTML = "0:00";
  homeScore = 0;
  awayScore = 0;
  homeScoreEl.textContent = homeScore;
  awayScoreEl.textContent = awayScore;
});
