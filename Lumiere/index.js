var indexImg = 1;
var jumlahImg = 3;
var duration = 2000;
var isMenu = false, isBest1 = false, isBest2 = false, isBest3 = false;
var headimg = document.getElementById("headimg");
var menuc = document.getElementById("menucontainer");
var best1 = document.getElementById("best1");
var best2 = document.getElementById("best2");
var best3 = document.getElementById("best3");
var subnews = document.getElementById("subnewsslidec");
subnews.scrollLeft = 80;
subnews.scrollTop = 80;
function slide() {
    headimg.src = "img/" + "head" + indexImg + ".jpg";
    indexImg++;
    if (indexImg == 4) {
        indexImg = 1;
    }
    setTimeout(slide, duration);
}
slide();
menu();
best();
function menu() {
    console.log(isMenu);
    if (isMenu == false) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            menuc.style.top = "0";
        }
        else if (window.matchMedia("(orientation: portrait)").matches) {
            menuc.style.top = "-30vh";
        }
        isMenu = true;
    }
    else {
        if (window.matchMedia("(orientation: landscape)").matches) {
            menuc.style.top = "60vh";
        }
        else if (window.matchMedia("(orientation: portrait)").matches) {
            menuc.style.top = "30vh";
        }
        isMenu = false;
    }
}
function gotomenu() {
    window.location.href = "#menucontainer";
}
function best(card) {
    // console.log(isBest);
    if (card == null) {
        best1.style.opacity = "0";
        best2.style.opacity = "0";
        best3.style.opacity = "0";
    }
    else if (card == "card1") {
        if (isBest1 == false) {
            best1.style.opacity = "1";
            best2.style.opacity = "0";
            best3.style.opacity = "0";
            isBest1 = true;
            isBest2 = false;
            isBest3 = false;
        }
        else {
            best1.style.opacity = "0";
            best2.style.opacity = "0";
            best3.style.opacity = "0";
            isBest1 = false;
        }
    }
    else if (card == "card2") {
        if (isBest2 == false) {
            best1.style.opacity = "0";
            best2.style.opacity = "1";
            best3.style.opacity = "0";
            isBest1 = false;
            isBest2 = true;
            isBest3 = false;
        }
        else {
            best1.style.opacity = "0";
            best2.style.opacity = "0";
            best3.style.opacity = "0";
            isBest2 = false;
        }
    }
    else if (card == "card3") {
        if (isBest3 == false) {
            best1.style.opacity = "0";
            best2.style.opacity = "0";
            best3.style.opacity = "1";
            isBest1 = false;
            isBest2 = false;
            isBest3 = true;
        }
        else {
            best1.style.opacity = "0";
            best2.style.opacity = "0";
            best3.style.opacity = "0";
            isBest3 = false;
        }
    }
}

function checkbest() {
    if (isBest1 == true || isBest2 == true || isBest3 == true) {
        best1.style.opacity = "0";
        best2.style.opacity = "0";
        best3.style.opacity = "0";
        isBest1 = false;
        isBest2 = false;
        isBest3 = false;
    }
}
