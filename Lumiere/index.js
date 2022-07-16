var indexImg = 1;
var jumlahImg = 3;
var duration = 2000;
var headimg = document.getElementById("headimg");
function slide()
{
    headimg.src = "img/" + "head" + indexImg + ".jpg";
    indexImg++;
    if(indexImg == 4)
    {
        indexImg = 1;
    }
    setTimeout(slide, duration);
}
slide();
