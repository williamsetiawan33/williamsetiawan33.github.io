const contList = document.getElementsByClassName("container-list")[0];
const contCreate = document.getElementsByClassName("container-create")[0];
const contMain = document.getElementsByClassName("container-main")[0];
const questionRow = document.getElementsByClassName("question-row");
const questionCol = document.getElementsByClassName("question-col");

// elemen pada bagian create
const questionInput = document.getElementById("questionInput");
const answerInput = document.getElementById("answerInput");
const hintInput = document.getElementById("hintInput");

// identitas pemain
let playerId = localStorage.getItem("playerId");
let level = localStorage.getItem("level");
let createPermis = sessionStorage.getItem("createPermis");
let selectedLevel = 0;

// redirect if not have permission
if (createPermis == "true") { }
else if (createPermis == "false") { }

// fungsi buat pertanyaan
function createAnswer() {
    if (questionInput.value != "" && answerInput.value != "" && hintInput.value != "") {
        const ajaxCreate = new XMLHttpRequest();
        ajaxCreate.onload = function () {
            let json = JSON.parse(this.responseText);
            console.log(json);
            if (json.message == "succes") {
                alert("Pertanyaan berhasil dibuat.");
                questionInput.value = "";
                answerInput.value = "";
                hintInput.value = "";
            }
            else if (json.message == "failed") {
                alert("Pertanyaan gagal dibuat");
            }
        };
        ajaxCreate.open("POST", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php");
        ajaxCreate.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajaxCreate.send("submit=submit" + "&" + "playerId=" + playerId + "&" + "question=" + questionInput.value + "&" + "answer=" + answerInput.value + "&" + "hint=" + hintInput.value + "&" + "level=" + level + "&" + "createQuestion=createQuestion");
    }
    else {
        alert("form gak boleh kosong");
    }
}

// fungsi membuka container list
function openList() {
    if (playerId == null) {
        alert("kamu enggak peringkat 10, tingkatkan lagi !");
    }
    else {
        contMain.classList.remove("d-flex");
        contMain.style.display = "none";
        contCreate.classList.remove("d-flex");
        contCreate.style.display = "none";
        contList.style.display = "block";
        document.getElementsByClassName("list-guide")[0].style.display = "inline";
    }
}

// fungsi membuka container main
function openMain() {
    contMain.classList.add("d-flex");
    // contMain.style.display = "none";
    contCreate.classList.remove("d-flex");
    contCreate.style.display = "none";
    contList.style.display = "none";
    document.getElementsByClassName("list-guide")[0].style.display = "none";
}

// fungsi membuka container create
function openCreate() {
    if (createPermis == "false") {
        alert("kamu enggak peringkat 10, tingkatkan lagi !");
    }
    else if (createPermis == "true") {
        contMain.classList.remove("d-flex");
        contMain.style.display = "none";
        contCreate.classList.add("d-flex");
        // contCreate.style.display = "none";
        contList.style.display = "none";
        document.getElementsByClassName("list-guide")[0].style.display = "none";
    }
}

// fungsi mengambil data soal dari db
// console.log(questionRow.length);
// console.log(questionRow[0]);
function getQuestion(level) {
    let questionAmount = 1;
    selectedLevel = level;
    console.log(selectedLevel);
    const ajaxQuestion = new XMLHttpRequest();
    ajaxQuestion.onload = function () {
        let json = JSON.parse(this.responseText);
        // console.log(json);

        let lastChild = questionCol[0].lastChild;
        while (lastChild) {
            questionCol[0].removeChild(lastChild);
            lastChild = questionCol[0].lastChild;
        }

        for (let i = 0; i < json.length; i++) {
            const row = document.createElement("div");
            row.classList.add("row", "my-2", "mx-2", "question-row");
            row.style.fontSize = "20px";
            row.setAttribute("onclick", 'removeQuestion("' + json[i].questionId + '", "' + json[i].question + '")');

            const col1 = document.createElement("div");
            col1.classList.add("col-2", "col-md-1", "d-flex", "justify-content-center", "align-items-center");
            col1.innerHTML = questionAmount;

            const col2 = document.createElement("div");
            col2.classList.add("col-10", "col-md-11");
            const pcol2 = document.createElement("p");
            pcol2.classList.add("p-0", "m-0");
            pcol2.innerHTML = json[i].question;

            // append all elements
            col2.appendChild(pcol2);
            row.appendChild(col1);
            row.appendChild(col2);
            questionCol[0].appendChild(row);
            questionAmount++;
        }
    };
    ajaxQuestion.open("GET", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php?req=questionPlayer&player=" + playerId + "&level=" + level);
    ajaxQuestion.send();
}

function removeQuestion(questionId, questionContent) {
    let isConfirm = window.confirm("Kamu yakin akan menghapus pertanyaan : " + questionContent + " ?");
    if (isConfirm == true) {
        const ajaxDelete = new XMLHttpRequest();
        ajaxDelete.open("GET", "https://coba-tebak-api.000webhostapp.com/coba-tebak/api.php?req=removeQuestion&questionId=" + questionId);
        ajaxDelete.send();
    }
    getQuestion(selectedLevel);
}