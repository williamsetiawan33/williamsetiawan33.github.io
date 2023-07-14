console.log(localStorage.getItem("playerId"));
console.log(localStorage.getItem("playerName"));
console.log(localStorage.getItem("playerAccessCode"));
console.log(localStorage.getItem("levelOneScore"));
console.log(localStorage.getItem("levelTwoScore"));
console.log(localStorage.getItem("levelThreeScore"));
console.log(localStorage.getItem("level"));

let playerId = localStorage.getItem("playerId");
let playerName = localStorage.getItem("playerName");
let playerAccessCode = localStorage.getItem("playerAccessCode");
let levelOneScore = localStorage.getItem("levelOneScore");
let levelTwoScore = localStorage.getItem("levelTwoScore");
let levelThreeScore = localStorage.getItem("levelThreeScore");
let level = localStorage.getItem("level");

// fungsi untuk mengubah teks skor di navbar
function changeScoreText() {
    if (level == 1) {
        document.getElementsByClassName("score-text")[0].innerHTML = levelOneScore;
    }
    if (level == 2) {
        document.getElementsByClassName("score-text")[0].innerHTML = levelTwoScore;
    }
    if (level == 3) {
        document.getElementsByClassName("score-text")[0].innerHTML = levelThreeScore;
    }
}

// fungsi untuk submit jawaban
const questionInput = document.getElementById("questionInput");
let questionAnswer = "";
function submitAnswer() {
    if (questionInput.value == questionAnswer) {
        const ajaxAnswer = new XMLHttpRequest();
        if (level == 1) {
            levelOneScore = parseInt(levelOneScore) + 10;
            ajaxAnswer.open("POST", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php");
            ajaxAnswer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajaxAnswer.send("submitAnswer=submitAnswer" + "&" + "level=" + level + "&" + "playerId=" + playerId + "&" + "score=" + levelOneScore);
            localStorage.setItem("levelOneScore", levelOneScore);
        }
        else if (level == 2) {
            levelTwoScore = parseInt(levelTwoScore) + 10;
            ajaxAnswer.open("POST", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php");
            ajaxAnswer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajaxAnswer.send("submitAnswer=submitAnswer" + "&" + "level=" + level + "&" + "playerId=" + playerId + "&" + "score=" + levelTwoScore);
            localStorage.setItem("levelTwoScore", levelTwoScore);
        }
        else if (level == 3) {
            levelThreeScore = parseInt(levelThreeScore) + 10;
            ajaxAnswer.open("POST", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php");
            ajaxAnswer.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            ajaxAnswer.send("submitAnswer=submitAnswer" + "&" + "level=" + level + "&" + "playerId=" + playerId + "&" + "score=" + levelThreeScore);
            localStorage.setItem("levelThreeScore", levelThreeScore);
        }
        changeScoreText();
        questionInput.value = "";
        questionInput.focus();
    }
    getQuestion();
}

questionInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submitAnswer();
    }
});

// fungsi untuk mengatur data di halaman sesuai dengan soal di db
const questionText = document.getElementsByClassName("question-text")[0];
const hintText = document.getElementsByClassName("hint-text")[0];
function getQuestion() {
    const ajaxQuest = new XMLHttpRequest();
    ajaxQuest.onload = function () {
        let response = JSON.parse(this.responseText);
        questionText.innerHTML = response[0].question;
        hintText.innerHTML = response[0].hint;
        questionAnswer = response[0].answer;
        console.log(response);
    };
    ajaxQuest.open("GET", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php?req=questionLevel&level=" + level);
    ajaxQuest.send()
}
getQuestion();
changeScoreText();