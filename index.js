var sosmedc = document.getElementById("sosmedc");
var morebtn = document.getElementById("morebtn");
sosmedc.style.transform = "TranslateX(-275px)";
isMoreOpened = 0;
morebtn.style.color = "white";
morebtn.style.fontSize = "20px";
function opensosmed() {
    if (isMoreOpened == 0) {
        sosmedc.style.transform = "TranslateX(0)";
        isMoreOpened = 1;
        morebtn.innerHTML = "<";
        console.log(isMoreOpened);
    }
    else if (isMoreOpened == 1)
    {
        sosmedc.style.transform = "TranslateX(-275px)";
        isMoreOpened = 0;
        morebtn.innerHTML = ">";
        console.log(isMoreOpened);
    }    
}