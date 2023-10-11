let homeScore1 = document.getElementById("home-btn1")
let homeScore2 = document.getElementById("home-btn2")
let homeScore3 = document.getElementById("home-btn3")
let awayScore1 = document.getElementById("away-btn1")
let awayScore2 = document.getElementById("away-btn2")
let awayScore3 = document.getElementById("away-btn3")
let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let homeScore = 0
let awayScore = 0

function increaseHomeScore1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    console.log(homeScore)
}

function increaseHomeScore2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    console.log(homeScore)
}

function increaseHomeScore3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    console.log(homeScore)
}

function increaseAwayScore1() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
    console.log(awayScore)
}

function increaseAwayScore2() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
    console.log(awayScore)
}

function increaseAwayScore3() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
    console.log(awayScore)
}