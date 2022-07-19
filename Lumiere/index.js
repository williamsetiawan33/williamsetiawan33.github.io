var indexImg = 1;
var jumlahImg = 3;
var duration = 2000;
var isMenu = false;
var headimg = document.getElementById("headimg");
var menuc = document.getElementById("menucontainer");
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
function gotomenu()
{
    window.location.href = "#menucontainer";
}
